"use client";

import { motion } from "framer-motion";

export const metadata = {
  title: "SEO Services | SixthGenX Tech",
  description:
    "Performance-driven SEO services focused on rankings, traffic, and revenue. Technical SEO, content strategy, and sustainable organic growth.",
};

export default function SEOservicepage() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* BACKGROUND (same as Hero) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/bgwhy2.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "420px",
          backgroundPosition: "top left",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* LEFT : CONTENT */}
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold leading-[1.05] text-white"
            >
              SEO That Drives Rankings,
              <br />
              <span className="italic font-medium text-[#c8a95f]">
                Traffic & Revenue.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 text-base md:text-[17px] leading-relaxed text-white/80"
            >
              We build <strong>search-first growth systems</strong> — not
              guesswork SEO. Our approach blends <strong>technical SEO</strong>,{" "}
              <strong>search intent</strong>, and{" "}
              <strong>conversion optimization</strong> to generate sustainable
              organic revenue.
            </motion.p>
          </div>

          {/* RIGHT : IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative w-full max-w-md mx-auto md:max-w-none"
          >
            <img
              src="/images/seo3.png"
              alt="SEO growth strategy and search engine optimization"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </motion.div>
        </div>
        {/* <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            
            <div>
              <h2 className="mt-4 text-3xl md:text-4xl font-[var(--font-playfair)] font-bold leading-[1.15] text-white">
                focused on SEO, speed, and growth.
              </h2>

              <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-white/75">
                SixthGenX is a full-service digital agency specializing in{" "}
                <strong>custom website development</strong>,{" "}
                <strong>technical SEO</strong>, and{" "}
                <strong>conversion-focused UI systems</strong>. We help
                businesses improve search visibility, website performance, and
                lead generation through clean code, Core Web Vitals
                optimization, and data-driven growth strategies.
              </p>
            </div>

            <div className="w-full">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/10">
                <img
                  src="/images/seo2.jpg"
                  alt="SixthGenX digital agency team planning SEO-optimized website development strategy"
                  className="h-[260px] w-full object-cover md:h-[360px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div> */}

        <div className="relative mt-24 max-w-4xl mx-auto">
          {/* SECTION HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mt-6 text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-white leading-tight">
              A Proven SEO System
              <br />
              <span className="italic font-medium text-[#c8a95f]">
                Built for Rankings, Traffic & Revenue
              </span>
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-[16px] font-bold md:text-xl leading-relaxed text-white/90">
              OUR PROCESS
            </p>
          </motion.div>

          {/* vertical line */}
          <div className="absolute left-[14px] top-[140px] bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          {/* TIMELINE */}
          <div className="space-y-14">
            {[
              {
                step: "01",
                title: "SEO Audit & Opportunity Mapping",
                desc: "We start with a deep technical audit, keyword intent analysis, and competitor research to uncover real ranking opportunities — not assumptions.",
              },
              {
                step: "02",
                title: "Search Architecture & Planning",
                desc: "Next, we design your site’s search architecture: information structure, internal linking, and a content roadmap aligned with how users actually search.",
              },
              {
                step: "03",
                title: "Technical SEO Execution",
                desc: "Our team fixes crawlability, indexing, Core Web Vitals, schema, and performance issues to ensure your site is technically sound and search-ready.",
              },
              {
                step: "04",
                title: "Content, Authority & Tracking",
                desc: "We publish high-intent content, build topical authority, and track performance through GA4 — refining the strategy based on real data, not guesswork.",
              },
            ].map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* timeline node */}
                  <div className="absolute left-0 top-1 md:left-1/2 md:-translate-x-1/2">
                    <div className="h-7 w-7 rounded-full border border-[#c8a95f]/40 bg-[#0b0b0b] flex items-center justify-center">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#c8a95f]" />
                    </div>
                  </div>

                  {/* content card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[46%] rounded-3xl border border-white/10 bg-white/5 px-7 py-6 backdrop-blur-sm`}
                  >
                    <span className="text-[11px] font-black tracking-[0.25em] text-[#c8a95f]">
                      STEP {item.step}
                    </span>

                    <h3 className="mt-2 text-lg md:text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/75">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
