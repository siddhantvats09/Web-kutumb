// components/sections/Section2.jsx
"use client";

import { motion } from "framer-motion";

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
          className="mx-auto max-w-5xl"
        >
          <div className="rounded-2xl bg-[#f8f9fa] px-6 py-6 border border-[#eeeeee]">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {["Trusted by Brands", "Top-notch Quality", "Creative Solutions", "Results-Driven"].map(
                (name) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 text-xs font-semibold text-[#0f172a]/70"
                  >
                    <span className="h-4 w-4 rounded bg-[#eeeeee]" />
                    {name}
                  </div>
                )
              )}
            </div>

            <div className="mt-5 text-center text-[10px] uppercase tracking-[0.3em] text-[#0f172a]/45">
              Trusted for Web, SEO & Performance Growth
            </div>
          </div>
        </motion.div>

        {/* Heading + micro label */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <h2 className="font-[var(--font-playfair)] text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-[#000000] md:text-5xl">
              From Idea to Impact.
              <br />
              <span className="italic font-medium text-[#3713ec]">
                Built to Rank & Convert.
              </span>
            </h2>

            {/* <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#0f172a]/65 md:text-base">
              We transform raw concepts into premium digital systems —{" "}
              <strong>website design</strong>, <strong>website development</strong>,{" "}
              <strong>SEO services</strong>, and <strong>Google & Meta Ads</strong>{" "}
              engineered for measurable growth.
            </p> */}
          </motion.div>

          {/* Micro note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="hidden md:flex items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#3713ec] font-semibold">
              Scroll to see the upgrade
            </span>
            <span className="h-px w-24 bg-[#eeeeee]" />
          </motion.div>
        </div>

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
                <div className="rounded-2xl border border-[#eeeeee] bg-[#f8f9fa] p-5 md:p-7">
                  <div className="h-24 rounded-xl border border-dashed border-[#eeeeee] bg-[#ffffff]" />

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="h-20 rounded-xl border border-[#eeeeee] bg-[#ffffff]" />
                    <div className="h-20 rounded-xl border border-[#eeeeee] bg-[#ffffff]" />
                  </div>

                  {/* small UI hint */}
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="h-10 rounded-lg bg-white border border-[#eeeeee]" />
                    <div className="h-10 rounded-lg bg-white border border-[#eeeeee]" />
                    <div className="h-10 rounded-lg bg-white border border-[#eeeeee]" />
                  </div>
                </div>

                {/* bottom tag */}
                <span className="absolute bottom-6 left-6 inline-flex items-center rounded-md bg-[#000000] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white md:bottom-8 md:left-9">
                  Raw Concept
                </span>
              </div>

              {/* RIGHT: Finished Product */}
              <div className="relative bg-[#0b1220] p-4 md:p-6">
                <div className="relative h-[270px] w-full overflow-hidden rounded-2xl md:h-[360px] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_55%)]">
                  {/* premium card visuals */}
                  <div className="absolute left-6 top-10 h-44 w-60 rounded-[26px] bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(255,255,255,0.05))] backdrop-blur-sm border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.25)] md:left-10 md:top-14 md:h-56 md:w-80" />

                  <div className="absolute left-12 top-24 h-28 w-44 rounded-[22px] bg-[linear-gradient(145deg,rgba(255,255,255,0.20),rgba(255,255,255,0.08))] border border-white/10 md:left-20 md:top-32 md:h-32 md:w-60" />

                  {/* glow beam */}
                  <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full blur-3xl bg-[#3713ec]/25" />

                  {/* bottom tag */}
                  <span className="absolute bottom-4 right-4 inline-flex items-center rounded-md bg-[#3713ec] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    Finished Product
                  </span>
                </div>
              </div>
            </div>

            {/* Divider + knob */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[#3713ec] md:block" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eeeeee] bg-[#ffffff] shadow-[0_12px_35px_rgba(0,0,0,0.10)]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3713ec] text-white text-sm font-black">
                  ↓
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
