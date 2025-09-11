"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function CTA() {
  const router = useRouter();

  return (
    <section className="relative py-3 md:py-12 px-6 md:px-16 bg-black overflow-hidden">
      
      {/* Background Overlay */}
      <img
        src="/images/bgwhy.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
      />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Ready to Elevate Your Brand?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-xl mx-auto mb-8"
        >
          Let's turn your ideas into reality with bold creativity, strategic thinking, and flawless execution.
        </motion.p>

        {/* Button */}
        <div className=" bottom-3 flex flex-col items-center z-10">
        <ChevronDownIcon className="h-5 w-5 text-amber-400 animate-bounce" />
        <p className="text-white mt-1 text-[14px] font-medium ">Send us Message</p>
        
      </div>
      </div>
    </section>
  );
}
