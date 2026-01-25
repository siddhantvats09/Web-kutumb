"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PerformanceRoadmap from "./PerformanceRoadmap";
import PerformanceCapabilities from "./PerformanceCapabilities";

export default function PerformanceMarketingPage() {
  return (
    <main className=" text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative px-6 pt-14 md:pt-22 md:pb-20 pb-5">
        {/* subtle grid bg */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold leading-[1.05]"
            >
              Performance Marketing Built for
              <br />
              <span className="italic font-medium text-[#c8a95f]">
                Google - Meta Ads & Revenue.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-base md:text-[17px] leading-relaxed text-white/80"
            >
              We design and scale <strong>performance-driven ad systems</strong>{" "}
              — not random campaigns. Our paid media strategies combine{" "}
              <strong>Google Ads</strong>, <strong>Meta Ads</strong>, conversion
              tracking, and CRO to reduce CPA and increase ROAS at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#c8a95f] px-7 text-sm font-bold text-black hover:opacity-95 transition"
              >
                Book Performance Audit →
              </Link>

              <Link
                href="#work-samples"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-7 text-sm font-bold text-white hover:bg-white/10 transition"
              >
                View Results
              </Link>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(200,169,95,0.18),transparent_55%)]">
              <img
                src="/samples/pm.jpg"
                alt="Performance marketing dashboard showing ROAS, CPA, and conversion metrics"
                className="w-full h-auto object-cover"
              />

              <div className="absolute bottom-4 right-4 rounded-xl border border-[#c8a95f]/30 bg-black/70 px-4 py-3 backdrop-blur">
                <div className="md:text-[11px] text-[8px] uppercase tracking-widest text-white/60">
                  Avg ROAS
                </div>
                <div className="md:text-[24px] text-[16px] font-black text-[#c8a95f]">
                  4.6x
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <PerformanceCapabilities></PerformanceCapabilities>

      <PerformanceRoadmap></PerformanceRoadmap>

      {/* ================= METRICS ================= */}
      <section className="md:py-20 py-14 bg-[#c8a95f]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { value: "300%", label: "ROAS Growth" },
            { value: "40%", label: "Lower CPA" },
            { value: "$10M+", label: "Ad Spend Managed" },
            { value: "24/7", label: "Optimization" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-black text-[#ffffff]">
                {stat.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* ================= Work Samples ================= */}

   <section id="work-samples" className="relative py-20 px-6 overflow-hidden">

      <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />
  {/* Heading */}
  <div className="max-w-4xl relative z-1 mx-auto text-center mb-16">
    <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#c8a95f] mb-4">
      Portfolio Preview
    </p>

    <h2 className="text-3xl md:text-5xl font-[var(--font-playfair)] font-bold text-white">
      Some of Our Previous Sample Work
    </h2>
  </div>

  {/* Images Row */}
  <div
    className="
      relative max-w-7xl mx-auto
      flex flex-col md:flex-row
      items-center justify-center
      gap-10 md:gap-12
    "
  >
    {/* Image 1 */}
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -8 }}
      whileInView={{ opacity: 1, y: 0, rotate: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        relative
        w-full max-w-[300px]
        sm:max-w-[360px]
        md:max-w-[420px]
        rounded-3xl overflow-hidden shadow-2xl
      "
    >
      <img
        src="/images/ads1.jpg"
        alt="Previous project sample 1"
        className="w-full h-auto object-cover"
      />
    </motion.div>

    {/* Image 2 (center / dominant) */}
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="
        relative z-10
        w-full max-w-[340px]
        sm:max-w-[420px]
        md:max-w-[520px]
        rounded-3xl overflow-hidden shadow-2xl
      "
    >
      <img
        src="/images/ads2.jpg"
        alt="Previous project sample 2"
        className="w-full h-auto object-cover"
      />
    </motion.div>

    {/* Image 3 */}
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 8 }}
      whileInView={{ opacity: 1, y: 0, rotate: 6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="
        relative
        w-full max-w-[300px]
        sm:max-w-[360px]
        md:max-w-[420px]
        rounded-3xl overflow-hidden shadow-2xl
      "
    >
      <img
        src="/images/ads3.jpg"
        alt="Previous project sample 3"
        className="w-full h-auto object-cover"
      />
    </motion.div>
  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="md:py-20 py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Scale Paid Ads
            <span className="text-[#c8a95f]"> Profitably?</span>
          </h2>

          <p className="mt-5 text-white/70 text-lg">
            Let’s turn Google Ads and Meta Ads into a predictable growth engine
            — not an expense line item.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contactus"
              className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#c8a95f] px-10 text-black font-bold"
            >
              Start Performance Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
