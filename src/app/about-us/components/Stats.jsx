"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const stats = [
    { number: 5, label: "Years in Business", suffix: "+" },
    { number: 200, label: "Projects Completed", suffix: "+" },
    { number: 150, label: "Happy Clients", suffix: "+" },
  ];

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

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-white mb-10"
        >
          Fun Facts & Milestones 🚀
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((item, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center justify-center p-6 rounded-xl backdrop-blur-md border border-white/20 bg-gradient-to-br from-[#1c1c1c68] to-[#2a2a2a64] shadow-xl"
              >
                <h3 className="text-green-400 text-4xl md:text-5xl font-bold mb-2">
                  {inView && (
                    <CountUp
                      end={item.number}
                      duration={2}
                      suffix={item.suffix}
                    />
                  )}
                </h3>
                <p className="text-white text-base md:text-lg">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
