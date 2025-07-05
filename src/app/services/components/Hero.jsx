"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-black text-white mt-[-50px] min-h-[80vh] flex items-center justify-center px-6 md:px-20 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/bgwhy.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-100 z-0"
      />

      {/* Floating Gradient Blob */}
      <motion.div
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl z-0"
        initial={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: 0.3, scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        // style={{
        //   background: "linear-gradient(135deg, #6366f1, #a855f7, #3b82f6)",
        // }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Tailored{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Digital Solutions
          </span>{" "}
          for Your Brand
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-300 text-lg max-w-xl mx-auto"
        >
          Explore our wide range of services designed to amplify your online presence, elevate your brand, and drive results.
        </motion.p>
      </div>
    </section>
  );
}
