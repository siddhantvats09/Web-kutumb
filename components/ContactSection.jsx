// components/sections/ContactSection.jsx
"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

export default function ContactSection() {
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Sending request...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Request submitted successfully!", { id: toastId });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          serviceNeeded: "",
          message: "",
        });
        setShowSuccessModal(true);
      } else {
        toast.error("Failed to send request.", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-12 md:py-20 px-6 md:px-10 overflow-hidden bg-[#3713ec]/5">
      {/* Ambient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(55,19,236,0.12),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(0,0,0,0.05),transparent_40%)]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl md:text-6xl font-[var(--font-playfair)] font-bold italic mb-8 text-black leading-[1.05]">
            Book Your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-[#3713ec] to-[#3713ec]">
              Growth Consultation.
            </span>
          </h2>

          <p className="text-[#0f172a]/70 text-lg mb-10 leading-relaxed max-w-xl">
            Start with a strategic audit for your{" "}
            <strong>website design</strong>, <strong>SEO</strong>, and{" "}
            <strong>Google/Meta Ads</strong> — built to increase rankings, leads,
            and ROI.
          </p>

          {/* Image block instead of schedule call */}
          

          {/* mini trust row */}
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              "SEO + Technical Audit",
              "Ads Tracking Setup",
              "Conversion UX Review",
            ].map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center rounded-full border border-[#eeeeee] bg-white/70 px-4 py-2 text-xs font-bold text-black"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div
          id="contact-form"
          className="bg-white/55 backdrop-blur-xl border border-white/60 p-8 md:p-12 rounded-[3rem] shadow-[0_30px_120px_rgba(0,0,0,0.10)] relative"
        >
          <h3 className="text-2xl font-bold mb-3 flex items-center gap-3 text-black">
            Strategic Consultation
            <span className="text-[10px] font-black bg-[#3713ec]/10 text-[#3713ec] px-2 py-1 rounded uppercase tracking-tighter">
              High-Intent Lead Form
            </span>
          </h3>

          <p className="text-sm text-[#0f172a]/65 mb-10 leading-relaxed">
            Share your requirements — our team will respond with a recommended
            plan for your website, SEO, and paid marketing.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#0f172a]/40 uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl placeholder:opacity-35  bg-white/70 border border-[#eeeeee] focus:border-[#3713ec]/40 focus:ring-4 focus:ring-[#3713ec]/10 outline-none transition-all duration-300"
                  placeholder="Your name"
                  type="text"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#0f172a]/40 uppercase tracking-widest ml-1">
                  Business Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl placeholder:opacity-35 bg-white/70 border border-[#eeeeee] focus:border-[#3713ec]/40 focus:ring-4 focus:ring-[#3713ec]/10 outline-none transition-all duration-300"
                  placeholder="name@company.com"
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#0f172a]/40 uppercase tracking-widest ml-1">
                  Phone
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl placeholder:opacity-35 bg-white/70 border border-[#eeeeee] focus:border-[#3713ec]/40 focus:ring-4 focus:ring-[#3713ec]/10 outline-none transition-all duration-300"
                  placeholder="+91 xxxxxxxxxx"
                  type="tel"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#0f172a]/40 uppercase tracking-widest ml-1">
                  Service Needed
                </label>
                <select
                  name="serviceNeeded"
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                  className="w-full px-6 py-4  rounded-2xl bg-white/70 border border-[#eeeeee] focus:border-[#3713ec]/40 focus:ring-4 focus:ring-[#3713ec]/10 outline-none transition-all duration-300 appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="website-design">Website Design</option>
                  <option value="website-development">Website Development</option>
                  <option value="seo-services">SEO Services</option>
                  <option value="performance-marketing">Performance Marketing</option>
                  <option value="google-meta-ads">Google & Meta Ads</option>
                  <option value="graphic-logo">Graphic / Logo Design</option>
                  <option value="product-design">Product Design Creatives</option>
                  <option value="animation-2d-3d">2D / 3D Animation</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#0f172a]/40 uppercase tracking-widest ml-1">
                Project Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl bg-white/70 border border-[#eeeeee] focus:border-[#3713ec]/40 focus:ring-4 focus:ring-[#3713ec]/10 outline-none transition-all duration-300 resize-none"
                placeholder="Tell us what you need (website / SEO / ads / design)..."
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full cursor-pointer bg-black text-white py-5 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3 ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-95"
              }`}
            >
              {loading ? (
                <>
                  <span className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Submit Request <span>→</span>
                </>
              )}
            </button>

            <p className="text-xs text-[#0f172a]/50 leading-relaxed text-center pt-2">
              By submitting, you agree to receive communication from SixthGenX.
              We never share your data.
            </p>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[200] bg-black/70 flex items-center justify-center p-6">
          <div className="w-full max-w-md rounded-3xl border border-[#2a2a2a] bg-[#0b0b0b] p-10 text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-green-400 mb-2">
              Success!
            </h3>
            <p className="text-white/70 mb-8">
              Your request has been submitted. Our team will contact you shortly.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-white font-semibold transition hover:bg-white/10"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
