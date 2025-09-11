"use client";

import { motion } from "framer-motion";
import { LightBulbIcon, ShieldCheckIcon, SparklesIcon, ChartBarIcon } from "@heroicons/react/24/solid";

export default function Values() {
  const values = [
    {
      title: "Quality",
      desc: "We deliver excellence with pixel-perfect precision.",
      icon: <ShieldCheckIcon className="w-10 h-10 text-green-700" />,
    },
    {
      title: "Innovation",
      desc: "We think beyond boundaries and embrace new ideas.",
      icon: <LightBulbIcon className="w-10 h-10 text-green-700" />,
    },
    {
      title: "Integrity",
      desc: "We believe in transparency, honesty, and trust.",
      icon: <SparklesIcon className="w-10 h-10 text-green-700" />,
    },
    {
      title: "Results",
      desc: "We focus on impact, growth, and measurable success.",
      icon: <ChartBarIcon className="w-10 h-10 text-green-700" />,
    },
  ];

  return (
    <section className="py-14 px-6 md:px-16 bg-black overflow-hidden relative">
      <div className="absolute inset-0 opacity-100 z-0 bg-[url('/images/bgwhy.jpg')] bg-cover bg-center"></div>

      <div className="relative max-w-5xl mx-auto text-center mb-12 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Our Core Values
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-xl mx-auto"
        >
          The principles that fuel everything we do.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-[#1c1c1c68] to-[#2a2a2a64] backdrop-blur-md border border-white/20 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          >
            <div className="mb-4">{value.icon}</div>
            <h3 className="text-white text-lg md:text-xl font-semibold mb-2">{value.title}</h3>
            <p className="text-gray-400 text-sm">{value.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
