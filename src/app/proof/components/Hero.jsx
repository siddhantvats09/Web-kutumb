"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] mt-[-50px] md:min-h-[80vh] flex items-center justify-center px-6 md:px-16 overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/work2.jpg" // Replace with your preferred proof/work background
        alt="Our Work Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full blur-[5px] opacity-50 z-0"
      />


      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Our Work & Proofs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg"
        >
          Real projects. Real results. Here's a glimpse into the work that speaks for itself.
        </motion.p>
      </div>
    </section>
  );
}
