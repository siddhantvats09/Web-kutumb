"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookMessenger,
} from "react-icons/fa";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function ContactUsPage() {
  return (
    <div className="relative bg-black  text-white min-h-[550px] px-6 py-12 overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full blur h-full object-cover opacity-50 z-0"
      />

      <div className="relative z-10 text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Get in Touch</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          Have a project in mind? Want to collaborate or just say hello? Drop us
          a message and we’ll get back to you soon.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid h-[400px] grid-cols-1 md:grid-cols-2 gap-8 relative z-10 items-center">
        {/* Image */}
        <div className="relative hidden md:block h-[340px]">
          <img
            src="/images/contact2.jpg"
            alt="Contact Illustration"
            className="rounded-2xl opacity-80 w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center text-center py-2">
            <h2 className="text-[#fff] drop-shadow-[0_2px_8px_rgba(0,0,0,1)] text-lg md:text-2xl border-y-2 w-full font-sans border-white font-extrabold backdrop-blur-2xl py-4">
              Let’s Create Something <br /> Remarkable Together!
            </h2>
          </div>
        </div>

        {/* Contact Info Card */}
        <div className="flex flex-col justify-center bg-[#1c1c1e58] border border-[#2a2a2a] rounded-2xl shadow-xl p-6 backdrop-blur-md">
          <div className="mb-6">
            <h3 className="text-base font-medium text-[#9f9aff] mb-1">Email</h3>
            <a
              href="mailto:sixthgenxtech@gmail.com"
              className="text-gray-200 hover:text-[#9f9aff] underline decoration-transparent hover:decoration-[#9f9aff] hover:underline-offset-4 transition"
            >
              sixthgenxtech@gmail.com
            </a>
          </div>
          <div className="mb-6">
            <h3 className="text-base font-medium text-[#9f9aff] mb-1">Phone</h3>
            {/* <a
              href="tel:+917988180681"
              className="text-gray-200 hover:text-[#9f9aff] block hover:underline hover:underline-offset-4 transition"
            >
              +91 7988180681
            </a> */}
            <a
              href="tel:+919817612848"
              className="text-gray-200 hover:text-[#9f9aff] block hover:underline hover:underline-offset-4 transition"
            >
              +91 9817612848
            </a>
          </div>
          <div>
            <h3 className="text-base font-medium text-[#9f9aff] mb-1">
              Location
            </h3>
            <p className="text-gray-300">Gurgaon, India</p>
          </div>

          <a
            href="https://wa.me/9817612848"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex justify-center items-center px-5 py-2 bg-transparent border border-white/20 hover:border-[#494646] hover:bg-white/5 hover:shadow-md hover:scale-105 backdrop-blur-sm rounded-xl text-white text-base font-medium transition-all duration-300 ease-in-out"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Arrow */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-3 flex flex-col items-center z-10">
        <ChevronDownIcon className="h-5 w-5 text-amber-400 animate-bounce" />
        <p className="text-white mt-1 text-xs font-medium">Send us Messages</p>
      </div>
    </div>
  );
}
