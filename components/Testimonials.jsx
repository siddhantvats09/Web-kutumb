"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "SixthGenX completely transformed our online presence. Their work exceeded expectations!",
      name: "Amit Patel",
      company: "Founder, BrightTech",
    },
    {
      quote: "From branding to website — they nailed every detail. Highly recommend their creative team.",
      name: "Priya Mehra",
      company: "CEO, EcoGlow",
    },
    {
      quote: "The video production and marketing strategy brought amazing results. Great partnership!",
      name: "Rahul Sharma",
      company: "CMO, SkyNest",
    },
    {
      quote: "Their SEO and Google Ads brought incredible traffic growth to our website. Truly impressive!",
      name: "Sneha Verma",
      company: "Marketing Head, TechNova",
    },
    {
      quote: "Professional, creative, and results-driven. I couldn’t have asked for a better team.",
      name: "Karan Joshi",
      company: "Founder, UrbanLens",
    },
    {
      quote: "Excellent work on our social media campaigns. We saw great engagement and conversions.",
      name: "Megha Kapoor",
      company: "Social Media Manager, GreenPlanet",
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
    <section className="relative py-12 md:py-16 px-6 md:px-16 bg-black overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/testi.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-40 z-0"
      />

      <div className="relative max-w-3xl mx-auto text-center mb-12 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-xl mx-auto"
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
            className="border border-[#5b5b5b7a] bg-gradient-to-tr from-[#1c1c1c68] to-[#2a2a2a64] backdrop-blur-md p-8 rounded-2xl text-center shadow-xl min-h-[220px]"
          >
            <p className="text-gray-300 italic mb-4">"{testimonials[current].quote}"</p>
            <h3 className="text-white font-semibold">{testimonials[current].name}</h3>
            <p className="text-sm text-gray-400">{testimonials[current].company}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={prevSlide}
            className="p-3 border border-gray-600 text-white rounded-full hover:bg-gray-700 transition-all"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 border border-gray-600 text-white rounded-full hover:bg-gray-700 transition-all"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
