"use client";

import { motion } from "framer-motion";

export default function Description() {
  const points = [
    "⚡ We build websites faster than your coffee brews.",
    "🎨 Designs so fresh they belong in a gallery.",
    "🔥 Graphics that make your competitors sweat.",
    "🎬 Animations that keep eyeballs glued.",
    "🎥 Video edits crisp enough to slice through the noise.",
    "📢 Reels so catchy you'll replay them yourself.",
    "📈 Social campaigns that actually work (no empty promises).",
    "📸 Photos so clean your Instagram will bow down.",
    "🚀 SEO that pushes you past your rivals on Google.",
    "🎯 Ads that hit the bullseye—every single time.",
  ];

  return (
   <section className="relative py-20 px-6 md:px-16 bg-black overflow-hidden">
  
  {/* Background Image */}
  <img
    src="/images/testi.jpg"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover opacity-100  blur-sm z-0"
  />

  {/* Title */}
  <div className="relative max-w-4xl mx-auto text-center mb-16 z-10">
    <motion.h2
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold text-white mb-4"
    >
      We Don't Just Work... We Make Magic 💫
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-gray-300 max-w-xl mx-auto"
    >
      Here's what makes us <em>dangerously good</em> at what we do:
    </motion.p>
  </div>

  {/* Funky Bullet List */}
  <div className="max-w-3xl mx-auto space-y-6 relative z-10">
    {points.map((point, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`p-4 md:p-6 rounded-xl backdrop-blur-md border border-white/20 bg-gradient-to-br ${
          index % 2 === 0
            ? "from-[#1c1c1c68] to-[#2a2a2a64]"
            : "from-[#2a2a2a64] to-[#1c1c1c68]"
        } shadow-xl text-white text-center hover:scale-105 transition-transform duration-500`}
      >
        {point}
      </motion.div>
    ))}
  </div>
</section>

  );
}
