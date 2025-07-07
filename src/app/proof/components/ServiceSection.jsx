"use client";

import { useState } from "react";
import {
  FaCode,
  FaPaintBrush,
  FaVideo,
  FaBullhorn,
  FaCamera,
  FaChartLine,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  const gradients = [
    "bg-gradient-to-tr from-purple-300/20 to-pink-300/20",
    "bg-gradient-to-tr from-blue-300/20 to-cyan-300/20",
    "bg-gradient-to-tr from-green-300/20 to-emerald-300/20",
    "bg-gradient-to-tr from-yellow-300/20 to-orange-300/20",
    "bg-gradient-to-tr from-indigo-300/20 to-purple-300/20",
    "bg-gradient-to-tr from-pink-300/20 to-rose-300/20",
  ];

  const services = [
    {
      icon: <FaCode size={30} />,
      title: "Web Development",
      desc: "Custom websites & apps built for performance.",
      samples: [
        { image: "/images/webdev.png", desc: "E-commerce Platform", link: "#" },
        { image: "/images/webdev.png", desc: "Portfolio Website", link: "#" },
      ],
    },
    {
      icon: <FaPaintBrush size={30} />,
      title: "Web & Graphic Design",
      desc: "Modern, eye-catching visuals for your brand.",
      samples: [
        { image: "/images/webdes.png", desc: "Brand Identity", link: "#" },
        { image: "/images/webdes.png", desc: "Product Packaging", link: "#" },
      ],
    },
    {
      icon: <FaVideo size={30} />,
      title: "Animation & Video Editing",
      desc: "Engaging animations & professional edits.",
      samples: [
        { image: "/images/animation.jpg", desc: "Explainer Video", link: "#" },
        { image: "/images/animation.jpg", desc: "Reel Edit", link: "#" },
      ],
    },
    {
      icon: <FaBullhorn size={30} />,
      title: "Marketing & Ads",
      desc: "Targeted Google & Meta ad campaigns.",
      samples: [
        {
          image: "/images/googleads.png",
          desc: "Meta Ads Campaign",
          link: "#",
        },
        {
          image: "/images/googleads.png",
          desc: "Google Search Ads",
          link: "#",
        },
      ],
    },
    {
      icon: <FaCamera size={30} />,
      title: "Photoshoots",
      desc: "High-quality brand, product & commercial shoots.",
      samples: [
        { image: "/images/photo.png", desc: "Product Shoot", link: "#" },
        { image: "/images/photo.png", desc: "Lifestyle Shoot", link: "#" },
      ],
    },
    {
      icon: <FaChartLine size={30} />,
      title: "SEO & Optimization",
      desc: "Boost your website ranking & visibility.",
      samples: [
        { image: "/images/seo.jpg", desc: "SEO Results Snapshot", link: "#" },
        { image: "/images/seo.jpg", desc: "Keyword Ranking Boost", link: "#" },
      ],
    },
  ];

  return (
    <section
      className="relative py-14 md:py-20 px-6 md:px-16 bg-amber-900 overflow-hidden"
      style={{
        backgroundImage: `url('/images/bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />

      {/* Heading */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
          Proof of Our Work
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Real results. Real creativity. Here's a glimpse of what we’ve
          delivered.
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const randomGradient =
            gradients[Math.floor(Math.random() * gradients.length)];
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`relative border border-white/10 ${randomGradient} rounded-2xl p-8 text-center backdrop-blur-md shadow-lg hover:shadow-xl transition-all cursor-pointer`}
              onClick={() => setActiveService(service)}
            >
              <div className="text-white mb-5 mx-auto">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm mb-5">{service.desc}</p>

              {/* Click Me Text */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-white bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                Click Here
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black rounded-2xl max-w-lg w-full p-6 text-white relative border border-white/20 overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                onClick={() => setActiveService(null)}
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold mb-4">
                {activeService.title} Samples
              </h3>
              <p className="text-gray-300 mb-6">{activeService.desc}</p>

              <div className="space-y-4">
                {activeService.samples.map((sample, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={sample.image}
                        alt={sample.desc}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{sample.desc}</p>
                      <a
                        href={sample.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 text-sm hover:underline"
                      >
                        View Work →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
