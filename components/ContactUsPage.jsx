"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookMessenger,
} from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function ContactUsPage() {
  return (
    <section className="relative min-h-[600px] px-6 py-16 overflow-hidden  text-white">
      {/* ================= BACKGROUND ================= */}
      <div
        className="absolute inset-0 z-0 opacity-90"
        style={{
          backgroundImage: "url('/images/bgwhy2.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "420px",
          backgroundPosition: "top left",
        }}
      />
     

      {/* ================= HEADER ================= */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-14">
        <p className="text-[11px] uppercase tracking-[0.35em] font-black text-[#c8a95f] mb-3">
          Contact SixthGenX
        </p>

        <h1 className="text-3xl sm:text-4xl font-[var(--font-playfair)] font-bold mb-4">
          Let’s Build Something Powerful
        </h1>

        <p className="text-white/65 text-sm sm:text-base">
          Have a project in mind? Want to collaborate or just say hello?  
          Drop us a message and we’ll get back to you shortly.
        </p>
      </div>

      {/* ================= CONTENT GRID ================= */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* IMAGE SIDE */}
        <div className="relative hidden md:block h-[360px] rounded-3xl overflow-hidden border border-white/10">
          <img
            src="/images/contact2.jpg"
            alt="Contact illustration"
            className="w-full h-full grayscale object-cover opacity-80"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <h2 className="text-center text-xl md:text-2xl font-bold tracking-tight text-white">
              Let’s Create Something
              <br />
              <span className="text-[#c8a95f]">Remarkable Together</span>
            </h2>
          </div>
        </div>

        {/* INFO CARD */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
          {/* Email */}
          <div className="mb-6">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#c8a95f] font-bold mb-1">
              Email
            </p>
            <a
              href="mailto:sixthgenxtech@gmail.com"
              className="text-white/85 hover:text-[#c8a95f] hover:underline transition"
            >
              sixthgenxtech@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="mb-6">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#c8a95f] font-bold mb-1">
              Phone
            </p>
            <a
              href="tel:+919817612848"
              className="text-white/85 hover:text-[#c8a95f] transition"
            >
              +91 98176 12848
            </a>
          </div>

          {/* Location */}
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#c8a95f] font-bold mb-1">
              Location
            </p>
            <p className="text-white/70">Gurgaon, India</p>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/9817612848"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-[#c8a95f]/35 bg-[#c8a95f]/10 px-6 py-3 font-bold text-[#c8a95f] hover:bg-[#c8a95f]/20 hover:shadow-[0_0_24px_rgba(200,169,95,0.25)] transition-all"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-1 z-10 flex flex-col items-center">
        <ChevronDownIcon className="h-5 w-5 text-[#c8a95f] animate-bounce" />
        <p className="mt-1 text-xs text-white/60">
          Send us a message
        </p>
      </div>
    </section>
  );
}
