export interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  isSimulated?: boolean;
}

/**
 * Sanitize string input to prevent basic script injection and extra whitespace
 */
const sanitizeInput = (text: string): string => {
  if (!text) return "";
  return text.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

/**
 * Validate email address format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
};

/**
 * Sends the portfolio contact form to the configured serverless endpoint.
 */
export const sendContactEmail = async (
  params: EmailParams,
): Promise<EmailResponse> => {
  const name = sanitizeInput(params.name);
  const email = sanitizeInput(params.email);
  const subject = sanitizeInput(params.subject) || "New Portfolio Contact";
  const message = sanitizeInput(params.message);

  if (!name || !email || !message) {
    throw new Error("Please fill in all required fields.");
  }

  if (!isValidEmail(email)) {
    throw new Error("Please enter a valid email address.");
  }

  const defaultContactEndpoint = [
    "/",
    ".netlify",
    "/functions/",
    "contact",
  ].join("");
  const contactEndpoint =
    import.meta.env.VITE_CONTACT_ENDPOINT || defaultContactEndpoint;

  const response = await fetch(contactEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
    }),
  });

  const data = (await response
    .json()
    .catch(() => ({}))) as Partial<EmailResponse> & {
    error?: string;
    details?: string;
  };

  if (!response.ok || !data.success) {
    throw new Error(
      data.message ||
        data.error ||
        data.details ||
        "Something went wrong. Please try again later.",
    );
  }

  return {
    success: true,
    message:
      data.message ||
      "Thank you! Your message has been sent successfully. I'll get back to you soon.",
  };
};
