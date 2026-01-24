


"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonial2() {
const testimonials = [
  {
    quote: "We build a travel agency website with SixthGenX. The design and functionality really helped us grow.",
    name: "Shree Ram Rajkumar",
    company: "CEO, LuxBlack",
  },
  {
    quote: "They built a school website and custom management software for us. It has simplified everything for our staff and students.",
    name: "Sanjeev Kumar",
    company: "Director, PS Public School",
  },
  {
    quote: "SixthGenX created a professional travel agency logo for us. It gave our brand a premium look.",
    name: "Shree Ram Rajkumar",
    company: "CEO, LuxBlack",
  },
  {
    quote: "We ran performance marketing campaigns with them, and the results were outstanding in terms of leads and engagement.",
    name: "Ram Mohan Khanna",
    company: "Sales Executive, Shapoorji Pallonji",
  },
  {
    quote: "They handled our corporate website project from scratch. It’s modern, responsive, and aligns perfectly with our goals.",
    name: "Sumit Verma",
    company: "Website Manager, Shatam Jeeva",
  },
  {
    quote: "As project manager, I was impressed by how smoothly they delivered our website project — on time and with great quality.",
    name: "Aman Patel",
    company: "Project Manager, SINE",
  },
];



  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative py-8 md:py-10 px-6 md:px-16 bg-[#0a0a0a] rounded-[20px] overflow-hidden text-white">
  {/* ✅ Repeat Background Image */}
  <div
    className="absolute inset-0 opacity-70"
    style={{
      backgroundImage: "url('/images/bgwhy2.jpg')",
      backgroundRepeat: "repeat",
      backgroundSize: "420px",
      backgroundPosition: "top left",
    }}
  />

  {/* ✅ Dark overlay for readability */}

  <div className="relative max-w-3xl mx-auto text-center mb-12 z-10">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold text-[#c8a95f] mb-4"
    >
      What Our Clients Say
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-white/60 max-w-xl mx-auto"
    >
      Hear from the businesses we've partnered with.
    </motion.p>
  </div>

  {/* Slider */}
  <div className="relative max-w-xl mx-auto text-center z-10">
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="relative border border-[#c8a95f] bg-white/5 backdrop-blur-xl p-8 rounded-2xl text-center shadow-[0_22px_70px_rgba(0,0,0,0.65)] min-h-[220px] overflow-hidden"
      >
        {/* subtle gold corner glow */}
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl bg-[#c8a95f]/12" />

        <p className="relative text-white/70 italic mb-4">
          "{testimonials[current].quote}"
        </p>
        <h3 className="relative text-white font-semibold">
          {testimonials[current].name}
        </h3>
        <p className="relative text-sm text-white/50">
          {testimonials[current].company}
        </p>

        {/* micro accent line */}
        <div className="relative mx-auto mt-6 h-[2px] w-12 bg-[#c8a95f]/70 rounded-full" />
      </motion.div>
    </AnimatePresence>

    {/* Navigation Buttons */}
    <div className="flex justify-center gap-6 mt-6">
      <button
        onClick={prevSlide}
        className="p-3 border border-white/10 bg-white/5 text-white rounded-full hover:border-[#c8a95f]/35 hover:bg-[#c8a95f]/10 transition-all shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="p-3 border border-white/10 bg-white/5 text-white rounded-full hover:border-[#c8a95f]/35 hover:bg-[#c8a95f]/10 transition-all shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
      >
        <FaChevronRight />
      </button>
    </div>
  </div>
</section>

  );
}

