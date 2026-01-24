"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SEOCases() {
  return (
    <section className="relative md:py-20 py-12 overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background image (repeat pattern) */}
      <div
        className="absolute inset-0  opacity-100"
        style={{
          backgroundImage: "url('/images/bgwhy2.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "420px",
          backgroundPosition: "top left",
        }}
      />

      {/* soft readability overlay */}
      <div className="pointer-events-none absolute inset-0 " />

      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl relative z-2 font-[var(--font-playfair)] font-bold text-white mb-12"
        >
          Recent Success Stories
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              tag: "Healthcare & Training",
              title: "Tech Mahindra Smart Academy",
              desc: "Built a structured, SEO-optimized website for a paramedical and healthcare training institute, improving course visibility, local search presence, and student enquiry conversions across key locations.",
              image: "/samples/seo1.png",
              link: "https://www.smart-academy.in/paramedical-healthcare-institute-delhi/",
            },
            {
              tag: "Hospitality",
              title: "Vrinda Fertility Center",
              desc: "Designed and optimized a trust-focused healthcare website with strong local SEO foundations, improving organic visibility for fertility treatments and increasing qualified patient enquiries.",
              image: "/samples/seo2.png",
              link: "https://vrindafertility.com/",
            },
            {
              tag: "Educational Services",
              title: "PS Public School",
              desc: "Delivered a fast, mobile-friendly school website with clear information architecture, improved page speed, and SEO-ready structure to support admissions and parent engagement.",
              image: "/work/ps.png",
              link: "https://www.pspublicschool.com/",
            },
          ].map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#c8a95f]/35 hover:shadow-[0_22px_70px_rgba(0,0,0,0.65)]"
            >
              {/* Image */}
              <Link href={item.link} target="_blank">
                <div className="aspect-video bg-white/5 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#c8a95f]">
                    {item.tag}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* micro accent */}
                  <div className="mt-5 h-[2px] w-12 bg-[#c8a95f]/70 rounded-full" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
