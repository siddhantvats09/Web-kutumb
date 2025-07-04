"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export default function Homes() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center px-6 md:px-20 py-24 overflow-hidden">
      {/* Floating Gradient Blob */}
      <motion.div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl z-0"
        initial={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: 0.3, scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(135deg, #6366f1, #a855f7, #3b82f6)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left space-y-6 w-full lg:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Digital Presence
            </span>
          </h1>
          <p className="text-gray-300 text-lg">
            We help businesses grow with premium web development, branding,
            marketing, and visual storytelling.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-4 flex items-center gap-3 px-6 py-3 bg-gray-800 border border-gray-600 rounded-full hover:bg-gray-700 transition"
          >
            Let’s Get Started <FiArrowRight />
          </motion.button>
        </motion.div>

        {/* Right Side Video or Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-lg max-w-md w-full">
            <video
              src="/images/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
