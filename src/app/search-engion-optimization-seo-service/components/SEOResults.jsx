"use client";

import { motion } from "framer-motion";

export default function SEOResults() {
  return (
    <section className="relative py-16 md:py-8  overflow-hidden">
         <div
            className="absolute inset-0 opacity-100 z-[-1]"
            style={{
              backgroundImage: "url('/images/bgwhy2.jpg')",
              backgroundRepeat: "repeat",
              backgroundSize: "420px",
              backgroundPosition: "top left",
            }}
          />
      <div className="mx-auto max-w-7xl px-6 md:px-12 grid gap-12 md:grid-cols-2 items-center">
        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Results That Speak
            <br />
            <span className="italic font-medium text-[#c8a95f]">
              Louder Than Keywords
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-white/70 text-base leading-relaxed">
            We don’t just promise rankings — we deliver measurable revenue impact.
            Here’s the average growth our SEO clients see within the first
            12 months.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {[
            { value: "+300%", label: "Organic Traffic" },
            { value: "4.5x", label: "ROI Average" },
            { value: "#1", label: "Page Rankings" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-[#c8a95f]">
                {stat.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.25em] text-white/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
