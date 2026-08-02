import nodemailer from "nodemailer";

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

export const handler = async (event: any) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({
          success: false,
          message: "Method not allowed.",
        }),
      };
    }

    const body = JSON.parse(event.body || "{}") as ContactRequestBody;
    const name = sanitizeInput(body.name || "");
    const email = sanitizeInput(body.email || "");
    const subject =
      sanitizeInput(body.subject || "") || "New Portfolio Contact";
    const message = sanitizeInput(body.message || "");

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Please fill in all required fields.",
        }),
      };
    }

    if (!isValidEmail(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Please enter a valid email address.",
        }),
      };
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;

    if (!smtpHost || !smtpUser || !smtpPass) {
      throw new Error(
        "SMTP_HOST, SMTP_USER, and SMTP_PASS must be configured.",
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const ownerEmail =
      process.env.CONTACT_RECIPIENT_EMAIL || process.env.SMTP_USER || smtpUser;
    const fromAddress = process.env.SMTP_FROM || smtpUser;

    const ownerText = [
      "New portfolio contact submission",
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      message,
    ].join("\n");

    await transporter.sendMail({
      from: fromAddress,
      to: ownerEmail,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: ownerText,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message:
          "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      }),
    };
  } catch (error: any) {
    console.error("Error in contact function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Failed to send the contact message.",
        details: error?.message || "Server error",
      }),
    };
  }
};
