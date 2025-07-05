"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/solid";

export default function Teamphotos() {
  const team = [
    { name: "Ravi Singh", role: "Founder & CEO", image: "/images/person.jpg" },
    { name: "Priya Mehta", role: "Lead Designer", image: "" },
    { name: "Aman Kapoor", role: "Marketing Head", image: "/images/person.jpg" },
    { name: "Simran Kaur", role: "Project Manager", image: "" },
    { name: "Rohan Gupta", role: "Content Specialist", image: "/images/person.jpg" },
    { name: "Anjali Sharma", role: "Social Media Lead", image: "/images/person.jpg" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

      <div className="relative max-w-5xl mx-auto text-center mb-12 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          The Faces Behind The Magic ✨
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-xl mx-auto"
        >
          A glimpse into the real humans who power our creativity.
        </motion.p>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative w-full aspect-square rounded-xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-[#1c1c1c68] to-[#2a2a2a64] border border-white/20 shadow-xl group cursor-pointer"
            onClick={() => isMobile && setActiveIndex(activeIndex === index ? null : index)}
          >
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <UserIcon className="w-12 h-12 text-white/30 blur-sm" />
              </div>
            )}

            {/* Info Overlay */}
            <div
              className={`
                absolute inset-0 flex flex-col items-center justify-center 
                bg-black bg-opacity-70 text-white text-center px-2 transition-opacity 
                ${isMobile ? (activeIndex === index ? "opacity-100" : "opacity-0 pointer-events-none") : "opacity-0 group-hover:opacity-100"}
              `}
            >
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
