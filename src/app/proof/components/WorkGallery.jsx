"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState as useStateReact } from "react";
import Link from "next/link";

export default function WorkGallery() {
  const gallery = [
    {
      image: "/work/webdev2.png",
      title: "Landing Page",
      link: "https://bloomingbullls.netlify.app/",
    },
    {
      image: "/work/lux.png",
      title: "Branding (Logo Design)",
      link: "#",
    },
    {
      image: "/work/lux1.png",
      title: "Travel Agency Website",
      link: "https://luxblackone.com/",
    },
    // {
    //   image: "/images/webdes.png",
    //   title: "Social Media Campaign",
    //   link: "/projects/social-media",
    // },
    // {
    //   image: "/images/webdes.png",
    //   title: "Product Photoshoot",
    //   link: "/projects/photoshoot",
    // },
    { image: "/work/webdev1.png", title: "Web App", link: "https://www.shatamjeeva.life/about-us" },
    {
      image: "/work/webdev3.png",
      title: "E-commerce Store",
      link: "https://www.attero.in/",
    },
    {
      image: "/work/ps.png",
      title: "School Web + Custom Software",
      link: "https://www.pspublicschool.com/",
    },
    // {
    //   image: "/images/webdes.png",
    //   title: "Video Editing",
    //   link: "/projects/video-editing",
    // },
    // {
    //   image: "/images/webdes.png",
    //   title: "Creative Posters",
    //   link: "/projects/posters",
    // },
    {
      image: "/work/webdev.png",
      title: "Business Website",
      link: "https://www.lightbeam.ai/",
    },
    // {
    //   image: "/images/webdes.png",
    //   title: "Event Branding",
    //   link: "/projects/event-branding",
    // },
    {
      image: "/work/webdesign.png",
      title: "UI/UX Design",
      link: "https://www.figma.com/design/Oa06AtZn2Gp3Qkbsi1Pkuj/Portfolio?node-id=0-1&p=f&t=DCzmpHpwwKwHDQkA-0",
    },
   
    // {
    //   image: "/images/webdes.png",
    //   title: "Photography Project",
    //   link: "/projects/photography",
    // },
    // {
    //   image: "/images/webdes.png",
    //   title: "Corporate Video",
    //   link: "/projects/corporate-video",
    // },
    // {
    //   image: "/images/webdes.png",
    //   title: "Digital Ads",
    //   link: "/projects/digital-ads",
    // },
     {
      image: "/work/webdesign1.png",
      title: "Mobile App Design",
      link: "https://www.figma.com/design/Oa06AtZn2Gp3Qkbsi1Pkuj/Portfolio?node-id=0-1&p=f&t=DCzmpHpwwKwHDQkA-0",
    },
    // {
    //   image: "/images/webdes.png",
    //   title: "Instagram Reels",
    //   link: "/projects/insta-reels",
    // },
    {
      image: "/work/webdev4.png",
      title: "Interactive Website",
      link: "https://parallel-staging.dr7smkflnosxm.amplifyapp.com/",
    },
    // {
    //   image: "/images/webdes.png",
    //   title: "Explainer Animation",
    //   link: "/projects/explainer-animation",
    // },
  ];

  const [visibleCount, setVisibleCount] = useState(10);
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
    <section className="relative py-10 md:py-16 px-6 md:px-16 bg-black overflow-hidden">
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
          Work Gallery 
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
            className={`relative group overflow-hidden rounded-xl shadow-2xl border border-white/90 backdrop-blur-md ${
              index % 5 === 0 ? "row-span-2" : "row-span-1"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover lg:opacity-80 "
            />

            {/* Always Visible Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-center text-sm font-medium py-2 backdrop-blur-sm">
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
              <Link href={item?.link} target="_blank">
              <button className="text-white cursor-pointer text-[16px] bg-[#242424d3] md:bg-green-500 px-3 py-1 md:px-4 md:py-2 rounded-lg font-semibold hover:bg-green-600 transition">
                Check Live
              </button>
              </Link>
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
