import express from "express";
import path from "path";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";
import { registerChatRoute } from "./server/chatRoute";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(express.json());

interface ContactRequestBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const sanitizeInput = (text: string): string => {
  if (!text) return "";

  return text.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
};

const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

let contactMailer: ReturnType<typeof nodemailer.createTransport> | null = null;

function getContactMailer() {
  if (contactMailer) {
    return contactMailer;
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;

  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error("SMTP_HOST, SMTP_USER, and SMTP_PASS must be configured.");
  }

  contactMailer = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  return contactMailer;
}

app.post("/api/contact", async (req, res) => {
  try {
    const body = req.body as ContactRequestBody;
    const name = sanitizeInput(body.name || "");
    const email = sanitizeInput(body.email || "");
    const subject =
      sanitizeInput(body.subject || "") || "New Portfolio Contact";
    const message = sanitizeInput(body.message || "");

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    const transporter = getContactMailer();
    const ownerEmail =
      process.env.CONTACT_RECIPIENT_EMAIL ||
      process.env.SMTP_USER ||
      "vchandni040@gmail.com";
    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;
    const submissionDate = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "medium",
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const ownerMailHtml = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a;">
        <h2 style="margin:0 0 12px;">New portfolio contact submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Submitted:</strong> ${escapeHtml(submissionDate)}</p>
        <p><strong>Message:</strong></p>
        <div style="padding:14px;border-left:4px solid #2563eb;background:#eff6ff;border-radius:8px;">${safeMessage}</div>
      </div>
    `;

    const autoReplyHtml = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a;">
        <h2 style="margin:0 0 12px;">Thanks for reaching out, ${safeName}</h2>
        <p>I received your message about <strong>${safeSubject}</strong> and I will reply soon.</p>
        <p style="margin-top:16px;"><strong>Your message:</strong></p>
        <div style="padding:14px;border-left:4px solid #0f766e;background:#f0fdfa;border-radius:8px;">${safeMessage}</div>
        <p style="margin-top:16px;">If needed, you can reply directly to this email and I will see it in my inbox.</p>
      </div>
    `;

    const ownerText = [
      "New portfolio contact submission",
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      `Submitted: ${submissionDate}`,
      "Message:",
      message,
    ].join("\n\n");

    const autoReplyText = [
      `Thanks for reaching out, ${name}`,
      `I received your message about "${subject}" and I will reply soon.`,
      "",
      "Your message:",
      message,
    ].join("\n");

    await transporter.sendMail({
      from: fromAddress,
      to: ownerEmail,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: ownerText,
      html: ownerMailHtml,
    });

    await transporter.sendMail({
      from: fromAddress,
      to: email,
      replyTo: ownerEmail,
      subject: `Thanks for your message, ${name}`,
      text: autoReplyText,
      html: autoReplyHtml,
    });

    return res.json({
      success: true,
      message:
        "Thank you! Your message has been sent successfully. I'll get back to you soon.",
    });
  } catch (err: any) {
    console.error("Error in /api/contact:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to send the contact message.",
      details: err.message || "Server error",
    });
  }
});

registerChatRoute(app);

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
