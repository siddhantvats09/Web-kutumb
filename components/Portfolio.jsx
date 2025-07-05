"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const allProjects = [
    {
      img: "/images/webdev.png",
      title: "Web Development",
      desc: "Custom websites and apps built for performance.",
      points: ["Responsive design", "Fast & secure", "SEO friendly"],
    },
    {
      img: "/images/webdes.png",
      title: "Web Designing",
      desc: "Modern, user-focused web design for your brand.",
      points: ["UI/UX focused", "Brand consistency", "Creative layouts"],
    },
    {
      img: "/images/graphic.png",
      title: "Graphic Design",
      desc: "Stunning graphics that elevate your brand.",
      points: ["Logo design", "Social media creatives", "Brand identity"],
    },
    {
      img: "/images/animation.jpg",
      title: "Animation",
      desc: "Engaging animations to tell your story.",
      points: ["Motion graphics", "Explainer videos", "Brand animations"],
    },
    {
      img: "/images/editing.png",
      title: "Video Editing",
      desc: "Professional edits that captivate your audience.",
      points: ["Cinematic style", "Smooth transitions", "Brand-focused"],
    },
    {
      img: "/images/reels.jpg",
      title: "Commercial Reels",
      desc: "Eye-catching short reels for brand promotion.",
      points: ["High engagement", "Social media ready", "Creative shots"],
    },
    {
      img: "/images/social.jpg",
      title: "Social Media Marketing",
      desc: "Results-driven marketing for social platforms.",
      points: ["Meta & Google Ads", "Content strategy", "Analytics focused"],
    },
    {
      img: "/images/photo.png",
      title: "Photoshoot",
      desc: "Professional brand & product photoshoots.",
      points: ["Studio & outdoor", "High quality", "Expert editing"],
    },
    {
      img: "/images/seo.jpg",
      title: "SEO",
      desc: "Improve your website ranking & visibility.",
      points: ["Keyword optimization", "Technical SEO", "Content strategy"],
    },
    {
      img: "/images/googleads.png",
      title: "Google Ads",
      desc: "Targeted Google ad campaigns for conversions.",
      points: ["PPC strategy", "Optimized creatives", "Data-driven results"],
    },
    {
      img: "/images/meta.jpg",
      title: "Meta Ads",
      desc: "High-performing ads across Facebook & Instagram.",
      points: [
        "Targeted audience",
        "Engaging creatives",
        "Performance tracking",
      ],
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(6);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const handleSeeMore = () => {
  //   setVisibleProjects((prev) =>
  //     prev + 6 <= allProjects.length ? prev + 6 : allProjects.length
  //   );
  // };

  const handleCardClick = (index) => {
    if (isMobile) {
      setActiveCardIndex(activeCardIndex === index ? null : index);
    }
  };

  const handleSeeMore = () => {
    setVisibleProjects((prev) =>
      prev + 6 <= allProjects.length ? prev + 6 : allProjects.length
    );
  };

  return (
    <>
      <section className="relative py-8 md:py-16 px-6 md:px-16 hidden md:block bg-black overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/bgwhy.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-100 z-0"
        />

        <div className="relative max-w-6xl mx-auto text-center mb-12 z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {allProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-2xl border border-[#5b5b5b7a] bg-gradient-to-tr from-[#1c1c1c68] to-[#2a2a2a64] backdrop-blur-md shadow-xl"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={500}
                height={300}
                className="w-full opacity-100 h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Title Initially Visible, Hidden on Hover */}
              <div className="absolute inset-0 flex  justify-center pb-6 items-end transition-opacity duration-500 group-hover:opacity-0">
                <h3 className="text-white text-xl bg-[#ffffff6b] py-1 px-2 rounded-t-[10px] font-semibold border-b-[2px] border-[#ffffffb3] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                  {project.title}
                </h3>
              </div>

              {/* Overlay Details */}
              <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  {project.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        {visibleProjects < allProjects.length && (
          <div className="flex justify-center mt-10 relative z-10">
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
              See More Work
            </button>
          </div>
        )}
      </section>
      <section className="relative py-8 md:py-16 px-6 md:px-16 block md:hidden bg-black overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/bgwhy.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-100 z-0"
        />

        <div className="relative max-w-6xl mx-auto text-center mb-12 z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {allProjects.slice(0, visibleProjects).map((project, index) => {
            const isActive = activeCardIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-2xl border border-[#5b5b5b7a] bg-gradient-to-tr from-[#1c1c1c68] to-[#2a2a2a64] backdrop-blur-md shadow-xl"
                onClick={() => handleCardClick(index)}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full opacity-100 h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Title */}
                <div
                  className={`absolute inset-0 flex justify-center pb-6 items-end transition-opacity duration-500 ${
                    (isMobile && isActive) ||
                    (!isMobile && "group-hover:opacity-0")
                      ? "opacity-0"
                      : "opacity-100"
                  }`}
                >
                  <h3 className="text-white text-xl bg-[#ffffff6b] py-1 px-2 rounded-t-[10px] font-semibold border-b-[2px] border-[#ffffffb3] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                    {project.title}
                  </h3>
                </div>

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-center px-4 transition-opacity duration-500 ${
                    (isMobile && isActive) ||
                    (!isMobile && "group-hover:opacity-100")
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.desc}</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {project.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center gap-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* See More Button */}
        {visibleProjects < allProjects.length && (
          <div className="flex justify-center mt-10 relative z-10">
            <button
              onClick={handleSeeMore}
              className="px-6 py-3 text-white text-lg font-medium rounded-xl bg-transparent border border-white/20 hover:border-[#494646] hover:bg-white/5 hover:shadow-md hover:scale-105 backdrop-blur-sm transition-all duration-300 ease-in-out"
            >
              See More Work
            </button>
          </div>
        )}
      </section>
    </>
  );
}
