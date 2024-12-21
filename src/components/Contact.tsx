"use client"; // Add this line to specify this is a Client Component

import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon for loading state

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulating form submission (you can replace this with actual API call)
    setTimeout(() => {
      const success = Math.random() > 0.5;
      setStatus(success ? "success" : "error");

      if (success) {
        setFormData({ name: "", email: "", message: "" }); // Clear form on success
      }
    }, 1500);
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-500 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-200">
          I would love to hear from you. Whether it&apos;s a project, a collaboration, or a simple hello, feel
          free to reach out.
        </p>

        {/* Status Message */}
        {status === "success" && (
          <div className="text-green-500 mb-6">
            <p>Your message has been sent successfully! I&apos;ll get back to you soon.</p>
          </div>
        )}
        {status === "error" && (
          <div className="text-red-500 mb-6">
            <p>Oops! Something went wrong. Please try again.</p>
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300 ${status === "submitting" ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <div className="flex justify-center items-center">
                <FaSpinner className="animate-spin mr-3" /> Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
