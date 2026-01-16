// // components/sections/TestimonialsMarquee.jsx
// "use client";

// import { useEffect, useMemo, useRef } from "react";

// export default function Testimonial() {
//   const rowRef = useRef(null);

//   const testimonials = useMemo(
//     () => [
//       {
//         quote:
//           "We built a travel agency website with SixthGenX. The design and functionality really helped us grow.",
//         name: "Shree Ram Rajkumar",
//         company: "CEO, LuxBlack",
//       },
//       {
//         quote:
//           "They built a school website and custom management software for us. It simplified everything for staff and students.",
//         name: "Sanjeev Kumar",
//         company: "Director, PS Public School",
//       },
//       {
//         quote:
//           "SixthGenX created a professional travel agency logo for us. It gave our brand a premium look.",
//         name: "Shree Ram Rajkumar",
//         company: "CEO, LuxBlack",
//       },
//       {
//         quote:
//           "We ran performance marketing campaigns and the results were outstanding in leads and engagement.",
//         name: "Ram Mohan Khanna",
//         company: "Sales Executive, Shapoorji Pallonji",
//       },
//       {
//         quote:
//           "They handled our corporate website project from scratch. It’s modern, responsive, and aligns with our goals.",
//         name: "Sumit Verma",
//         company: "Website Manager, Shatam Jeeva",
//       },
//       {
//         quote:
//           "As project manager, I was impressed by how smoothly they delivered the website project — on time and high quality.",
//         name: "Aman Patel",
//         company: "Project Manager, SINE",
//       },
//     ],
//     []
//   );

//   // Duplicate list for infinite marquee effect
//   const marqueeItems = useMemo(
//     () => [...testimonials, ...testimonials],
//     [testimonials]
//   );

//   useEffect(() => {
//     const el = rowRef.current;
//     if (!el) return;

//     let rafId;
//     let speed = 0.7; // scroll speed
//     let paused = false;

//     const step = () => {
//       if (!paused) {
//         el.scrollLeft += speed;

//         // Reset scroll when half reached (because list is duplicated)
//         if (el.scrollLeft >= el.scrollWidth / 2) {
//           el.scrollLeft = 0;
//         }
//       }
//       rafId = requestAnimationFrame(step);
//     };

//     const onEnter = () => (paused = true);
//     const onLeave = () => (paused = false);

//     el.addEventListener("mouseenter", onEnter);
//     el.addEventListener("mouseleave", onLeave);

//     rafId = requestAnimationFrame(step);

//     return () => {
//       cancelAnimationFrame(rafId);
//       el.removeEventListener("mouseenter", onEnter);
//       el.removeEventListener("mouseleave", onLeave);
//     };
//   }, []);

//   return (
//     <section className="relative py-24 md:px-6 bg-[#ffffff] overflow-hidden">
//       {/* Background (subtle) */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(55,19,236,0.08),transparent_45%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(0,0,0,0.06),transparent_40%)]" />
//       </div>

//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-14">
//           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0f172a]/45">
//             Testimonials
//           </p>
//           <h2 className="mt-4 text-4xl md:text-5xl font-[var(--font-playfair)] font-bold italic text-black">
//             Real Results. Real Clients.
//           </h2>
//           <p className="mt-5 text-[#0f172a]/65 max-w-2xl mx-auto leading-relaxed">
//             Brands trust SixthGenX for website development, SEO growth, and paid
//             advertising performance.
//           </p>
//         </div>

//         {/* Marquee Row */}
//         <div className="relative">
//           {/* Left fade */}
//           <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
//           {/* Right fade */}
//           <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

//           <div
//             ref={rowRef}
//             className="flex gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-4"
//           >
//             {marqueeItems.map((t, idx) => (
//               <article
//                 key={`${t.name}-${idx}`}
//                 className="min-w-[320px] md:min-w-[420px] group relative overflow-hidden rounded-[32px] border border-[#eeeeee] bg-white/70 backdrop-blur-xl p-10 shadow-[0_18px_60px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-[#3713ec]/30 hover:shadow-[0_22px_80px_rgba(0,0,0,0.10)]"
//               >
//                 {/* Quote mark */}
//                 <span className="absolute -top-3 -right-2 text-[#3713ec]/10 text-[110px] leading-none select-none">
//                   ❝
//                 </span>

