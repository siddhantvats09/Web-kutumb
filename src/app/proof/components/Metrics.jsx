"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Metrics() {
  const metrics = [
    { stat: "95%", label: "Client Satisfaction Rate" },
    { stat: "80%", label: "Website Conversion Uplift" },
    { stat: "3x", label: "Avg. Social Growth" },
  ];

  const caseStudies = [
    {
      title: "E-Commerce Makeover for XYZ",
      description:
        "A full redesign that boosted their sales by 70% and kept users hooked.",
      image: "/images/animation.jpg",
    },
    {
      title: "Viral Growth for ABC Brand",
      description:
        "Our strategic reels & ads grew their Instagram from 2K to 50K in 6 months.",
      image: "/images/animation.jpg",
    },
    {
      title: "SEO Breakthrough for DEF Startup",
      description:
        "We skyrocketed their Google rankings from page 5 to page 1 in record time.",
      image: "/images/animation.jpg",
    },
  ];

  return (
    <section className="relative py-8 md:py-16 px-6 md:px-16 bg-black overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/bgwhy.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-100 z-0"
      />

      {/* Metrics Section */}
      <div className="relative z-10 max-w-6xl mx-auto text-center ">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-[0_2px_20px_rgba(0,255,0,0.4)]"
        >
          The Results That Speak
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center justify-center p-8 rounded-2xl backdrop-blur-md border border-white/20 bg-gradient-to-br from-[#1c1c1c88] to-[#2a2a2a66] shadow-2xl hover:scale-105 transition-transform duration-500"
            >
              <h3 className="text-green-400 text-5xl md:text-6xl font-bold mb-2 drop-shadow-[0_0_20px_rgba(0,255,0,0.5)]">
                {item.stat}
              </h3>
              <p className="text-white text-base md:text-lg font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Studies Section */}
      {/* <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-[0_2px_20px_rgba(255,255,255,0.3)]"
        >
          Our Success Stories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-2xl overflow-hidden backdrop-blur-md border border-white/20 bg-gradient-to-br from-[#1c1c1c88] to-[#2a2a2a66] shadow-2xl hover:scale-105 transition-transform duration-500 text-left"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={study.image}
                  alt={study.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-300 text-sm">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
