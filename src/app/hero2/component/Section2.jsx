// components/sections/Section2.jsx
"use client";

import { motion } from "framer-motion";
import Upgrade from "./Upgrade";

export default function Section2() {
  return (
    <section className="relative bg-[#ffffff] overflow-hidden">
      {/* subtle section divider (looks clean under hero) */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#eeeeee] to-transparent" />

      {/* soft glow to match hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle_at_center,rgba(55,19,236,0.16),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 md:pb-20 md:pt-14">
        {/* Brand row (social proof under hero) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-6xl px-6"
        >
          <div className="rounded-[24px] border border-[#eeeeee] bg-[#f8f9fa] px-5 py-6 sm:px-8 sm:py-8">
            {/* heading */}
            <div className="text-center">
              <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.32em] text-black/45">
                Social Proof
              </p>

              <h3 className="mt-3 text-xl sm:text-2xl font-[var(--font-playfair)] font-bold text-black">
                Trusted by businesses that value growth
              </h3>

              <p className="mt-3 max-w-2xl mx-auto text-xs sm:text-sm text-black/55 leading-relaxed">
                A reliable partner for website development, SEO systems and
                performance-driven marketing.
              </p>
            </div>

            {/* desktop row */}
            <div className="mt-8 hidden md:flex items-center justify-center gap-6">
              {[
                "Trusted by Brands",
                "Premium Quality",
                "Clean Design Systems",
                "Results-Driven Execution",
              ].map((label) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-3 rounded-full border border-[#eeeeee] bg-white px-5 py-3"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3713ec]" />
                  <span className="text-sm font-bold text-black/70 whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* mobile grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
              {[
                "Trusted by Brands",
                "Premium Quality",
                "Clean Design Systems",
                "Results-Driven Execution",
              ].map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-[#eeeeee] bg-white px-4 py-3"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3713ec]" />
                  <span className="text-xs sm:text-sm font-bold text-black/70">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Heading + micro label */}
     
<Upgrade />


        {/* Split preview block */}
     <motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.65, delay: 0.1 }}
  className="mt-10"
>
  <div className="relative overflow-hidden rounded-3xl border border-[#b0b0b0] bg-[#ffffff] shadow-[0_18px_55px_rgba(0,0,0,0.06)]">
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* LEFT: Raw Concept */}
      <div className="relative bg-[#ffffff] p-6 md:p-9">
        <div className="rounded-2xl border border-[#eeeeee] bg-[#f8f9fa] p-5 md:p-7 overflow-hidden relative">
          {/* subtle moving shimmer */}
          <motion.div
            aria-hidden
            className="absolute inset-y-0 -left-1/2 w-[50%] bg-gradient-to-r from-transparent via-black/[0.04] to-transparent"
            animate={{ x: ["-60%", "240%"] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
          />

          {/* Top block */}
          <motion.div
            className="h-24 rounded-xl border border-dashed border-[#eeeeee] bg-[#ffffff] relative z-10"
            animate={{ y: [0, -3, 0], opacity: [0.92, 1, 0.92] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* 2 cards */}
          <div className="mt-4 grid grid-cols-2 gap-4 relative z-10">
            <motion.div
              className="h-20 rounded-xl border border-[#eeeeee] bg-[#ffffff]"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="h-20 rounded-xl border border-[#eeeeee] bg-[#ffffff]"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.25,
              }}
            />
          </div>

          {/* small UI hint */}
          <div className="mt-5 grid grid-cols-3 gap-3 relative z-10">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-10 rounded-lg bg-white border border-[#eeeeee]"
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        {/* bottom tag */}
        <span className="absolute z-10 bottom-6 left-6 inline-flex items-center rounded-md bg-[#000000] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white md:bottom-8 md:left-9">
          Raw Concept
        </span>
      </div>

      {/* RIGHT: Finished Product */}
      <div className="relative bg-[#0b1220] p-4 md:p-6">
        <div className="relative h-[270px] w-full overflow-hidden rounded-2xl md:h-[360px] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_55%)]">
          {/* moving glow drift */}
          <motion.div
            aria-hidden
            className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full blur-3xl bg-[#3713ec]/25"
            animate={{
              x: [0, -18, 0],
              y: [0, -14, 0],
              opacity: [0.55, 0.8, 0.55],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* shimmer beam */}
          <motion.div
            aria-hidden
            className="absolute -left-1/2 top-0 h-full w-[40%] bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ["-40%", "240%"] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
          />

          {/* premium card visuals (floating) */}
          <motion.div
            className="absolute left-6 top-10 h-44 w-60 rounded-[26px] bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(255,255,255,0.05))] backdrop-blur-sm border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.25)] md:left-10 md:top-14 md:h-56 md:w-80"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute left-12 top-24 h-28 w-44 rounded-[22px] bg-[linear-gradient(145deg,rgba(255,255,255,0.20),rgba(255,255,255,0.08))] border border-white/10 md:left-20 md:top-32 md:h-32 md:w-60"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.35,
            }}
          />

          {/* bottom tag */}
          <span className="absolute bottom-4 right-4 inline-flex items-center rounded-md bg-[#3713ec] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            Finished Product
          </span>
        </div>
      </div>
    </div>

    {/* Divider + knob */}
    <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[#3713ec] md:block" />

    {/* knob with continuous pulse */}
    <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
      <motion.div
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eeeeee] bg-[#ffffff] shadow-[0_12px_35px_rgba(0,0,0,0.10)]"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.span
          className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3713ec] text-white text-sm font-black"
          animate={{ y: [0, 2, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.div>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
}
