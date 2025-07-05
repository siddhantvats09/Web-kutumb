"use client";

import { FaHandshake, FaStar, FaLightbulb, FaChartBar } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <FaHandshake size={28} />,
      title: "Trusted by Brands",
      desc: "We build long-term partnerships with businesses.",
    },
    {
      icon: <FaStar size={28} />,
      title: "Top-notch Quality",
      desc: "Uncompromised quality in design, code & marketing.",
    },
    {
      icon: <FaLightbulb size={28} />,
      title: "Creative Solutions",
      desc: "Unique, custom strategies for your brand success.",
    },
    {
      icon: <FaChartBar size={28} />,
      title: "Results-Driven",
      desc: "Our focus stays on measurable business outcomes.",
    },
  ];

  return (
    <section className="relative py-10 md:py-16 px-6 md:px-16 bg-black overflow-hidden z-10">
      {/* Background Image */}
      <Image
        src="/images/bgwhy.jpg" // Replace with your actual image path
        alt="Background"
        fill
        className="absolute inset-0 object-cover opacity-100 z-0"
      />

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center mb-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Why Choose Us?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          We don’t just deliver services — we become your reliable, creative,
          results-driven partner.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 py-10 gap-8 max-w-4xl mx-auto relative z-10">
        {points.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="flex items-start gap-4 border border-[#5b5b5b7a] bg-gradient-to-tr from-[#1c1c1c68] to-[#2a2a2a64] backdrop-blur-md p-6 rounded-2xl transition-all group hover:border-[#bf8eff]"
          >
            <div className="text-white group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
