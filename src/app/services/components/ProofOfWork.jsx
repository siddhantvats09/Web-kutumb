"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProofOfWork() {
  const services = [
    { title: "Web Development", color: "from-purple-500 to-pink-500" },
    { title: "Web Designing", color: "from-blue-500 to-cyan-500" },
    { title: "Graphic Design", color: "from-indigo-500 to-purple-500" },
    { title: "Animation", color: "from-yellow-500 to-orange-500" },
    { title: "Video Editing", color: "from-red-500 to-pink-500" },
    { title: "Commercial Reels", color: "from-green-500 to-emerald-500" },
    { title: "Social Media Marketing", color: "from-teal-500 to-cyan-500" },
    { title: "Photoshoot", color: "from-pink-500 to-rose-500" },
    { title: "SEO", color: "from-lime-500 to-green-500" },
    { title: "Google & Meta Ads", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section className="relative py-24 px-6 md:px-16 bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/testi.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 blur-sm z-0"
      />

      {/* Title */}
      <div className="relative max-w-4xl mx-auto text-center mb-16 z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Real Work. Real Proof. 💼
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-xl mx-auto"
        >
          Here's a glimpse of the magic we've crafted across services:
        </motion.p>
      </div>

      {/* Service Proof Sections */}
      <div className="relative max-w-6xl mx-auto space-y-20 z-10">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            {/* Overlapping Cards */}
            <div className="relative flex justify-center mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`w-36 h-52 md:w-48 md:h-64 bg-gradient-to-tr ${service.color} opacity-80 rounded-xl shadow-2xl transform rotate-[-10deg] translate-x-[-30px] backdrop-blur-lg`}
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`w-36 h-52 md:w-48 md:h-64 bg-gradient-to-tr ${service.color} opacity-100 rounded-xl shadow-2xl z-10 backdrop-blur-lg`}
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`w-36 h-52 md:w-48 md:h-64 bg-gradient-to-tr ${service.color} opacity-80 rounded-xl shadow-2xl transform rotate-[10deg] translate-x-[30px] backdrop-blur-lg`}
              ></motion.div>
            </div>

            {/* Service Title */}
            <h3 className="text-white text-lg md:text-xl font-semibold">
              {service.title} Samples
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
