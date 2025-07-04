"use client";

import {
  FaCode,
  FaPaintBrush,
  FaVideo,
  FaBullhorn,
  FaCamera,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      icon: <FaCode size={30} />,
      title: "Web Development",
      desc: "Custom websites & apps built for performance.",
    },
    {
      icon: <FaPaintBrush size={30} />,
      title: "Web & Graphic Design",
      desc: "Modern, eye-catching visuals for your brand.",
    },
    {
      icon: <FaVideo size={30} />,
      title: "Animation & Video Editing",
      desc: "Engaging animations & professional edits.",
    },
    {
      icon: <FaBullhorn size={30} />,
      title: "Marketing & Ads",
      desc: "Targeted Google & Meta ad campaigns.",
    },
    {
      icon: <FaCamera size={30} />,
      title: "Photoshoots",
      desc: "High-quality brand, product & commercial shoots.",
    },
    {
      icon: <FaChartLine size={30} />,
      title: "SEO & Optimization",
      desc: "Boost your website ranking & visibility.",
    },
  ];

  return (
    <section
      className="relative py-14 md:py-20 px-6 md:px-16 bg-amber-900  overflow-hidden"
      style={{
        backgroundImage: `url('/images/bg.jpg')`, // <-- Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
          Our Key Services
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Everything your business needs — all under one roof.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="border border-white/10 bg-white/5 rounded-2xl p-8 text-center backdrop-blur-md shadow-lg hover:shadow-xl transition-all"
          >
            <div className="text-white mb-5 mx-auto">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
