"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceNeeded: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!", { id: toastId });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          serviceNeeded: "",
          message: "",
        });
        setShowSuccessModal(true);
      } else {
        toast.error("Failed to send message.", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full relative py-16 px-6 md:px-12 lg:px-24 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bgwhy.jpg" // Replace with your actual image path
          alt="Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Dark Overlay (Optional) */}
      <div className="absolute inset-0 bg-opacity-70 z-0"></div>
      <div className="max-w-4xl relative z-10 mx-auto bg-[#000000] border border-[#2a2a2a] rounded-2xl shadow-xl p-3 py-7 lg:p-10 md:p-14 backdrop-blur-md">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Let's Work Together
        </h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-10">
          Have a project in mind? We'd love to hear from you. Fill out the form
          and our team will get back to you soon.
        </p>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Your Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-[#2b2b2e] text-white border border-gray-600 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#bf8eff] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#2b2b2e] text-white border border-gray-600 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#bf8eff] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 xxxxxxxxxx"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[#2b2b2e] text-white border border-gray-600 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#bf8eff] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Service Needed
            </label>
            <select
              name="serviceNeeded"
              value={formData.serviceNeeded}
              onChange={handleChange}
              className="w-full bg-[#2b2b2e] text-white border border-gray-600 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#bf8eff] outline-none"
              required
            >
              <option value="">Select a service</option>
              <option value="web-design">Web Design</option>
              <option value="web-development">Web Development</option>
              <option value="video-editing">Video Editing</option>
              <option value="video-shooting">Video Shooting</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="animation">Animation</option>
              <option value="photography">Photography</option>
              <option value="google-ads">Google Ads</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#2b2b2e] text-white border border-gray-600 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#bf8eff] outline-none"
              required
            />
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`
      inline-flex items-center justify-center 
      px-6 py-3 
      text-white text-lg font-medium
      rounded-xl
      bg-transparent
      border border-white/20
      hover:border-[#494646]
      hover:bg-white/5
      hover:shadow-md
      hover:scale-105
      backdrop-blur-sm
      transition-all duration-300 ease-in-out
      ${loading ? "opacity-50 cursor-not-allowed" : ""}
    `}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#1c1c1e] border border-gray-700 text-white rounded-xl p-8 text-center shadow-xl max-w-sm w-full">
            <h2 className="text-2xl font-bold text-green-500 mb-2">Success!</h2>
            <p className="text-gray-300 mb-4">
              Your message has been sent successfully.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="
    px-6 py-3 
    text-white text-lg font-medium
    rounded-xl
    bg-transparent
    border border-white/20
    hover:border-[#494646]
    hover:bg-white/5
    hover:shadow-md
    hover:scale-105
    backdrop-blur-sm
    transition-all duration-300 ease-in-out
  "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
