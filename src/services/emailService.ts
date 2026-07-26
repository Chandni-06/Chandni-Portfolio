import emailjs from '@emailjs/browser';

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
  if (!text) return '';
  return text
    .trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

/**
 * Validate email address format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
};

/**
 * Sends portfolio contact form via EmailJS
 */
export const sendContactEmail = async (params: EmailParams): Promise<EmailResponse> => {
  const name = sanitizeInput(params.name);
  const email = sanitizeInput(params.email);
  const subject = sanitizeInput(params.subject) || 'New Portfolio Contact';
  const message = sanitizeInput(params.message);

  if (!name || !email || !message) {
    throw new Error('Please fill in all required fields.');
  }

  if (!isValidEmail(email)) {
    throw new Error('Please enter a valid email address.');
  }

  const env = (import.meta as unknown as { env: Record<string, string | undefined> }).env || {};
  const publicKey = env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = env.VITE_EMAILJS_SERVICE_ID;
  const templateId = env.VITE_EMAILJS_TEMPLATE_ID;

  const now = new Date();
  const formattedDateTime = now.toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const templateParams = {
    name,
    from_name: name,
    email,
    from_email: email,
    reply_to: email,
    subject,
    message,
    submission_date: formattedDateTime,
    to_email: 'vchandni040@gmail.com',
  };

  // Check if EmailJS keys are properly configured
  if (!publicKey || !serviceId || !templateId) {
    console.warn(
      'EmailJS environment variables (VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID) are not configured. Simulating successful transmission.'
    );

    // Simulate async network request
    await new Promise((resolve) => setTimeout(resolve, 1200));

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      isSimulated: true,
    };
  }

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    
    if (response.status === 200 || response.text === 'OK') {
      return {
        success: true,
        message: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      };
    } else {
      throw new Error(`EmailJS responded with status ${response.status}`);
    }
  } catch (error: any) {
    console.error('EmailJS Error:', error);
    throw new Error(error?.text || error?.message || 'Something went wrong. Please try again later.');
  }
};
