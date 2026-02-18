"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function GraphicDesignPage() {
  return (
    <main className="bg-black  text-white">
      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] py-18 md:py-26 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/samples/graphichero.jpg"
            alt="Graphic design background"
            className="w-full h-full object-cover opacity-15"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="max-w-7xl text-center relative z-10 mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl text-white"
            >
              Graphic Design &{" "}
              <span className="text-[#c8a95f]">Logo Design Services</span> That
              Build Brands
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 px-4 max-w-2xl mx-auto text-center text-white/90 text-lg leading-relaxed"
          >
            We craft high-impact <strong>graphic design</strong>, modern{" "}
            <strong>logo design</strong>, brand identity systems, marketing
            creatives, and digital visuals that elevate perception and increase
            brand recall. Every design is built with strategy, clarity, and
            conversion psychology in mind.
          </motion.p>

          <div className="hidden relative z-1 md:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link href="#Packaging">
                <button className="px-8 py-4 rounded-2xl border border-[#c8a95f]/80 bg-black/55 text-white font-bold hover:border-[#c8a95f]/40 hover:bg-[#c8a95f]/10 transition-all duration-300">
                  Product & Packaging Design
                </button>
              </Link>
              <Link href="#Logo">
                <button className="px-8 py-4 rounded-2xl border border-[#c8a95f]/40 bg-[#c8a95f] text-black font-bold hover:opacity-100 transition-all duration-300">
                  Logo Design
                </button>
              </Link>
              <Link href="#Graphic">
                <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/35 text-white font-bold hover:border-[#c8a95f]/40 hover:bg-[#c8a95f]/10 transition-all duration-300">
                  Graphic Design & Marketing Creatives
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES OVERVIEW ================= */}
      <section className="py-14 md:py-22 overflow-hidden relative">
        <div
          className="absolute inset-0 z-[0]"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />
        <div className="max-w-7xl relative z-1  mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Graphic & Branding Capabilities
          </h2>

          <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-7 md:gap-10">
            {[
              {
                title: "Brand Identity Design",
                desc: "Complete branding systems including logo marks, typography, brand colors, brand guidelines, and visual consistency frameworks.",
              },
              {
                title: "Marketing & Social Creatives",
                desc: "Ad creatives, social media posts, banners, brochures, and campaign visuals optimized for performance marketing.",
              },
              {
                title: "Professional Logo Design",
                desc: "Minimal, modern, luxury, and corporate logo design crafted for memorability, scalability, and long-term brand equity.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border border-white/10 p-4 md:p-8 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-[#c8a95f]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/90">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="Packaging"
        className="py-14 md:py-22 overflow-hidden relative"
      >
        <div
          className="absolute inset-0 z-[0]"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />
        <div className="max-w-7xl relative z-1  mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-[#c8a95f] font-bold">
            Product & Packaging Design Portfolio
          </h2>

          <p className="mt-4 max-w-2xl text-white/85">
            Selected samples including product design mockups, packaging design
            concepts, marketing creatives, and promotional visuals. Every design
            is built for clarity, positioning, and visual impact.
          </p>

          {/* Premium Masonry-Style Grid */}

          <div className="mt-14 md:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-10">
            {[
              {
                src: "/samples/product1.png",
                alt: "Premium Food Packaging Design – Almonds",
                label: "product1",
              },
              {
                src: "/samples/product2.png",
                alt: "Healthy Snack Packaging Design Concept",
                label: "product2",
              },
              {
                src: "/samples/product3.png",
                alt: "Makhana Product Packaging Branding",
                label: "product3",
              },
              {
                src: "/samples/product4.png",
                alt: "Beverage Bottle Packaging Design",
                label: "product4",
              },
              {
                src: "/samples/product5.png",
                alt: "Medical Product Packaging Layout Design",
                label: "product5",
              },
              {
                src: "/samples/product6.png",
                alt: "Cosmetic Tube Packaging Mockup",
                label: "product6",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Image wrapper */}
                <div className="w-full flex justify-center bg-[#0b0b0b]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={500}
                    height={600}
                    className="h-[200px] w-auto object-contain"
                  />
                </div>

                {/* Caption */}
                <p className="mt-2 md:mt-4 text-sm text-white/80 tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 relative z-1  md:mt-16 flex justify-center">
          <a
            href="https://docs.google.com/presentation/d/1EB_pJKVHCfoFVQT6XijMYdLhAn4crpJL/edit?usp=drive_link&ouid=115519480901389398327&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full border border-[#c8a95f] text-[#c8a95f] text-sm font-bold tracking-wide transition-all duration-300 hover:bg-[#c8a95f] hover:text-black"
          >
            Check More PRODUCT Samples
          </a>
        </div>
      </section>

      {/* ================= GRAPHIC DESIGN PORTFOLIO ================= */}
      <section id="Graphic" className="py-14 md:py-22 overflow-hidden relative">
        <div
          className="absolute inset-0 z-[0]"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />
        <div className="max-w-7xl relative z-1  mx-auto px-6">
          <h2 className="text-3xl text-[#c8a95f] md:text-4xl font-bold">
            Graphic Design Portfolio
          </h2>

          <p className="mt-4 max-w-2xl text-white/85">
            Selected creative samples including branding visuals, marketing
            creatives, social media campaigns, and promotional design assets.
          </p>

          {/* Special Asymmetric Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Large Feature */}
            <div className="col-span-2 row-span-2 relative aspect-square border border-white/10 rounded-2xl overflow-hidden">
              <Image
                src="/samples/graphic1.jpg"
                alt="Branding Graphic Design Sample"
                fill
                className="object-cover"
              />
            </div>

            {/* 4 smaller items */}
            {[
              "/samples/graphic2.jpg",
              "/samples/graphic3.jpg",
              "/samples/graphic4.jpg",
              "/samples/graphic5.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="relative aspect-square border border-white/10 rounded-2xl overflow-hidden"
              >
                <Image
                  src={img}
                  alt="Marketing Graphic Design Sample"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 md:mt-16 relative z-1  flex justify-center">
          <a
            href="https://drive.google.com/file/d/13aFbDyucW4yZN3Hy6RzGsW4d-493mxsv/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full border border-[#c8a95f] text-[#c8a95f] text-sm font-bold tracking-wide transition-all duration-300 hover:bg-[#c8a95f] hover:text-black"
          >
            Check More GRAPHIC Samples 1
          </a>
        </div>
        <div className="mt-4 flex relative z-1  justify-center">
          <a
            href="https://drive.google.com/file/d/1A9EZeU3xr1QDOilDW-k6m_QdBA0Wwe9W/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full border border-[#c8a95f] text-[#c8a95f] text-sm font-bold tracking-wide transition-all duration-300 hover:bg-[#c8a95f] hover:text-black"
          >
            Check More GRAPHIC Samples 2
          </a>
        </div>
      </section>

      {/* ================= LOGO DESIGN PORTFOLIO ================= */}
      <section id="Logo" className="py-14 md:py-22 overflow-hidden relative">
        <div
          className="absolute inset-0 z-[0]"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />
        <div className="max-w-7xl relative z-1 mx-auto px-6">
          <h2 className="text-3xl text-[#c8a95f] md:text-4xl font-bold">
            Logo Design Showcase
          </h2>

          <p className="mt-4 max-w-2xl text-white/85">
            Custom logo designs crafted for startups, enterprises, and growing
            brands. Each mark is designed for clarity, versatility, and
            scalability across digital and print.
          </p>

          {/* Clean Structured Grid */}
          <div className="mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-6 gap-6">
            {[
              "/samples/logo1.jpg",
              "/samples/logo2.jpg",
              "/samples/logo3.jpg",
              "/samples/logo4.jpg",
              "/samples/logo5.jpg",
              "/samples/logo6.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="relative aspect-square border border-white/10 rounded-2xl overflow-hidden bg-black"
              >
                <Image
                  src={img}
                  alt="Professional Logo Design Sample"
                  fill
                  className="object-contain p-1 md:p-4"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 relative z-1 md:mt-16 flex justify-center">
          <a
            href="https://docs.google.com/presentation/d/1thUpVcZnGm2ijgM9Q1NWsCOZz4nTvEt4/edit?usp=drive_link&ouid=115519480901389398327&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full border border-[#c8a95f] text-[#c8a95f] text-sm font-bold tracking-wide transition-all duration-300 hover:bg-[#c8a95f] hover:text-black"
          >
            Check More LOGO Samples
          </a>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-10 md:py-16 bg-[#c8a95f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Build a Powerful Brand Identity?
          </h2>

          <p className="mt-6 text-white/100 italic text-lg">
            Let’s create a professional logo and high-impact graphic design
            assets that strengthen your brand positioning and drive long-term
            growth.
          </p>
          <Link href="/contactus">
            <button className="mt-10 px-10 py-4 cursor-pointer border border-[#000000] bg-[#000] text-[#c8a95f] font-semibold rounded-full">
              Start Your Branding Project
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
