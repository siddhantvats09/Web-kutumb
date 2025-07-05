"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-black overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/bgwhy.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-100 z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-8"
        >
          Our Story ✨
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg mb-16"
        >
          From a small team of passionate creators to a full-fledged digital powerhouse — we’ve always been driven by one thing: Making brands unforgettable.
        </motion.p>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-xl bg-gradient-to-br from-[#1c1c1c68] to-[#2a2a2a64] backdrop-blur-md border border-white/20 shadow-xl flex flex-col"
          >
            <div className="w-full h-40 mb-4 relative rounded-lg overflow-hidden">
              <Image
                src="/images/mission.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-white text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-300 text-base">
              To help ambitious businesses stand out with unforgettable design, impactful content, and innovative digital solutions — all crafted with precision, creativity, and care.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-xl bg-gradient-to-br from-[#1c1c1c68] to-[#2a2a2a64] backdrop-blur-md border border-white/20 shadow-xl flex flex-col"
          >
            <div className="w-full h-40 mb-4 relative rounded-lg overflow-hidden">
              <Image
                src="/images/vision.jpg"
                alt="Our Vision"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-white text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-300 text-base">
              To be the go-to creative partner for brands worldwide, known for bold ideas, flawless execution, and results that speak louder than words.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
