import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  MapPin,
  MessageSquare,
  Loader2,
  X,
  Sparkles,
  Lock,
  User,
  AtSign,
  Tag,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { sendContactEmail, isValidEmail } from "../services/emailService";

interface ToastState {
  show: boolean;
  type: "success" | "error";
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState<number | null>(null);
  const [toast, setToast] = useState<ToastState>({
    show: false,
    type: "success",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message content is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToastNotification = (
    type: "success" | "error",
    message: string,
  ) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 6000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showToastNotification(
        "error",
        "Please fix the errors in the form before submitting.",
      );
      return;
    }

    // Rate limiting check (prevent submissions within 10 seconds)
    const now = Date.now();
    if (lastSubmitted && now - lastSubmitted < 10000) {
      showToastNotification(
        "error",
        "Please wait a few seconds before sending another message.",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await sendContactEmail(formData);

      if (response.success) {
        setLastSubmitted(Date.now());
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
        showToastNotification(
          "success",
          "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        );
      }
    } catch (err: any) {
      showToastNotification(
        "error",
        err?.message || "Something went wrong. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      id: "contact-email-link",
      title: "Email",
      value: PORTFOLIO_DATA.personal.email,
      href: `mailto:${PORTFOLIO_DATA.personal.email}`,
      icon: (
        <Mail className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
      ),
      badge: "Direct Mail",
      bgColor: "bg-sky-500/10 border-sky-500/30 text-sky-400",
    },
    {
      id: "contact-phone-link",
      title: "Phone",
      value: PORTFOLIO_DATA.personal.phone,
      href: `tel:${PORTFOLIO_DATA.personal.phone}`,
      icon: (
        <Phone className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
      ),
      badge: "Call / WhatsApp",
      bgColor: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    },
    {
      id: "contact-linkedin-link",
      title: "LinkedIn",
      value: "linkedin.com/in/chandni-kumari-099117371",
      href: PORTFOLIO_DATA.personal.linkedin,
      icon: (
        <Linkedin className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
      ),
      badge: "Professional Network",
      bgColor: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    },
    {
      id: "contact-github-link",
      title: "GitHub",
      value: "github.com/Chandni-06",
      href: PORTFOLIO_DATA.personal.github,
      icon: (
        <Github className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
      ),
      badge: "Code Repositories",
      bgColor: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 dark:bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-sky-500/10 border border-blue-500/20 text-blue-600 dark:text-sky-400 text-xs font-bold mb-3 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit"
          >
            Let's Work Together
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300 mx-auto rounded-full mt-3 mb-4"
          />

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            I am actively looking for Data Analyst entry-level and internship
            opportunities. Whether you have a job opening, a project proposal,
            or just want to discuss Power BI analytics, feel free to drop a
            message!
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Contact Form (Glassmorphism Card) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 shadow-2xl relative backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-outfit flex items-center gap-2">
                    <span>Send Me A Message</span>
                    <Sparkles className="w-5 h-5 text-amber-400" />
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Powered by SMTP — messages go to my inbox and you receive a
                    copy too.
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
                id="contact-form"
              >
                {/* Full Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-blue-500" />
                      <span>Full Name *</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Alex Morgan"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3.5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border ${
                          errors.name
                            ? "border-rose-500 focus:ring-rose-500"
                            : "border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
                        } text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all disabled:opacity-50`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                      <AtSign className="w-3.5 h-3.5 text-sky-400" />
                      <span>Email Address *</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="recruiter@company.com"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3.5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border ${
                          errors.email
                            ? "border-rose-500 focus:ring-rose-500"
                            : "border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
                        } text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all disabled:opacity-50`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-amber-500" />
                    <span>Subject *</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Data Analyst Opportunity / Inquiry"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border ${
                      errors.subject
                        ? "border-rose-500 focus:ring-rose-500"
                        : "border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
                    } text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all disabled:opacity-50`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Message *</span>
                    </label>
                    <span className="text-xs text-slate-400">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hello Chandni, we reviewed your Zomato Analysis Power BI dashboard and would love to connect..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border ${
                      errors.message
                        ? "border-rose-500 focus:ring-rose-500"
                        : "border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
                    } text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all disabled:opacity-50`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="contact-submit-btn"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Your Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>
                    Your email address is kept strictly private and secure.
                  </span>
                </p>
              </form>
            </div>
          </motion.div>

          {/* Right Side: Clickable Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 shadow-2xl">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-outfit mb-2">
                Clickable Contact Channels
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Click any channel below to directly connect, open your email
                client, or initiate a call.
              </p>

              <div className="space-y-3.5">
                {contactLinks.map((link) => (
                  <a
                    key={link.title}
                    id={link.id}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-sky-500/50 hover:shadow-lg transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`p-3 rounded-xl border ${link.bgColor} shrink-0`}
                      >
                        {link.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {link.title}
                        </p>
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                          {link.value}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0 ml-2">
                      {link.badge}
                    </span>
                  </a>
                ))}
              </div>

              {/* Location Badge */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-blue-500/10 border border-rose-500/20 flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-500 shrink-0">
                  <MapPin className="w-5 h-5 animate-bounce" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Current Location
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Bengaluru, Karnataka, India
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Open to relocations &amp; remote roles
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-6 right-6 z-50 max-w-md w-full px-4"
          >
            <div
              className={`p-4 sm:p-5 rounded-2xl shadow-2xl border backdrop-blur-xl flex items-start gap-3.5 ${
                toast.type === "success"
                  ? "bg-slate-900/95 text-white border-emerald-500/50 shadow-emerald-500/10"
                  : "bg-slate-900/95 text-white border-rose-500/50 shadow-rose-500/10"
              }`}
            >
              {toast.type === "success" ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
              )}

              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white">
                  {toast.type === "success" ? "Success" : "Attention Required"}
                </p>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                  {toast.message}
                </p>
              </div>

              <button
                onClick={() => setToast((prev) => ({ ...prev, show: false }))}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
