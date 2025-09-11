"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function HowItWorks() {
  const steps = [
    {
      title: "Let's Connect",
      desc: "We begin with a conversation to dive into your vision, needs, and goals.",
    },
    {
      title: "We Craft the Solution",
      desc: "Our experts design and develop a tailored solution — blending creativity with strategy.",
    },
    {
      title: "Launch & Beyond",
      desc: "After your approval, we launch and stay connected to support & evolve your project.",
    },
  ];

  return (
    <section className="relative py-8 md:py-16 px-6 md:px-16 bg-black overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/images/bgwhy.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
      />

      {/* Title */}
      <div className="relative max-w-4xl mx-auto text-center mb-20 z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Our Simple, Elegant Process 
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-xl mx-auto"
        >
          From idea to execution — we make it seamless, smooth, and tailored for you.
        </motion.p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="border-l-[2px] border-gray-600 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.4 }}
              className="relative pl-10 pb-12"
            >
              {/* Dot/Icon */}
              <div className="absolute -left-3 top-1">
                <CheckCircleIcon className="h-6 w-6 text-[#9f9aff]" />
              </div>

              <h3 className="text-white text-lg font-semibold mb-1">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
