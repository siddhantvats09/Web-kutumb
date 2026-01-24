"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Typing from "./Typing";

export default function AnimationPage() {
  return (
    <main className="overflow-hidden text-white">
      {/* ================= HERO ================= */}
      <section className="relative px-6 pt-24 md:pb-10 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-[var(--font-playfair)] font-bold leading-tight text-white"
            >
              Design at the Speed of Imagination
              <br />
              <span className="italic text-[#c8a95f]">
                <Typing />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto"
            >
              We create high-performance{" "}
              <strong>animation and motion graphics</strong> for brands,
              products, and marketing teams that need clarity, speed, and visual
              impact.
            </motion.p>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-14 rounded-3xl relative overflow-hidden"
          >
            <img
              src="/samples/ani2.gif"
              alt="Professional animation and motion graphics studio"
              width={1400}
              height={720}
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative px-6  overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/samples/ani3.png"
              alt="Generative motion and animation visuals"
              width={700}
              height={700}
              className="rounded-3xl "
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#c8a95f] font-bold">
              Creative Animation Studio
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold font-[var(--font-playfair)] text-white">
              Motion That Explains,
              <br />
              Converts & Scales
            </h2>

            <p className="mt-6 text-white/75 leading-relaxed">
              From <strong>explainer videos</strong> to{" "}
              <strong>3D product animation</strong>, we design motion that
              simplifies complex ideas and turns attention into action. Every
              animation is built with brand consistency and performance in mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CURATED MOTION LAB ================= */}
      <section className="relative px-6 pb-18 pt-4 max-w-7xl mx-auto overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)] text-white">
                Curated Motion Lab
              </h2>
              <p className="mt-4 text-white/65 max-w-xl">
                Selected animation work showcasing storytelling, pacing, and
                visual precision across industries.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {["ani4.mp4", "ani6.mp4"].map((video, i) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className=" overflow-hidden"
              >
                <video
                  src={`/samples/${video}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES (REDESIGNED) ================= */}
      <section className="relative px-6 py-28 max-w-7xl mx-auto overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)] text-center text-white">
            Animation Capabilities
          </h2>

          <p className="mt-4 text-center text-white/65 max-w-2xl mx-auto">
            A focused set of animation services designed for marketing, product
            storytelling, and brand communication.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "2D Explainer Animation",
                desc: "Clear, conversion-focused explainer videos for products, startups, and services.",
              },
              {
                title: "3D Product Animation",
                desc: "High-end 3D visuals that showcase features, materials, and interactions.",
              },
              {
                title: "Motion Graphics",
                desc: "Typography, UI motion, and graphic animation for digital platforms.",
              },
              {
                title: "Brand Animation",
                desc: "Logo animation, brand intros, and visual identity motion systems.",
              },
              {
                title: "Marketing Videos",
                desc: "Short-form animation optimized for ads, landing pages, and campaigns.",
              },
              {
                title: "UI & App Animation",
                desc: "Micro-interactions and transitions that improve product experience.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border border-white/10 rounded-2xl p-6 bg-white/5"
              >
                <h3 className="font-bold text-lg text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative px-6 py-16 md:py-20 bg-[#0f0f0f] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#c8a95f] font-bold">
              Tools & Technology
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-white">
              Software We Use for Animation Design
            </h2>

            <p className="mt-4 text-white/65 max-w-2xl mx-auto">
              Industry-standard tools trusted for high-end motion graphics,
              2D/3D animation, compositing, and cinematic production workflows.
            </p>
          </div>

          {/* Software Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {[
              "Adobe After Effects",
              "Adobe Premiere Pro",
              "Adobe Illustrator",
              "Adobe Photoshop",
              "Blender (3D)",
              "Cinema 4D",
              "Autodesk Maya",
              "DaVinci Resolve",
            ].map((tool) => (
              <div
                key={tool}
                className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3 py-4 md:px-6 md:py-8 text-center transition hover:border-[#c8a95f]/35"
              >
                <span className="text-sm font-bold text-white/80">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="px-6 py-16 md:py-20 bg-[#c8a95f]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { value: "400%", label: "Faster Delivery" },
            { value: "8K", label: "Render Ready" },
            { value: "95%", label: "Client Retention" },
            { value: "100+", label: "Projects Delivered" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-[#ffffff]">
                {stat.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
