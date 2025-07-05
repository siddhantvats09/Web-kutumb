"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState as useStateReact } from "react";

export default function WorkGallery() {
  const gallery = [
    { image: "/images/webdes.png", title: "Landing Page" },
    { image: "/images/webdes.png", title: "Branding Design" },
    { image: "/images/webdes.png", title: "Animation Project" },
    { image: "/images/webdes.png", title: "Social Media Campaign" },
    { image: "/images/webdes.png", title: "Product Photoshoot" },
    { image: "/images/webdes.png", title: "Web App" },
    { image: "/images/webdes.png", title: "E-commerce Store" },
    { image: "/images/webdes.png", title: "SEO Campaign" },
    { image: "/images/webdes.png", title: "Video Editing" },
    { image: "/images/webdes.png", title: "Creative Posters" },
    { image: "/images/webdes.png", title: "Business Website" },
    { image: "/images/webdes.png", title: "Event Branding" },
    { image: "/images/webdes.png", title: "UI/UX Design" },
    { image: "/images/webdes.png", title: "Mobile App Design" },
    { image: "/images/webdes.png", title: "Photography Project" },
    { image: "/images/webdes.png", title: "Corporate Video" },
    { image: "/images/webdes.png", title: "Digital Ads" },
    { image: "/images/webdes.png", title: "Instagram Reels" },
    { image: "/images/webdes.png", title: "Packaging Design" },
    { image: "/images/webdes.png", title: "Explainer Animation" },
    { image: "/images/webdes.png", title: "Interactive Website" },
    { image: "/images/webdes.png", title: "Product Showcase" },
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const [isMobile, setIsMobile] = useStateReact(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="relative py-20 px-6 md:px-16 bg-black overflow-hidden">
      {/* Background */}
      <Image
        src="/images/bgwhy.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-100 z-0"
      />

      {/* Title */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          Work Gallery ✨
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-xl mx-auto"
        >
          Explore a mix of real projects crafted with creativity & precision.
        </motion.p>
      </div>

      {/* Dimensional Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[200px] gap-4 max-w-6xl mx-auto">
        {gallery.slice(0, visibleCount).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`relative group overflow-hidden rounded-xl shadow-2xl border border-white/20 backdrop-blur-md ${
              index % 5 === 0 ? "row-span-2" : "row-span-1"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />

            {/* Always Visible Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center text-sm font-medium py-2 backdrop-blur-sm">
              {item.title}
            </div>

            {/* Button Visible on Hover (Desktop) or Always Visible on Mobile */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isMobile
                  ? "opacity-100 bg-black/50"
                  : "opacity-0 group-hover:opacity-100 bg-black/50"
              }`}
            >
              <button className="text-white cursor-pointer text-[16px] bg-[#242424d3] md:bg-green-500 px-3 py-1 md:px-4 md:py-2 rounded-lg font-semibold hover:bg-green-600 transition">
                Check Live
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More Button */}
      {visibleCount < gallery.length && (
        <div className="relative z-10 text-center mt-10">
          <button
            onClick={handleSeeMore}
            className="
              px-6 py-3 
              text-white text-lg font-medium
              rounded-xl
              bg-transparent
              border border-white/20
              hover:border-[#494646]
              hover:bg-white/5
              hover:shadow-md
              hover:scale-105
              backdrop-blur-sm
              transition-all duration-300 ease-in-out
            "
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
}
