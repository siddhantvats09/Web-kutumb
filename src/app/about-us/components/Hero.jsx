"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] mt-[-50px]  md:min-h-[85vh] flex items-center justify-center px-6 md:px-16 overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/images/testi.jpg" // Change this to your About Us background image path
        alt="About Us Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover  opacity-100 blur-[2px] z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent z-0"></div>

      {/* Floating Lines - Optional Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 w-[2px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulseSlow"></div>
        <div className="absolute left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulseSlow delay-500"></div>
        <div className="absolute left-3/4 w-[2px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulseSlow delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-[0_2px_20px_rgba(255,255,255,0.3)]"
        >
          Who{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
            We Are
          </span>{" "}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg backdrop-blur-sm"
        >
          We are passionate creators, fearless problem-solvers, and your
          partners in crafting remarkable digital experiences.
        </motion.p>
      </div>
    </section>
  );
}
