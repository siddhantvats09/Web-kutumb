"use client"

// Contact.js (Component)
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceNeeded: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log(formData);
  };

  return (
    <section className="w-full bg-gradient-to-r from-purple-500/50 to-blue-500/30 py-16 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-4xl mx-auto bg-[#1f1f2e] rounded-2xl shadow-2xl p-10 md:p-14">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Let's Work Together
        </h2>
        <p className="text-gray-300 text-center max-w-xl mx-auto mb-10">
          Have a project in mind? We'd love to hear from you. Fill out the form and our team will get back to you soon.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-[#2b2b3a] text-white border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#2b2b3a] text-white border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 xxxxxxxxxx"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[#2b2b3a] text-white border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
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
              className="w-full bg-[#2b2b3a] text-white border border-gray-600 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
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
              rows="5"
              placeholder="Tell us about your project..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#2b2b3a] text-white border border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="inline-block cursor-not-allowed px-6 py-3 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

