import { useState, type ChangeEvent, type FormEvent } from "react";
import { FiMail, FiSend, FiCopy, FiCheck, FiLink } from "react-icons/fi";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiInstagram,
  SiLeetcode,
  SiGeeksforgeeks,
  SiReddit,
} from "react-icons/si";
import { Loader2 } from "lucide-react";

import { siteMetadata } from "@/data/siteMetaData.mjs";
import ContactMailToast, {
  type MailSentToastState,
} from "@/components/contact-form/contact-mail-toast";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toastState, setToastState] = useState<MailSentToastState>({
    type: null,
    value: false,
    message: "",
  });

  const allSocialLinks = [
    {
      name: "LinkedIn",
      href: siteMetadata.linkedin,
      icon: SiLinkedin,
    },
    {
      name: "GitHub",
      href: siteMetadata.github,
      icon: SiGithub,
    },
    {
      name: "X",
      href: siteMetadata.twitter,
      icon: SiX,
    },
    {
      name: "Instagram",
      href: siteMetadata.instagram,
      icon: SiInstagram,
    },
    {
      name: "LeetCode",
      href: siteMetadata.leetcode,
      icon: SiLeetcode,
    },
    {
      name: "GeeksforGeeks",
      href: siteMetadata.geeksforgeeks,
      icon: SiGeeksforgeeks,
    },
    {
      name: "Reddit",
      href: siteMetadata.reddit,
      icon: SiReddit,
    },
  ];

  const activeSocialLinks = allSocialLinks.filter((item) =>
    Boolean(item.href && item.href.trim() !== ""),
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteMetadata.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToastState({
        type: "warning",
        value: true,
        message: "Please fill in all fields",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: `Portfolio Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setToastState({
          type: "success",
          value: true,
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setToastState({
          type: response.status === 429 ? "warning" : "failure",
          value: true,
          message:
            response.status === 429
              ? "Rate limit: 5 messages per hour"
              : "Unable to send message directly. Please email me at arumanmishra887@gmail.com",
        });
      }
    } catch {
      setToastState({
        type: "failure",
        value: true,
        message: "Unable to send message. Please email me directly!",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <footer
      className="w-full px-4 py-16 sm:px-8 md:px-12 lg:px-16"
      id="contact"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">
            Let&apos;s connect
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Send a Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/70 sm:p-8">
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                Send a Message
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Have a question or want to collaborate? Drop me a message!
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col gap-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-foreground/80 sm:text-sm"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-100/70 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-zinc-700/80 dark:bg-zinc-800/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-foreground/80 sm:text-sm"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-100/70 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-zinc-700/80 dark:bg-zinc-800/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-foreground/80 sm:text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What would you like to say?"
                    className="mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-zinc-100/70 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-zinc-700/80 dark:bg-zinc-800/60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0f284e] py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-accent dark:text-background"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {/* Email Box */}
            <div className="flex items-center justify-between rounded-3xl border border-zinc-200 bg-white/70 p-5 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/70">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <FiMail className="h-6 w-6" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </span>
                  <a
                    href={`mailto:${siteMetadata.email}`}
                    className="font-mono text-sm font-semibold text-foreground hover:text-accent sm:text-base"
                  >
                    {siteMetadata.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-foreground transition-all hover:bg-zinc-100 active:scale-95 dark:border-zinc-700/80 dark:bg-zinc-800/80 dark:hover:bg-zinc-700"
              >
                {copied ? (
                  <FiCheck className="h-4 w-4 text-emerald-500" />
                ) : (
                  <FiCopy className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
            </div>

            {/* Connect with me Box */}
            {activeSocialLinks.length > 0 && (
              <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/70">
                <div className="flex items-center gap-2 text-foreground">
                  <FiLink className="h-5 w-5 text-accent" />
                  <h4 className="text-base font-bold">Connect with me</h4>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
                  {activeSocialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 rounded-xl border border-zinc-200 bg-zinc-50/80 px-3.5 py-2.5 text-sm font-medium text-foreground transition-all duration-150 hover:border-accent hover:bg-accent/5 hover:text-accent dark:border-zinc-700/70 dark:bg-zinc-800/50 dark:hover:border-accent"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-accent" />
                        <span className="truncate">{item.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Status Banner */}
            <div className="flex items-center gap-3.5 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-5 shadow-sm backdrop-blur-md dark:bg-emerald-500/10">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </span>
              <p className="text-xs font-medium text-foreground sm:text-sm">
                Currently open to new opportunities and collaborations
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-zinc-200/80 pt-8 text-center text-xs text-muted-foreground dark:border-zinc-800/80 sm:text-sm">
          © 2026 Aruman Mishra. All rights reserved.
        </div>
      </div>

      <ContactMailToast toastState={toastState} showToast={setToastState} />
    </footer>
  );
}
