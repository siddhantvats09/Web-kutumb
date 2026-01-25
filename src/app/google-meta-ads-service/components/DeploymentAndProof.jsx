"use client";

import { motion } from "framer-motion";

export default function DeploymentAndProof() {
  return (
    <section className="relative py-16 md:py-22 text-white overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/bgwhy2.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "420px",
          backgroundPosition: "top left",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-1">
        <div className="text-center max-w-2xl mx-auto md:mb-20 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)]">
            Our Deployment Process
          </h2>
          <p className="mt-4 text-sm text-white/70">
            From integration to aggressive scaling in four distinct phases.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* vertical line (desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden md:block w-px bg-white/10" />

          <div className="space-y-14 md:space-y-20">
            {[
              {
                title: "Audience Analysis",
                desc: "We analyze first-party data, customer behavior, and platform signals to build high-intent audiences for Google Ads and Meta Ads.",
              },
              {
                title: "Creative Generation",
                desc: "High-velocity creative testing aligned with platform algorithms to unlock scalable performance across paid social and search.",
              },
              {
                title: "Continuous A/B Optimization",
                desc: "Budgets are reallocated in real-time to top-performing ads, keywords, and audiences to reduce CPA and improve ROAS.",
              },
              {
                title: "Infinite Scaling",
                desc: "Spend is scaled gradually while monitoring profitability thresholds to maintain sustainable growth.",
              },
            ].map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* node */}
                  <div className="absolute left-4 top-1 md:left-1/2 md:-translate-x-1/2">
                    <div className="h-3 w-3 rounded-full bg-[#c8a95f]" />
                  </div>

                  {/* content */}
                  <div className="w-full md:w-[45%] pl-10 md:pl-0">
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/65 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <section
          id="work-samples"
          className="relative pt-24  pb-4 px-6 overflow-hidden"
        >
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

        {/* ===================== */}
        {/* PROOF IN PERFORMANCE */}
        {/* ===================== */}
        <div className="mt-26">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-bold font-[var(--font-playfair)]">
                Proof in Performance
              </h2>
              <p className="mt-2 text-sm text-white/60">
                Verified metrics from our active performance marketing accounts.
              </p>
            </div>

            <span className="px-4 py-2 rounded-lg bg-[#c8a95f]/15 text-[#c8a95f] text-xs font-bold uppercase tracking-wider">
              Q3 2024 Report
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  {[
                    "Vertical",
                    "Ad Spend",
                    "CPA Reduction",
                    "Avg. ROAS",
                    "Platform",
                  ].map((h) => (
                    <th
                      key={h}
                      className="p-6 text-xs font-bold uppercase tracking-wider text-white/50"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-6 font-semibold">DTC E-commerce</td>
                  <td className="p-6 text-sm">$450K / mo</td>
                  <td className="p-6 text-sm font-bold text-emerald-400">
                    −42%
                  </td>
                  <td className="p-6 font-semibold">8.4x</td>
                  <td className="p-6">
                    <span className="px-2 py-1 rounded-md bg-white/10 text-white text-[10px] font-bold">
                      Meta Ads
                    </span>
                  </td>
                </tr>

                <tr className="border-b border-white/5">
                  <td className="p-6 font-semibold">SaaS Enterprise</td>
                  <td className="p-6 text-sm">$1.2M / mo</td>
                  <td className="p-6 text-sm font-bold text-emerald-400">
                    −28%
                  </td>
                  <td className="p-6 font-semibold">5.2x</td>
                  <td className="p-6">
                    <span className="px-2 py-1 rounded-md bg-white/10 text-white text-[10px] font-bold">
                      Google Search
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="p-6 font-semibold">Fintech App</td>
                  <td className="p-6 text-sm">$85K / mo</td>
                  <td className="p-6 text-sm font-bold text-emerald-400">
                    −55%
                  </td>
                  <td className="p-6 font-semibold">12.1x</td>
                  <td className="p-6">
                    <span className="px-2 py-1 rounded-md bg-white/10 text-white text-[10px] font-bold">
                      Omni-Channel
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
