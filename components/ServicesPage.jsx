"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ServicesPage() {
  const services = [
    "Web Development",
    "Web Designing",
    "Graphic Design",
    "Animation",
    "Video Editing",
    "Commercial Reels",
    "Social Media Marketing",
    "Photoshoot",
    "SEO",
    "Google & Meta Ads",
  ];

  const positions = [
    { top: "10%", left: "5%" },
    { top: "20%", left: "60%" },
    { top: "35%", left: "15%" },
    { top: "40%", left: "70%" },
    { top: "55%", left: "35%" },
    { top: "65%", left: "10%" },
    { top: "75%", left: "55%" },
    { top: "15%", left: "80%" },
    { top: "50%", left: "85%" },
    { top: "80%", left: "30%" },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] py-16 px-6 md:px-16 bg-black overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/bgwhy.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-100 z-0"
      />

      {/* Title */}
      <div className="relative max-w-4xl mx-auto text-center mb-20 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          Everything you need to grow your digital presence — scattered with creativity.
        </motion.p>
      </div>

      {/* Connecting Lines for Desktop */}
      {!isMobile && (
        <svg className="absolute inset-0 w-full h-full z-[5] pointer-events-none">
          {positions.map((pos, i) =>
            i < positions.length - 1 ? (
              <line
                key={i}
                x1={`calc(${positions[i].left})`}
                y1={`calc(${positions[i].top})`}
                x2={`calc(${positions[i + 1].left})`}
                y2={`calc(${positions[i + 1].top})`}
                stroke="#888"
                strokeWidth="1"
                strokeOpacity="0.4"
              />
            ) : null
          )}
        </svg>
      )}

      {/* Service Boxes */}
      {isMobile ? (
        <div className="relative z-10 grid grid-cols-2 gap-4 max-w-md mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-4 rounded-xl backdrop-blur-md shadow-xl border border-white/20 bg-gradient-to-br ${
                index % 3 === 0
                  ? "from-[#ffffff14] to-[#ffffff0a]"
                  : "from-[#1c1c1c68] to-[#2a2a2a64]"
              } hover:scale-105 transition-transform duration-500 text-center`}
            >
              <h3 className="text-white text-sm font-medium">{service}</h3>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="relative w-full h-[70vh] md:h-[80vh] z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: [1, 1.05, 1],
                y: ["0%", "4%", "0%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 8, // slower animation
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              style={{
                position: "absolute",
                ...positions[index],
                transform: "translate(-50%, -50%)",
              }}
              className={`p-4 md:p-6 rounded-xl backdrop-blur-md shadow-xl border border-white/20 bg-gradient-to-br ${
                index % 3 === 0
                  ? "from-[#ffffff14] to-[#ffffff0a]"
                  : "from-[#1c1c1c68] to-[#2a2a2a64]"
              } hover:scale-105 transition-transform duration-500 cursor-pointer text-center`}
            >
              <h3 className="text-white text-base md:text-lg font-semibold">
                {service}
              </h3>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
