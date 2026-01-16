// components/hero/Hero.jsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff]">
      {/* background gradient wash (subtle, premium) */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(55,19,236,0.35),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
        {/* label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center rounded-full border border-[#eeeeee] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[#0f172a]/70"
        >
          Established in the Future
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-[#000000] md:text-6xl font-[var(--font-playfair)]"
        >
          The Intelligence of
          <br />
          Tomorrow,
          <br />
          <span className="block">
            <span className="italic font-medium text-[#3713ec]">
              Crafted Today.
            </span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#0f172a]/65 md:text-base"
        >
          SixthGenX is a next-generation agency delivering website design &
          development, SEO, performance marketing, Google & Meta Ads, branding,
          and animation — built to help modern businesses grow faster.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Primary CTA */}
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-[#000000] px-7 text-sm font-medium text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3713ec] focus-visible:ring-offset-2"
          >
            Initiate Project
          </a>

          {/* Secondary CTA */}
          <a
            href="#services"
            className="inline-flex h-11 items-center justify-center rounded-md border border-[#eeeeee] bg-[#ffffff] px-7 text-sm font-medium text-[#000000] transition hover:bg-[#f8f9fa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3713ec] focus-visible:ring-offset-2"
          >
            The Service Suite
          </a>
        </motion.div>
      </div>
    </section>
  );
}
