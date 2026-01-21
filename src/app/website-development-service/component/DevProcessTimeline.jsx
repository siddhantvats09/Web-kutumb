// components/sections/DevProcessTimeline.jsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
    <section className="relative overflow-hidden py-12 md:py-16 px-6 ">
      {/* Background Image */}
        <div
            className="absolute inset-0 opacity-100 z-[-1]"
            style={{
              backgroundImage: "url('/images/bgwhy2.jpg')",
              backgroundRepeat: "repeat",
              backgroundSize: "420px",
              backgroundPosition: "top left",
            }}
          />

      {/* Accent glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,rgba(200,169,95,0.16)_0%,rgba(200,169,95,0.07)_30%,transparent_70%)]" />

      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-[var(--font-playfair)] font-bold text-white"
          >
            Process We Follow
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-white/60 text-base md:text-lg leading-relaxed"
          >
            A clear step-by-step workflow designed to deliver a high-performance,
            SEO-optimized website — with predictable timelines and quality execution.
          </motion.p>
        </div>

        {/* Timeline Component */}
        <DevProcessTimelineInner steps={steps} />
      </div>
    </section>
  );
}

/* =========================================================
   Timeline Inner (scroll animated line + responsive layout)
========================================================= */
function DevProcessTimelineInner({ steps = [] }) {
  return (
    <div className="relative mx-auto max-w-4xl px-2 sm:px-0">
      <div className="space-y-10 sm:space-y-12">
        {steps.map((s, idx) => (
          <StepCard
            key={s.no}
            step={s}
            index={idx}
            isLast={idx === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------
   Step Card (scroll progress line)
--------------------------------------------- */
function StepCard({ step, index, isLast }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.25, 1], [0.35, 1, 1]);
  const cardY = useTransform(scrollYProgress, [0, 1], [16, 0]);

  const chips = getChipsByIndex(index);

  return (
    <div ref={ref} className="relative">
      {/* Left rail (desktop) */}
      <div className="absolute left-4 top-0 hidden sm:block">
        {!isLast && (
          <div className="relative h-full w-[2px] bg-white/10">
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-[#c8a95f] via-[#c8a95f] to-transparent"
            />
          </div>
        )}
      </div>

      <motion.div
        style={{ opacity: cardOpacity, y: cardY }}
        className="relative grid grid-cols-1 sm:grid-cols-[56px_1fr] gap-4 sm:gap-6"
      >
        {/* Node */}
        <div className="relative flex items-start justify-start sm:justify-center">
          {/* mobile line */}
          {!isLast && (
            <div className="absolute left-[14px] top-10 bottom-[-46px] w-[2px] bg-white/10 sm:hidden" />
          )}

          {/* Dot */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0.6 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35 }}
            className="relative mt-1"
          >
            <div className="h-9 w-9 rounded-full bg-[#0a0a0a] border border-white/10 shadow-sm flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-[#c8a95f]" />
            </div>

            {/* glow */}
            <div className="pointer-events-none absolute inset-0 rounded-full blur-xl bg-[#c8a95f]/25 opacity-70" />
          </motion.div>
        </div>

        {/* Card */}
        <div className="relative">
          <div className="rounded-[26px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-7 shadow-[0_18px_55px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_70px_rgba(0,0,0,0.10)] transition-all">
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-black text-white text-sm font-black">
                  {step.no}
                </span>

                <div>
                  <h3 className="text-[17px] sm:text-lg md:text-xl font-bold text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/45 font-semibold uppercase tracking-[0.22em] mt-0.5">
                    Step {index + 1}
                  </p>
                </div>
              </div>

              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.22em] text-[#c8a95f] bg-[#c8a95f]/10 px-3 py-1 rounded-full w-fit">
                {step.time}
              </span>
            </div>

            {/* Desc */}
            <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-white/60">
              {step.desc}
            </p>

            {/* Chips */}
            {chips?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2.5">
                {chips.map((c) => (
                  <Chip key={c} text={c} />
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------------------------------------------
   Chip Component
--------------------------------------------- */
function Chip({ text }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] sm:text-[11px] font-bold text-white/70">
      {text}
    </span>
  );
}

/* ---------------------------------------------
   Chips per step
--------------------------------------------- */
function getChipsByIndex(idx) {
  if (idx === 0) return ["Keyword Intent", "Sitemap Planning", "Competitor Scan"];
  if (idx === 1) return ["Wireframes", "Conversion UX", "Design System"];
  if (idx === 2) return ["Core Web Vitals", "Schema Markup", "SEO Metadata"];
  if (idx === 3) return ["QA Testing", "GA4 Tracking", "Launch Support"];
  return [];
}
