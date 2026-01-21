// components/sections/Section2.jsx
"use client";

import { motion } from "framer-motion";
import Upgrade from "./Upgrade";
import Image from "next/image";

export default function Section2() {
  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden text-white">
      {/* ✅ Background Image Layer */}
       <div
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage: "url('/images/bgwhy2.jpg')",
              backgroundRepeat: "repeat",
              backgroundSize: "420px",
              backgroundPosition: "top left",
            }}
          />


      {/* soft glow to match hero */}

      {/* ✅ Content Layer */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-1 pt-12 md:pb-1 md:pt-14">
        {/* Brand row (social proof under hero) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-6xl px-6"
        >
          <div className="rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-[10px] md:backdrop-blur-[10px] px-5 py-6 sm:px-8 sm:py-8 shadow-[0_18px_55px_rgba(0,0,0,0.45)]">
            {/* heading */}
            <div className="text-center">
              <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.32em] text-white/45">
                Social Proof
              </p>

              <h3 className="mt-3 text-xl sm:text-2xl font-[var(--font-playfair)] font-bold text-white">
                Trusted by businesses that value growth
              </h3>

              <p className="mt-3 max-w-2xl mx-auto text-xs sm:text-sm text-white/55 leading-relaxed">
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
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#c8a95f]" />
                  <span className="text-sm font-bold text-white/70 whitespace-nowrap">
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
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#c8a95f]" />
                  <span className="text-xs sm:text-sm font-bold text-white/70">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Heading + micro label */}
        {/* <Upgrade /> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-10"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] shadow-[0_18px_55px_rgba(0,0,0,0.75)]">
          
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(200,169,95,0.12),transparent_55%)]" />

            <div className="relative grid grid-cols-1 md:grid-cols-2">
            
              <div className="relative bg-[#fffdf8] p-6 md:p-9">
          
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.22]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(10,10,10,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.06) 1px, transparent 1px)",
                    backgroundSize: "46px 46px",
                  }}
                />

                <div className="relative rounded-2xl border border-black/[0.08] bg-white p-5 md:p-7 overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
                 
                  <motion.div
                    aria-hidden
                    className="absolute inset-y-0 -left-1/2 w-[50%] bg-gradient-to-r from-transparent via-black/[0.05] to-transparent"
                    animate={{ x: ["-60%", "240%"] }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

             
                  <motion.div
                    className="h-24 rounded-xl border border-dashed border-black/[0.18] bg-[#f8f9fa] relative z-10"
                    animate={{ y: [0, -3, 0], opacity: [0.92, 1, 0.92] }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

              
                  <div className="mt-4 grid grid-cols-2 gap-4 relative z-10">
                    <motion.div
                      className="h-20 rounded-xl border border-black/[0.10] bg-white"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="h-20 rounded-xl border border-black/[0.10] bg-white"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.25,
                      }}
                    />
                  </div>

                
                  <div className="mt-5 grid grid-cols-3 gap-3 relative z-10">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="h-10 rounded-lg bg-white border border-black/[0.10]"
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

               
                <span className="absolute z-10 bottom-6 left-6 inline-flex items-center rounded-md bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white md:bottom-8 md:left-9">
                  Raw Concept
                </span>
              </div>

           
              <div className="relative bg-[#0b0b0b] p-4 md:p-6">
                <div className="relative h-[270px] w-full overflow-hidden rounded-2xl md:h-[360px] border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_55%)] shadow-[0_22px_70px_rgba(0,0,0,0.75)]">
                
                  <motion.div
                    aria-hidden
                    className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full blur-3xl bg-[#c8a95f]/30"
                    animate={{
                      x: [0, -18, 0],
                      y: [0, -14, 0],
                      opacity: [0.55, 1, 0.55],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

           
                  <motion.div
                    aria-hidden
                    className="absolute -left-1/2 top-0 h-full w-[40%] bg-gradient-to-r from-transparent via-[#c8a95f]/15 to-transparent"
                    animate={{ x: ["-40%", "240%"] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                 
                  <motion.div
                    className="absolute left-6 top-10 h-44 w-60 rounded-[26px] bg-[linear-gradient(145deg,rgba(200,169,95,0.22),rgba(255,255,255,0.04))] backdrop-blur-md border border-[#c8a95f]/25 shadow-[0_18px_50px_rgba(0,0,0,0.35)] md:left-10 md:top-14 md:h-56 md:w-80"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="absolute left-12 top-24 h-28 w-44 rounded-[22px] bg-[linear-gradient(145deg,rgba(255,255,255,0.14),rgba(200,169,95,0.06))] border border-white/10 md:left-20 md:top-32 md:h-32 md:w-60"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.35,
                    }}
                  />

              
                  <span className="absolute bottom-4 right-4 inline-flex items-center rounded-md bg-[#c8a95f] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-black">
                    Finished Product
                  </span>
                </div>
              </div>
            </div>

     
            <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[#c8a95f]/55 md:block" />

          
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8a95f]/25 bg-[#0b0b0b] shadow-[0_14px_40px_rgba(0,0,0,0.80)]"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.span
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c8a95f] text-black text-sm font-black"
                  animate={{ y: [0, 2, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ↓
                </motion.span>
              </motion.div>
            </div>
          </div>
        </motion.div> */}
        <section className="py-12 md:pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c8a95f]">
              About SixthGenX
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-[var(--font-playfair)] font-bold leading-[1.15] text-white">
              Driving digital transformation
              <br />
              with purpose and precision.
            </h2>

            <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-white/75">
              We build high-performance websites engineered for speed, SEO, and
              conversion. Our approach combines clean UI systems, technical best
              practices, and measurable growth strategy.
            </p>

       
            {/* <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-bold text-white">Our Mission</p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  To help brands grow with premium websites that rank, load fast,
                  and convert visitors into leads.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-bold text-white">Our Vision</p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  To become the most trusted partner for modern businesses
                  building reliable digital foundations.
                </p>
              </div>
            </div> */}
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/10">
              <img
                src="/samples/web1a.jpg"
                alt="SixthGenX team working on website strategy"
                className="h-[260px] w-full object-cover md:h-[360px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    </section>
  );
}
