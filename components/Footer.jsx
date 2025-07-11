import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 pt-16 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/bg.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-20 z-0"
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
        {/* Company Info */}
        <div>
          <h2 className="text-white text-2xl font-semibold mb-3">SixthGenX</h2>
          <p className="text-gray-400 text-sm">
            Building powerful digital experiences through web, design, video,
            and strategy. Let's grow your business together.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          <h3 className="text-white text-xl font-medium">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              "Web Dev/Design",
              "Graphic Design",
              "Video/Photo Editing",
              "Google/Meta Ads",
              "Animations 2D/3D",
              "SEO Optimization",
            ].map((service, idx) => (
              <li key={idx}>
                <p className="hover:text-white transition">{service}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h3 className="text-white text-xl font-medium">Contact</h3>
          <p className="text-gray-400 text-sm">
            Email:{" "}
            <a
              href="mailto:sixthgenxtech@gmail.com"
              className="text-gray-300 hover:text-[#9f9aff] transition underline underline-offset-4"
            >
              sixthgenxtech@gmail.com
            </a>
          </p>
          <p className="text-gray-400 text-sm">Phone: +91 79881 80681</p>

          <div className="flex gap-4 mt-3 text-xl">
            <a
              target="_blank"
              href="http://linkedin.com/in/sixthgenx-tech-746129364"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/sixthgenx?igsh=bndjbmdtNmo0d2xn&utm_source=qr"
              className="text-gray-400 hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500 z-10">
        © {new Date().getFullYear()} SixthGenX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
