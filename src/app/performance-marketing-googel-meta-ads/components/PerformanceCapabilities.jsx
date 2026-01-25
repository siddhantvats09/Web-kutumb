"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PerformanceCapabilities() {
  const capabilities = [
    {
      title: "Google Ads Growth Systems",
      desc: "Search, Performance Max, and Shopping campaigns built around keyword intent, Quality Score optimization, and predictable cost-per-acquisition.",
      image: "/samples/ads1.jpg",
      tag: "High-Intent Acquisition",
    },
    {
      title: "Meta Ads & Paid Social Scaling",
      desc: "Facebook and Instagram ad systems designed to generate demand, test creative angles, and scale profitably without sacrificing ROAS.",
      image: "/samples/ads2.jpg",
      tag: "Creative-Led Scaling",
    },
    {
      title: "Retargeting & Conversion Optimization",
      desc: "Full-funnel retargeting, landing page optimization, and analytics-driven CRO that turns traffic into qualified leads and revenue.",
      image: "/images/bg21.jpg",
      tag: "Revenue Recovery",
    },
  ];

  return (
    <section className="md:py-22 py-17 relative overflow-hidden">
          <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-1">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl text-center md:text-left font-[var(--font-playfair)] font-bold text-white"
          >
            Performance Marketing Capabilities
          </motion.h2>

          <p className="mt-4 text-white/90 max-w-3xl">
            We don’t chase clicks. We build paid acquisition systems optimized
            for
            <strong> Google Ads</strong>, <strong>Meta Ads,</strong><spam className="hidden md:block">  lower CPA,
            and scalable return on ad spend.</spam>
          </p>
        </div>

        {/* Cards – reference-style layout */}
        <div className="space-y-6 relative z-1">
          {capabilities.map((item, i) => {
            const isReverse = i % 2 === 1; // middle / alternate cards

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`
          grid md:grid-cols-2 gap-6 items-center
          rounded-3xl bg-[#1c1c1cad]
          md:px-10 md:py-12 px-4 py-8
          border border-[#3232329d]
        `}
              >
                {/* TEXT CONTENT */}
                <div className={`${isReverse ? "md:order-2" : ""} max-w-xl`}>
                  <span className="text-[11px] uppercase tracking-[0.28em] font-black text-[#c8a95f]">
                    {item.tag}
                  </span>

                  <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm md:text-base leading-relaxed text-white/90">
                    {item.desc}
                  </p>
                </div>

                {/* IMAGE */}
                <div
                  className={`
            ${isReverse ? "md:order-1" : ""}
            relative w-full h-[260px] md:h-[320px]
            flex items-center justify-center
          `}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain grayscale"
                    sizes="(min-width: 768px) 40vw, 90vw"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
