"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const allProjects = [
    {
      media: "/images/webdev2.mp4",
      title: "Web Development",
      desc: "Custom websites and apps built for performance.",
      points: ["Responsive design", "Fast & secure", "SEO friendly"],
    },
    {
      media: "/images/graphic2.jpg",
      title: "Graphic Design",
      desc: "Stunning graphics that elevate your brand.",
      points: ["Logo design", "Social media creatives", "Brand identity"],
    },
    {
      media: "/images/animation1.mp4",
      title: "Animation",
      desc: "Engaging animations to tell your story.",
      points: ["Motion graphics", "Explainer videos", "Brand animations"],
    },
    {
      media: "/images/videoedit.mp4",
      title: "Video Editing",
      desc: "Professional edits that captivate your audience.",
      points: ["Cinematic style", "Smooth transitions", "Brand-focused"],
    },
    {
      media: "/images/webdes2.mp4",
      title: "Web Designing",
      desc: "Modern, user-focused web design for your brand.",
      points: ["UI/UX focused", "Brand consistency", "Creative layouts"],
    },
    {
      media: "/images/reels.jpg",
      title: "Commercial Reels",
      desc: "Eye-catching short reels for brand promotion.",
      points: ["High engagement", "Social media ready", "Creative shots"],
    },
    {
      media: "/images/seo3.jpg",
      title: "SEO",
      desc: "Improve your website ranking & visibility.",
      points: ["Keyword optimization", "Technical SEO", "Content strategy"],
    },
    {
      media: "/images/gglads1.mp4",
      title: "Social Ads (Google / Meta)",
      desc: "Targeted ad campaigns designed for conversions.",
      points: [
        "PPC strategy",
        "Optimized creatives",
        "Data-driven results",
        "Targeted audience",
      ],
    },
    {
      media: "/images/photo.png",
      title: "Photoshoot",
      desc: "Professional brand & product photoshoots.",
      points: ["Studio & outdoor", "High quality", "Expert editing"],
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleSeeMore = () => {
    setVisibleProjects((prev) =>
      prev + 3 <= allProjects.length ? prev + 3 : allProjects.length
    );
  };

  const isVideo = (file) => /\.(mp4|webm|ogg)$/i.test(file);

  const renderVideo = (media) => {
    const basePath = media.replace(/\.\w+$/, "");
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="w-full h-full object-cover"
      >
        <source src={`${basePath}.webm`} type="video/webm" />
        <source src={`${basePath}.mp4`} type="video/mp4" />
      </video>
    );
  };

  return (
    <>
      {/* ================= DESKTOP (OLD DESIGN) ================= */}
      <section className="hidden md:block relative py-12 px-16 bg-black overflow-hidden">
        <Image
          src="/images/bgwhy.jpg"
          alt="Background"
          fill
          className="absolute inset-0 object-cover z-0"
        />

        <div className="relative max-w-6xl mx-auto text-center mb-12 z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Our Key Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Everything your business needs — all under one roof
          </motion.p>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {allProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group overflow-hidden rounded-2xl border border-[#5b5b5b7a]
                         bg-gradient-to-tr from-[#1c1c1c68] to-[#2a2a2a64]
                         backdrop-blur-md shadow-xl"
            >
              <div className="h-[220px]">
                {isVideo(project.media) ? (
                  renderVideo(project.media)
                ) : (
                  <Image
                    src={project.media}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              {/* Title */}
              <div className="absolute inset-0 flex justify-center items-end pb-3 group-hover:opacity-0 transition-opacity">
                <h3 className="text-white bg-[#1414146b] px-3 py-1 rounded-t-lg border-b-2 border-white/70">
                  {project.title}
                </h3>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center
                              text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleProjects < allProjects.length && (
          <div className="flex justify-center mt-10 relative z-10">
            <button
              onClick={handleSeeMore}
              className="px-6 py-3 text-white rounded-xl border border-white/20 hover:bg-white/5 transition"
            >
              See More Work
            </button>
          </div>
        )}
      </section>

      {/* ================= MOBILE (NEW DESIGN) ================= */}
      <section className="block md:hidden relative py-10 px-6 bg-black overflow-hidden">
        <Image
          src="/images/bgwhy.jpg"
          alt="Background"
          fill
          className="absolute inset-0 object-cover z-0"
        />

        <div className="relative z-10 max-w-6xl mx-auto space-y-8">
          {allProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-[#5b5b5b7a]
                         bg-gradient-to-tr from-[#1c1c1c68] to-[#2a2a2a64]
                         backdrop-blur-md shadow-xl overflow-hidden"
            >
              <div className="h-[200px]">
                {isVideo(project.media) ? (
                  renderVideo(project.media)
                ) : (
                  <Image
                    src={project.media}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="p-4">
                <h3 className="text-white text-lg font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-3">{project.desc}</p>
                <ul className="text-gray-300 text-sm space-y-2">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
