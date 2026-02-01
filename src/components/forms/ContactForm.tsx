"use client";

import { useState } from "react";
import { useRef } from "react";
import { Send, User, Mail, MessageSquare, FileText } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const modalTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          inquiryType: "general",
        });
        setShowModal(true);
        if (modalTimeout.current) clearTimeout(modalTimeout.current);
        modalTimeout.current = setTimeout(() => setShowModal(false), 4000);
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full relative">
      {/* Confirmation Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
          onClick={() => setShowModal(false)}
        >
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center border-2 border-green-400 animate-fade-in">
            <div className="flex flex-col items-center gap-3">
              <svg
                className="w-12 h-12 text-green-500 mb-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M8 12l2 2l4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="text-xl font-bold text-green-700">
                Message Sent!
              </h3>
              <p className="text-gray-700">
                Thank you for contacting us. We have received your message and
                will get back to you soon.
              </p>
              <button
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white rounded-xl shadow-lg p-8 h-full border border-gray-200">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Send Us a Message
          </h2>
          <p className="text-gray-600">
            Fill out the form below and we'll get back to you as soon as
            possible
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Inquiry Type Dropdown */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Inquiry Type *
            </label>
            <select
              required
              value={formData.inquiryType}
              onChange={(e) =>
                setFormData({ ...formData, inquiryType: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4a9e] focus:border-[#0a4a9e] transition-all"
            >
              <option value="general">General Info</option>
              <option value="quotation">Quotation</option>
            </select>
          </div>
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter your full name"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4a9e] focus:border-[#0a4a9e] transition-all"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="your.email@example.com"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4a9e] focus:border-[#0a4a9e] transition-all"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Subject *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FileText className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="What is this regarding?"
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4a9e] focus:border-[#0a4a9e] transition-all"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Message *
            </label>
            <div className="relative">
              <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                <MessageSquare className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Type your message here..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a4a9e] focus:border-[#0a4a9e] transition-all resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#0a4a9e] text-white py-4 rounded-lg font-semibold hover:bg-[#05306b] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-[1.01]"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>

          {/* Success/Error Message */}
          {submitMessage && (
            <div
              className={`p-4 rounded-lg text-center font-semibold ${
                submitMessage.includes("success")
                  ? "bg-green-100 text-green-800 border-2 border-green-300"
                  : "bg-red-100 text-red-800 border-2 border-red-300"
              }`}
            >
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
