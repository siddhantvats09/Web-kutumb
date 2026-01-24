"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SEOCapabilities() {
  const items = [
    {
      title: "Keyword Intelligence",
      desc: "Search intent mapping, demand validation, and revenue-focused keyword targeting.",
      pos: { top: "2%", left: "5%" },
    },
    {
      title: "Technical SEO",
      desc: "Indexing, crawlability, JavaScript SEO, and Core Web Vitals optimization.",
      pos: { top: "10%", left: "55%" },
    },
    {
      title: "Content Strategy",
      desc: "Search-first content architecture built for rankings and conversions.",
      pos: { top: "24%", left: "27%" },
    },
    {
      title: "Internal Linking",
      desc: "Authority flow optimization using scalable internal link structures.",
      pos: { top: "40%", left: "78%" },
    },
    {
      title: "Link Building",
      desc: "Ethical authority acquisition to strengthen domain trust signals.",
      pos: { top: "58%", left: "8%" },
    },
    {
      title: "Local SEO",
      desc: "Map pack rankings, Google Business optimization, and geo relevance.",
      pos: { top: "47%", left: "53%" },
    },
    {
      title: "E-commerce SEO",
      desc: "Product, category, and schema optimization for scalable revenue.",
      pos: { top: "74%", left: "34%" },
    },
    {
      title: "Core Web Vitals",
      desc: "Performance engineering aligned with Google ranking thresholds.",
      pos: { top: "1%", left: "85%" },
    },
    {
      title: "Tracking & Reporting",
      desc: "GA4-based attribution, conversion tracking, and SEO ROI visibility.",
      pos: { top: "78%", left: "70%" },
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative py-12 md:py-10 md:pb-20  overflow-hidden">
      <div
        className="absolute inset-0 opacity-100 z-[-1]"
        style={{
          backgroundImage: "url('/images/bgwhy2.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "420px",
          backgroundPosition: "top left",
        }}
      />
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="mt-6 text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-[#c8a95f]">
          A Complete SEO System
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-sm md:text-base text-white/75">
          Every capability is part of a unified SEO framework — designed to
          improve visibility, authority, and measurable business growth.
        </p>
      </div>

      {/* MOBILE GRID */}
      {isMobile ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto px-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -40 : 40, // slide from left / right
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.06,
              }}
              className="rounded-2xl border border-white/10 bg-[#161616d6] px-5 py-5"
            >
              <h3 className="text-sm font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      ) : (
        /* DESKTOP WEB */
        <div className="relative h-[75vh] max-w-6xl mx-auto">
          {/* Web Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {items.map((item, i) =>
              i < items.length - 1 ? (
                <line
                  key={i}
                  x1={item.pos.left}
                  y1={item.pos.top}
                  x2={items[i + 1].pos.left}
                  y2={items[i + 1].pos.top}
                  stroke="#c8a95f"
                  strokeOpacity="0.8"
                  strokeWidth="1"
                />
              ) : null,
            )}
          </svg>

          {/* Floating Nodes */}
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              animate={{
                y: ["0%", "5%", "0%"],
              }}
              transition={{
                duration: 10, // ⬅ slower stay time
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.35,
              }}
              style={{
                position: "absolute",
                top: item.pos.top,
                left: item.pos.left,
                transform: "translate(-50%, -50%)",
              }}
              className="max-w-[220px] rounded-2xl border border-[#ffda835b] bg-white/5 px-5 py-4 backdrop-blur-sm"
            >
              <h3 className="text-sm font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-[12px] leading-relaxed text-white/70">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
