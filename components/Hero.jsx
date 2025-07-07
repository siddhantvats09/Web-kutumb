"use client";

import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { Button } from "../components/ui/Button";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mt-[-50px] min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-12 bg-black">
      {/* Full Background Video */}
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="/images/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Purple Overlay */}

      {/* Optional Floating Visuals (Commented for now) */}
      {/* <Image src="/images/webdes.png" alt="Floating" width={120} height={120} className="absolute top-10 left-10 opacity-50 animate-float-slow z-10" />
      <Image src="/images/graphic.png" alt="Floating" width={150} height={150} className="absolute bottom-10 right-10 opacity-50 animate-float-slow z-10" />
      <Image src="/images/editing.png" alt="Floating" width={100} height={100} className="absolute top-20 right-1/3 opacity-50 animate-float-slow z-10" /> */}

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          <Typewriter
            words={["Unlock the future of your brand"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={4000}
          />
        </h1>

        <p className="text-gray-300 text-lg mt-20 md:text-xl mb-10">
          We help businesses grow with cutting-edge design, development, and
          marketing solutions.
        </p>

        {/* Button with Smooth Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link href="/services">
            <Button className="bg-gray-800 border border-gray-600 hover:bg-gray-700 px-8 py-4 text-white text-lg rounded-2xl flex items-center justify-center">
              Explore Our Services <FaArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
