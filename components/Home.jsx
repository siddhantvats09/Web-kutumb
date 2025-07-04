"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export default function Homes() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center px-6 md:px-20 py-24 overflow-hidden">
      {/* Background Image with subtle opacity */}
      <Image
        src="/images/bg.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-50 z-0"
      />

      {/* Floating Gradient Blob */}
      <motion.div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl z-0"
        initial={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: 0.3, scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left space-y-6 w-full lg:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready to Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Digital Presence?
            </span>
          </h1>
          <p className="text-gray-300 text-lg">
            Let our team help you create stunning websites, bold branding,
            engaging content, and powerful marketing — all designed to grow your
            business.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="
    mt-4 flex items-center gap-3 
    px-6 py-3 
    text-white text-lg font-medium
    rounded-xl
    bg-transparent
    border border-white/20
    hover:border-[#494646]
    hover:bg-white/5
    hover:shadow-md
    backdrop-blur-sm
    transition-all duration-300 ease-in-out
  "
          >
            Book a Free Consultation <FiArrowRight />
          </motion.button>
        </motion.div>

        {/* Right Side Video or Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative max-w-md w-full">
            {/* White Blur Shadow */}
            <div className="absolute inset-0 scale-105 rounded-2xl bg-[#dcdaff] blur-2xl opacity-20 z-0"></div>

            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-xl z-10">
              <video
                src="/images/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full opacity-65 object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
