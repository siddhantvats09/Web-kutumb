// components/sections/DevProcessTimeline.jsx
"use client";

import { motion } from "framer-motion";

export default function DevProcessTimeline() {
  const steps = [
    {
      no: "01",
      title: "Discovery & Requirements",
      time: "Week 1",
      desc: "We understand your business, target audience, competitors, and goals. Then we finalize features, sitemap, and content structure based on search intent.",
    },
    {
      no: "02",
      title: "UI/UX + Wireframe Planning",
      time: "Week 2",
      desc: "We design a conversion-first layout with clear user journeys. Every section is planned to improve engagement, navigation, and lead actions.",
    },
    {
      no: "03",
      title: "Development + Technical SEO",
      time: "Week 3–5",
      desc: "We build your website using modern stack with optimized performance, metadata, schema, internal linking, and Core Web Vitals improvements.",
    },
    {
      no: "04",
      title: "Testing, Launch & Tracking",
      time: "Week 6",
      desc: "Before launch we test speed, mobile UX, forms, and SEO tags. Then we deploy, connect GA4 tracking, and monitor performance after launch.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 md:py-6 px-6">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/bgwhy.jpg"
          alt="Website development process background"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
        {/* overlay for readability */}
        <div className="absolute inset-0 bg-white/92" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/95 to-white" />
      </div>

      {/* Accent glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,rgba(55,19,236,0.18)_0%,rgba(55,19,236,0.07)_30%,transparent_70%)]" />

      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-[var(--font-playfair)] font-bold text-black"
          >
            Website Development Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-[#0f172a]/65 text-base md:text-lg"
          >
            A clear step-by-step workflow designed to deliver a high-performance,
            SEO-optimized website — with predictable timelines and quality execution.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* vertical line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-[#eeeeee]" />

          <div className="space-y-10">
            {steps.map((s, idx) => (
              <motion.div
                key={s.no}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative pl-14"
              >
                {/* icon node */}
                <div className="absolute left-[6px] top-1">
                  <div className="h-7 w-7 rounded-full bg-white border border-[#eeeeee] flex items-center justify-center shadow-sm">
                    <span className="h-3 w-3 rounded-full bg-[#3713ec]" />
                  </div>
                </div>

                {/* card */}
                <div className="rounded-[24px] pb-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-white text-sm font-black">
                        {s.no}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-black">
                        {s.title}
                      </h3>
                    </div>

                    <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#3713ec] bg-[#3713ec]/10 px-3 py-1 rounded-full w-fit">
                      {s.time}
                    </span>
                  </div>

                  <p className="mt-4 text-sm md:text-base leading-relaxed text-[#0f172a]/65">
                    {s.desc}
                  </p>

                  {/* mini highlights */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    {idx === 0 && (
                      <>
                        <Chip text="Keyword Intent" />
                        <Chip text="Sitemap Planning" />
                        <Chip text="Competitor Scan" />
                      </>
                    )}
                    {idx === 1 && (
                      <>
                        <Chip text="Wireframes" />
                        <Chip text="Conversion UX" />
                        <Chip text="Design System" />
                      </>
                    )}
                    {idx === 2 && (
                      <>
                        <Chip text="Core Web Vitals" />
                        <Chip text="Schema Markup" />
                        <Chip text="SEO Metadata" />
                      </>
                    )}
                    {idx === 3 && (
                      <>
                        <Chip text="QA Testing" />
                        <Chip text="GA4 Tracking" />
                        <Chip text="Launch Support" />
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* small chip component */
function Chip({ text }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#eeeeee] bg-white px-3 py-1 text-[11px] font-bold text-black/70">
      {text}
    </span>
  );
}
