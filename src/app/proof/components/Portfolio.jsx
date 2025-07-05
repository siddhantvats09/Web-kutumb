"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const portfolioItems = [
    { title: "E-commerce Website", category: "Web Development", image: "/images/portfolio1.jpg" },
    { title: "Brand Identity Design", category: "Graphic Design", image: "/images/portfolio2.jpg" },
    { title: "Animated Explainer", category: "Animation", image: "/images/portfolio3.jpg" },
    { title: "Instagram Ad Campaign", category: "Social Media", image: "/images/portfolio4.jpg" },
    { title: "Corporate Website", category: "Web Development", image: "/images/portfolio5.jpg" },
    { title: "Product Promo Reel", category: "Reels/Editing", image: "/images/portfolio6.jpg" },
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

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          Our Portfolio ✨
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          A curated collection of the work that defines us — from websites to campaigns.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative group overflow-hidden rounded-2xl border border-white/20 backdrop-blur-md shadow-xl cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-green-400 text-sm">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
