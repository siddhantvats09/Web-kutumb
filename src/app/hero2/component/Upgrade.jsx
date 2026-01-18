"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Upgrade() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 40%"],
  });

  // Scroll linked
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const noteOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const noteY = useTransform(scrollYProgress, [0, 1], [10, 0]);

  return (
    <div
      ref={ref}
      className="mt-10 md:mt-12 grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-[1fr_auto] md:items-end"
    >
      {/* LEFT : Heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="group"
      >
        <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.06] tracking-[-0.02em] text-black">
          <span className="relative inline-block">
            From Idea to Impact.
            {/* hover underline */}
          </span>

          <br />

          <span
            className="
              relative inline-flex items-center gap-3 italic font-medium text-[#3713ec]
              transition-all duration-500 group-hover:tracking-[-0.01em]
            "
          >
            Built to Rank & Convert.
          </span>
        </h2>

        {/* <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-[#0f172a]/70">
          We transform concepts into premium digital systems with{" "}
          <span className="font-bold text-black">website development</span>,{" "}
          <span className="font-bold text-black">SEO</span>, and{" "}
          <span className="font-bold text-black">
            conversion-focused UI systems
          </span>
          .
        </p> */}

        {/* ✅ MOBILE micro note */}
        <motion.div
          style={{ opacity: noteOpacity, y: noteY }}
          className="mt-6 md:hidden"
        >
          <div className="relative overflow-hidden rounded-full border border-[#eeeeee] bg-white/70 px-4 py-2 backdrop-blur">
            {/* shimmer line */}
            <motion.span
              aria-hidden
              className="absolute inset-y-0 -left-1/2 w-[45%] bg-gradient-to-r from-transparent via-[#3713ec]/15 to-transparent"
              animate={{ x: ["-40%", "220%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative inline-flex items-center gap-2">
              {/* pulse dot */}
              <motion.span
                className="h-2 w-2 rounded-full bg-[#3713ec]"
                animate={{ scale: [1, 1.35, 1], opacity: [0.55, 1, 0.55] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-black/60">
                Scroll to see the upgrade
              </span>
            </div>
          </div>

          {/* progress bar */}
          <div className="mt-3 h-[2px] w-full bg-[#eeeeee] rounded-full overflow-hidden">
            <motion.div
              style={{ width: lineWidth }}
              className="h-full bg-[#3713ec]"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* ✅ RIGHT : Desktop micro note (fixed alignment + continuous animation) */}
      <motion.div
        style={{ opacity: noteOpacity, y: noteY }}
        className="hidden md:flex md:justify-self-end"
      >
        <div className="relative overflow-hidden rounded-full border border-[#eeeeee] bg-white/70 px-4 py-2 backdrop-blur">
          {/* shimmer */}
          <motion.span
            aria-hidden
            className="absolute inset-y-0 -left-1/2 w-[45%] bg-gradient-to-r from-transparent via-[#3713ec]/18 to-transparent"
            animate={{ x: ["-40%", "220%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative flex items-center gap-3 select-none">
            {/* pulse */}
            <motion.span
              className="h-2 w-2 rounded-full bg-[#3713ec]"
              animate={{ scale: [1, 1.35, 1], opacity: [0.55, 1, 0.55] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#3713ec] font-black">
              Scroll to see the upgrade
            </span>

            {/* progress line */}
            <span className="relative h-px w-28 bg-[#eeeeee] overflow-hidden rounded-full">
              <motion.span
                style={{ width: lineWidth }}
                className="absolute inset-y-0 left-0 bg-[#3713ec]"
              />
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
