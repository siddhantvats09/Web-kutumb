"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="min-h-full  flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 px-6 md:px-16 lg:py-20 py-14 bg-gradient-to-r from-white to-[#f5f3f2]">
      {/* Left Content */}
      {/* <div className="w-[60%] max-w-xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-semibold text-black leading-tight">
          There is a<br />
          <span className="inline-flex items-center gap-3">
            <Image src="/stack-icon.svg" alt="icon" width={40} height={40} />
            Better Way
          </span><br />
          to Secure.
        </h1>

        <div className="mt-6">
          <button className="inline-flex items-center gap-2 border-b border-black text-black text-lg hover:opacity-70 transition">
            <FiArrowRight size={20} />
            Contact Us
          </button>
          <p className="mt-4 text-sm text-gray-600 max-w-sm">
            FynSec is a vulnerability scanner that finds cybersecurity weaknesses in your digital infrastructure to avoid costly data breaches.
          </p>
        </div>
      </div> */}
      <div className="md:w-[60%] w-full max-w-xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-semibold text-black leading-tight">
          Build Your
          <br />
          <span className="inline-flex items-center gap-3">
            <Image src="/images/all.png" alt="icon" width={80} height={40} />
            Digital Presence
          </span>
          <br />
          the Smarter Way.
        </h1>

        <div className="mt-6">
          <button className="inline-flex items-center gap-2 border-b border-black text-black text-lg hover:opacity-70 transition">
            <FiArrowRight size={20} />
            Contact Us
          </button>
          <p className="mt-4 text-sm text-gray-600 max-w-sm">
            Web Kutumb helps you grow your brand with expert services in web
            design, development, video production, and digital marketing.
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div className="lg:w-[40%]  w-full md:flex justify-center items-center relative">
        {/* Replace below with your video if needed */}
        <video
          src="/images/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-[90%] max-w-lg rounded-xl shadow-xl"
        />
      </div>
    </section>
  );
}
