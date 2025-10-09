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
    {
      image: "/images/reel1.png",
      title: "Instagram Campaign Reel",
      link: "https://www.instagram.com/reel/DHPyQF_h3TX/?igsh=ZGhqdHk2bDB2b2Q0",
    },
    {
      image: "/images/packeg.png",
      title: "Packeging Design Samples",
      link: "https://docs.google.com/presentation/d/1EB_pJKVHCfoFVQT6XijMYdLhAn4crpJL/edit?usp=drive_link&ouid=115519480901389398327&rtpof=true&sd=true",
    },
  
    {
      image: "/images/reel2.png",
      title: "Instagram Campaign Reel",
      link: "https://www.instagram.com/reel/C4GCXD6JzEJ/?igsh=MTdlbDkwcGRmNTZ4bg%3D%3D",
    },
      {
      image: "/images/packeg2.png",
      title: "Graphic Design Samples",
      link: "https://drive.google.com/file/d/1-63mSVhNKKahnnlKyE6Mn2_jMxa5R6PG/view?usp=drive_link",
    },
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
      {
      image: "/images/ads2.jpg",
      title: "Google/Meta Ads Analysis",
      link: "/images/ads2.jpg",
    },
    {
      image: "/images/reel3.png",
      title: "VideoEditing Reel",
      link: "https://www.instagram.com/reel/DHitEx9JjHa/?igsh=MWJ4N3AwOTJwcmV6cg%3D%3D",
    },
     {
      image: "/images/reel4.png",
      title: "Commertial Reel for Travel Agency",
      link: "https://www.instagram.com/reel/DIag0gVypKU/?igsh=YmxyYzgxdDN2NjN1",
    },
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
      image: "/images/ads1.jpg",
      title: "Google Ads Analysis",
      link: "/images/ads1.jpg",
    },
    {
      image: "/images/webdev2.jpg",
      title: "All Websites Samples",
      link: "https://docs.google.com/presentation/d/1n7nAw8lf1Rpkn7-9bEcD36LGo2JRXGuj/edit?usp=drive_link&ouid=115519480901389398327&rtpof=true&sd=true",
    },
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
 {
      image: "/images/reel5.png",
      title: "Drive Link for more reels Samples",
      link: "https://drive.google.com/drive/folders/1FDMU8tDrmiaAVoqADnrczkILWF8uOJCn",
    },
    {
      image: "/work/webdev4.png",
      title: "Interactive Website",
      link: "https://sineiitb.org/",
    },
    {
      image: "/images/ritik3.png",
      title: "SocialMedia Creatives ",
      link: "https://drive.google.com/drive/folders/1nbAFIGmHa84tmrLaWoChDdptgoHAfNz6",
    },
    {
      image: "/images/ritik2.png",
      title: "Animation",
      link: "https://drive.google.com/drive/folders/1uiFzu1Q908VykjVCFJIY0z2HxPZE4YKx",
    },
      {
      image: "/work/webdesign.png",
      title: "UI/UX Design",
      link: "https://www.figma.com/design/Oa06AtZn2Gp3Qkbsi1Pkuj/Portfolio?node-id=0-1&p=f&t=DCzmpHpwwKwHDQkA-0",
    },
    {
      image: "/images/ritik1.png",
      title: "PhotoShoot",
      link: "https://drive.google.com/drive/folders/1mzRjKfhwXpy4o54VLycLPYMV3GL-lpCW",
    },
   
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
    setVisibleCount((prev) => prev + 10);
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