//                 {/* Quote */}
//                 <p className="text-lg md:text-xl font-[var(--font-playfair)] italic text-black relative z-10 mb-8 leading-relaxed">
//                   “{t.quote}”
//                 </p>

//                 {/* Footer */}
//                 <div className="flex items-center gap-4">
//                   <div className="size-12 rounded-full bg-[#eeeeee] border border-[#eeeeee] overflow-hidden">
//                     {/* optional: if you have images later replace this */}
//                     <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(55,19,236,0.18),transparent_55%)]" />
//                   </div>

//                   <div>
//                     <p className="font-bold text-sm text-black">{t.name}</p>
//                     <p className="text-xs text-[#0f172a]/60">{t.company}</p>
//                   </div>
//                 </div>

//                 {/* Mini CTA */}
//                 <div className="mt-7 pt-6 border-t border-[#eeeeee] flex items-center justify-between">
//                   <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#0f172a]/40">
//                     Verified client
//                   </span>
//                   <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#eeeeee] bg-white text-black transition-all group-hover:border-[#3713ec]/30 group-hover:bg-[#3713ec] group-hover:text-white">
//                     →
//                   </span>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>

//         {/* Helper note */}
//         <p className="mt-6 text-center text-xs text-[#0f172a]/50">
//           Auto-scrolls continuously — hover to pause.
//         </p>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
const testimonials = [
  {
    quote: "We build a travel agency website with SixthGenX. The design and functionality really helped us grow.",
    name: "Shree Ram Rajkumar",
    company: "CEO, LuxBlack",
  },
  {
    quote: "They built a school website and custom management software for us. It has simplified everything for our staff and students.",
    name: "Sanjeev Kumar",
    company: "Director, PS Public School",
  },
  {
    quote: "SixthGenX created a professional travel agency logo for us. It gave our brand a premium look.",
    name: "Shree Ram Rajkumar",
    company: "CEO, LuxBlack",
  },
  {
    quote: "We ran performance marketing campaigns with them, and the results were outstanding in terms of leads and engagement.",
    name: "Ram Mohan Khanna",
    company: "Sales Executive, Shapoorji Pallonji",
  },
  {
    quote: "They handled our corporate website project from scratch. It’s modern, responsive, and aligns perfectly with our goals.",
    name: "Sumit Verma",
    company: "Website Manager, Shatam Jeeva",
  },
  {
    quote: "As project manager, I was impressed by how smoothly they delivered our website project — on time and with great quality.",
    name: "Aman Patel",
    company: "Project Manager, SINE",
  },
];



  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative py-12 md:py-16 px-6 md:px-16 bg-black rounded-[20px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/testi.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-40 z-0 rounded-[20px]"
      />

      <div className="relative max-w-3xl mx-auto text-center mb-12 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-xl mx-auto"
        >
          Hear from the businesses we've partnered with.
        </motion.p>
      </div>

      {/* Slider */}
      <div className="relative max-w-xl mx-auto text-center z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="border border-[#5b5b5b7a] bg-gradient-to-tr from-[#1c1c1c68] to-[#2a2a2a64] backdrop-blur-md p-8 rounded-2xl text-center shadow-xl min-h-[220px]"
          >
            <p className="text-gray-300 italic mb-4">"{testimonials[current].quote}"</p>
            <h3 className="text-white font-semibold">{testimonials[current].name}</h3>
            <p className="text-sm text-gray-400">{testimonials[current].company}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={prevSlide}
            className="p-3 border border-gray-600 text-white rounded-full hover:bg-gray-700 transition-all"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 border border-gray-600 text-white rounded-full hover:bg-gray-700 transition-all"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

