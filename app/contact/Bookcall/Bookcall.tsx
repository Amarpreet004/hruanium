"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Send, CheckCircle } from "lucide-react";

export default function BookCall() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    services: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // ✅ handle input fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      services: formData.services,
      description: formData.message,
    };

    // ✅ your credentials
    const SERVICE_ID = "service_9blr7ja";
    const TEMPLATE_ID = "template_q4y2slb";
    const PUBLIC_KEY = "F_eGD3JxW36y9bi85";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setSent(true);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setError(
          "❌ There was an error sending your message. Please check your internet connection or contact us at falconsolutions492@gmail.com"
        );
      })
      .finally(() => setLoading(false));
  };

  // ✅ success screen
  if (sent) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <CheckCircle className="w-14 h-14 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            Thank You!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your inquiry has been sent successfully. We’ll get back to you soon!
          </p>
          <button
            onClick={() => {
              setSent(false);
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                company: "",
                services: "",
                message: "",
              });
            }}
            className="bg-[#5C0632] text-white px-6 py-3 rounded-lg hover:bg-[#4a0527] transition-all"
          >
            Send Another
          </button>
        </div>
      </div>
    );
  }

  // ✅ form UI
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Let’s Build Something Amazing Together
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name *"
            required
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name *"
            required
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            required
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone *"
            required
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company (optional)"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="services"
          value={formData.services}
          onChange={handleChange}
          placeholder="Services (e.g., Web Development, SEO)"
          required
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your project..."
          rows={5}
          className="w-full border p-3 rounded-lg"
        ></textarea>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className={`inline-flex items-center justify-center px-8 py-4 rounded-lg text-white font-semibold transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#5C0632] hover:bg-[#4a0527]"
            }`}
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" /> Send My Inquiry
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
