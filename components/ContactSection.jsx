"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

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
    <section
      id="contact"
      className="relative overflow-hidden py-16 md:py-24 px-6 md:px-10"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 -z-10">
        {/* base */}
        <div className="absolute inset-0 bg-[#f7f8ff]" />

        {/* gradient wash */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(55,19,236,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(0,0,0,0.06),transparent_45%)]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white" />
      </div>

      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.26em] text-black backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#3713ec] animate-pulse" />
            Growth Consultation
          </span> */}

          <h2 className="mt-6 text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-black leading-[1.05]">
            Book Your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-[#3713ec] to-[#3713ec] italic">
              Growth Consultation.
            </span>
          </h2>

          <p className="mt-6 text-[#0f172a]/70 text-base md:text-lg leading-relaxed max-w-xl">
            Start with a strategic audit for your{" "}
            <strong>website development</strong>, <strong>SEO</strong>, and{" "}
            <strong>Google/Meta Ads</strong> — designed to increase rankings,
            generate leads, and improve ROI.
          </p>

          {/* Image card replacing schedule */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-10"
          >
            <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
              <div className="relative h-[220px] md:h-[260px] overflow-hidden">
                <img
                  src="/images/contactimg.jpg"
                  alt="Consultation Preview"
                  className="absolute inset-0 h-full opacity-80 w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* content */}
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/50">
                      WHAT YOU GET
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-black">
                      Strategy Audit Session
                    </h3>
                    <p className="mt-1 text-sm text-[#0f172a]/65 leading-relaxed">
                      15–20 minute deep dive with a senior strategist — clarity,
                      roadmap and action plan.
                    </p>
                  </div>

                  <span className="shrink-0 inline-flex items-center rounded-full bg-[#3713ec]/10 text-[#3713ec] px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                    Free
                  </span>
                </div>

                {/* <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { label: "Audit", value: "Site + SEO" },
                    { label: "Goal", value: "Leads" },
                    { label: "Output", value: "Roadmap" },
                  ].map((it) => (
                    <div
                      key={it.label}
                      className="rounded-2xl border border-black/10 bg-white/60 px-3 py-3 text-center"
                    >
                      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-black/45">
                        {it.label}
                      </p>
                      <p className="mt-1 text-xs font-bold text-black">
                        {it.value}
                      </p>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </motion.div>

          {/* mini trust pills */}
          {/* <div className="mt-8 flex flex-wrap gap-3">
            {["SEO + Technical Audit", "Ads Tracking Setup", "Conversion UX Review"].map(
              (pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[11px] font-bold text-black/80 backdrop-blur"
                >
                  {pill}
                </span>
              )
            )}
          </div> */}
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.06 }}
          id="contact-form"
          className="relative"
        >
          {/* form shell */}
          <div className="relative overflow-hidden rounded-[34px] border border-black/10 bg-white/65 backdrop-blur-xl p-7 md:p-10 shadow-[0_35px_120px_rgba(0,0,0,0.12)]">
            {/* corner glow */}
            {/* <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#3713ec]/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-black/5 blur-3xl" /> */}

            <div className="relative">
              <h3 className="text-xl md:text-2xl font-bold text-black flex flex-wrap items-center gap-3">
                Strategic Consultation
                <span className="text-[10px] font-black bg-[#3713ec]/10 text-[#3713ec] px-2 py-1 rounded uppercase tracking-tighter">
                  High-Intent Lead Form
                </span>
              </h3>

              <p className="mt-3 text-sm text-[#0f172a]/65 leading-relaxed">
                Share your requirements — our team will respond with a
                recommended plan for your website development, SEO, and paid ads.
              </p>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name">
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="input"
                      placeholder="Your name"
                      type="text"
                      required
                    />
                  </Field>

                  <Field label="Business Email">
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input"
                      placeholder="name@company.com"
                      type="email"
                      required
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Phone">
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input"
                      placeholder="+91 xxxxxxxxxx"
                      type="tel"
                      required
                    />
                  </Field>

                  <Field label="Service Needed">
                    <select
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className="input appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="website-design">Website Design</option>
                      <option value="website-development">Website Development</option>
                      <option value="seo-services">SEO Services</option>
                      <option value="performance-marketing">
                        Performance Marketing
                      </option>
                      <option value="google-meta-ads">Google & Meta Ads</option>
                      <option value="graphic-logo">Graphic / Logo Design</option>
                      <option value="product-design">Product Design Creatives</option>
                      <option value="animation-2d-3d">2D / 3D Animation</option>
                    </select>
                  </Field>
                </div>

                <Field label="Project Details">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="input min-h-[140px] resize-none"
                    placeholder="Tell us what you need (website / SEO / ads / design)..."
                    rows={4}
                    required
                  />
                </Field>

                <button
                  type="submit"
                  disabled={loading}
                  className={[
                    "w-full rounded-2xl py-4 md:py-5 font-bold text-base md:text-lg shadow-xl",
                    "transition-all flex items-center justify-center gap-3",
                    "bg-black text-white hover:opacity-95",
                    loading ? "opacity-70 cursor-not-allowed" : "",
                  ].join(" ")}
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
                  By submitting, you agree to receive communication from
                  SixthGenX. We never share your data.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[200] bg-black/70 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0b0b0b] p-9 text-center shadow-2xl"
          >
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 border border-green-500/20">
              <span className="text-green-400 text-xl">✓</span>
            </div>

            <h3 className="text-2xl font-bold text-green-400 mb-2">
              Success!
            </h3>
            <p className="text-white/70 mb-8 leading-relaxed">
              Your request has been submitted. Our team will contact you shortly.
            </p>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-white font-semibold transition hover:bg-white/10"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      {/* Tailwind helper styles (scoped via className) */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 14px 18px;
          border-radius: 18px;
          border: 1px solid rgba(15, 23, 42, 0.12);
          background: rgba(255, 255, 255, 0.78);
          outline: none;
          transition: 240ms ease;
          font-size: 14px;
        }
        .input::placeholder {
          opacity: 0.4;
        }
        .input:focus {
          border-color: rgba(55, 19, 236, 0.35);
          box-shadow: 0 0 0 6px rgba(55, 19, 236, 0.1);
          background: rgba(255, 255, 255, 0.92);
        }
      `}</style>
    </section>
  );
}

/* ---------------- Field wrapper ---------------- */

function Field({ label, children }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-[#0f172a]/45 uppercase tracking-widest ml-1">
        {label}
      </label>
      {children}
    </div>
  );
}
