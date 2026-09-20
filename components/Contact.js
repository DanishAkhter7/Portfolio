"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiCheckCircle,
  FiXCircle,
  FiX,
} from "react-icons/fi";

import { profile, socials } from "@/data/siteConfig";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const contactInfo = [
  {
    icon: <FiMail />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: <FiPhone />,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: <FiMapPin />,
    label: "Location",
    value: profile.location,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [popup, setPopup] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
      console.error(
        "EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to .env.local"
      );

      setStatus("error");
      setPopup("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      setPopup("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS send error:", err);

      setStatus("error");
      setPopup("error");
    }
  };

  return (
    <section id="contact" className="section-container">
      {/* Heading */}
      <p className="text-primary-500 font-medium mb-2">
        Get In Touch
      </p>

      <h2 className="section-title">
        Let&apos;s Work Together
      </h2>

      <p className="section-subtitle">
        Have a project in mind or just want to say hi? My inbox is always open.
      </p>

      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.label}
                  </p>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-semibold hover:text-primary-500"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 mt-8">

            {/* LinkedIn */}
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-white/20 hover:border-primary-500 hover:text-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={16} />
              </a>
            )}

            {/* GitHub */}
            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-white/20 hover:border-primary-500 hover:text-primary-500 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={16} />
              </a>
            )}

          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <form
          onSubmit={handleSubmit}
          className="card p-8 space-y-5"
        >

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-300 dark:border-white/15 focus:border-primary-500 outline-none transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-300 dark:border-white/15 focus:border-primary-500 outline-none transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Message
            </label>

            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-gray-300 dark:border-white/15 focus:border-primary-500 outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary w-full justify-center disabled:opacity-60"
          >
            {status === "sending"
              ? "Sending..."
              : "Send Message"}

            <FiSend />
          </button>

        </form>
      </div>

      {/* SUCCESS / ERROR POPUP */}
      {popup && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-6"
          onClick={() => setPopup(null)}
        >
          <div
            className="bg-white dark:bg-[#12121a] rounded-2xl max-w-sm w-full p-8 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setPopup(null)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
              aria-label="Close"
            >
              <FiX />
            </button>

            {/* Success */}
            {popup === "success" ? (
              <>
                <FiCheckCircle
                  className="mx-auto text-green-500 mb-4"
                  size={48}
                />

                <h3 className="text-lg font-bold mb-2">
                  Message Sent Successfully!
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
              </>
            ) : (
              /* Error */
              <>
                <FiXCircle
                  className="mx-auto text-red-500 mb-4"
                  size={48}
                />

                <h3 className="text-lg font-bold mb-2">
                  Something Went Wrong
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Message couldn&apos;t be sent. Please email me directly at{" "}

                  <a
                    href={`mailto:${profile.email}`}
                    className="text-primary-500 font-medium"
                  >
                    {profile.email}
                  </a>
                  .
                </p>
              </>
            )}

          </div>
        </div>
      )}
    </section>
  );
}