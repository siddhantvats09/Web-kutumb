"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

/* ---------------------------------------------
   Typing Effect Hook (smooth + professional)
--------------------------------------------- */
function useTypingEffect(text, speed = 42, startDelay = 350) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    let active = true;

    const startTimer = setTimeout(() => {
      const typeTimer = setInterval(() => {
        if (!active) return;

        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) clearInterval(typeTimer);
      }, speed);

      return () => clearInterval(typeTimer);
    }, startDelay);

    return () => {
      active = false;
      clearTimeout(startTimer);
    };
  }, [text, speed, startDelay]);

  return displayed;
}

export default function Hero() {
  const subtitleText = useMemo(() => "Built for Performance & SEO.", []);
  const typedSubtitle = useTypingEffect(subtitleText, 40, 600);

  return (
    <section className="relative overflow-hidden">

        {/* bg video */}
        {/* <div className="absolute inset-0 z-10">
          <video
            className="h-full w-full object-cover opacity-25"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/bg3.webm" type="video/webm" />
            <source src="/videos/bg3.mp4" type="video/mp4" />
          </video>

         </div> */}
     

      <div className="mx-auto max-w-7xl px-6 md:px-8 pb-8 pt-4  md:py-10 md:pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div>
            

            {/* SINGLE H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold leading-[1.05] tracking-tight text-black"
            >
              Custom Website Development
              <br />
              <span className="italic text-3xl md:text-5xl font-medium text-[#3713ec] inline-block mt-1">
                {typedSubtitle}
                
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 max-w-xl text-base md:text-[17px] leading-relaxed text-[#0f172a]/75"
            >
              We build modern websites that load fast, rank on Google, and
              convert visitors into leads. Our development process includes{" "}
              <strong>technical SEO</strong>, <strong>Core Web Vitals</strong>,
              and a conversion-first UI system.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-black px-7 text-sm font-bold text-white shadow-[0_18px_55px_rgba(0,0,0,0.16)] hover:opacity-95 transition"
              >
                Start Your Website Project →
              </a>

              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-[#eeeeee] bg-white/70 px-7 text-sm font-bold text-black hover:bg-[#f8f9fa] transition"
              >
                View Website Work
              </a>
            </motion.div>

            {/* Social proof (desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="hidden md:block"
            >
              <div className="mt-9 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-9 w-9 rounded-full border-2 border-white bg-[#eeeeee]"
                    />
                  ))}
                </div>
                <p className="text-sm text-[#0f172a]/60 font-semibold">
                  Trusted by 100+ businesses for development & growth
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
           
            <div className="relative overflow-hidden rounded-[28px] ">
           
              <img
                src="/samples/web1.png"
                alt="Website development preview"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />

             
            </div>
 </motion.div>

          {/* Social proof (mobile) */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4 mt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-white bg-[#eeeeee]"
                  />
                ))}
              </div>
              <p className="text-sm text-[#0f172a]/60 font-semibold">
                Trusted by 100+ businesses for development & growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
