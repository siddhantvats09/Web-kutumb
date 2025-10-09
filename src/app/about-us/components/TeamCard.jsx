"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/solid";

export default function TeamCard() {
  const team = [
    { name: "Shivansh", role: "Founder & CEO", image: "" },
    { name: "Siddhant Vats", role: "Technical Head", image: "" }, // No image provided
    {
      name: "Lalit Sharma",
      role: "Media & Marketing Head",
      image: "",
    },
    
  ];

  return (
    <section className="md:py-14 py-8 px-6 md:px-16 bg-black overflow-hidden relative">
      <Image
        src="/images/bg.jpg" // Change to your background image path
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur z-0"
      />

      {/* Soft Background Glow */}
      {/* <div className="absolute inset-0">
        <div className="absolute w-60 h-60 bg-purple-500 opacity-20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl bottom-20 right-20 animate-pulse"></div>
      </div> */}

      {/* Title */}
      <div className="relative max-w-4xl mx-auto text-center mb-6 md:mb-12 z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-xl mx-auto"
        >
          The creative minds & tech wizards building your digital success.
        </motion.p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center text-center p-6 backdrop-blur-md border border-white/20 rounded-2xl bg-gradient-to-br from-[#1c1c1c50] to-[#2a2a2a50] shadow-[0_0_20px_#00000066] hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_30px_#ffffff33]"
          >
            <div className="relative w-20 h-20 md:w-30 md:h-30 mb-4 shadow-inner rounded-full overflow-hidden border border-white/10">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
                  <UserIcon className="w-14 h-14 text-white/30 blur-sm" />
                </div>
              )}
            </div>

            <h3 className="text-white text-lg md:text-xl font-semibold mb-1 tracking-wide">
              {member.name}
            </h3>
            <p className="text-gray-400 text-sm md:text-base">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
