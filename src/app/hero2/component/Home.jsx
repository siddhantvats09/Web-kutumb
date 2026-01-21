// app/page.jsx
"use client";

import { useMemo, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Section2 from "./Section2";
import Image from "next/image";
import Testimonial from "./Testimonial";
import ContactSection from "../../../../components/ContactSection";
import Link from "next/link";
import TypingText from "./Typing";

export default function Home() {
  const allServices = useMemo(
    () => [
      {
        media: "/images/webdes2.mp4",
        title: "Website Design",
        desc: "Premium UI/UX and modern web design built for trust, clarity, and high conversions.",
        tag: "Conversion UI/UX",
        tagDesc: "Clear hierarchy + persuasive layouts + CTA-focused sections.",
        points: [
          "UI/UX focused layouts",
          "Brand consistency",
          "High-converting sections",
        ],
      },
      {
        media: "/images/graphic2.jpg",
        title: "Graphic & Logo Design",
        desc: "Brand identity and visuals that build trust, authority, and premium market perception.",
        tag: "Brand Consistency",
        tagDesc: "Design system for website, ads, and product creatives.",
        points: ["Logo design", "Brand identity", "Marketing creatives"],
      },
      {
        media: "/images/animation1.mp4",
        title: "3D/2D Animation",
        desc: "Premium 3D/2D product animation and renders for standout marketing and brand positioning.",
        tag: "Premium Output",
        tagDesc:
          "Photoreal visuals optimized for ads and product storytelling.",
        points: [
          "3D/2D product animation",
          "3D/2D logo animation",
          "Photoreal renders",
        ],
      },
      {
        media: "/images/webdev2.mp4",
        title: "Website Development",
        desc: "Custom website development engineered for speed, security, and scalable growth.",
        tag: "Performance Build",
        tagDesc:
          "Core Web Vitals + fast load speed + SEO-friendly architecture.",
        points: [
          "Fast & secure builds",
          "Next.js / WordPress / Shopify",
          "Landing pages + eCommerce",
        ],
      },

      {
        media: "/images/seo3.jpg",
        title: "SEO Services",
        desc: "Rank higher on Google with technical SEO, on-page optimization, and content strategy.",
        tag: "Topical Authority",
        tagDesc: "Keyword mapping + clusters for long-term organic growth.",
        points: [
          "Technical SEO audit",
          "Local SEO",
          "Content + internal links",
        ],
      },
      {
        media: "/images/gglads1.mp4",
        title: "Google & Meta Ads",
        desc: "Conversion-driven paid campaigns engineered to improve ROAS and reduce cost per lead.",
        tag: "Tracking Setup",
        tagDesc: "GA4 + Pixel + Conversion API + event-based optimization.",
        points: ["Google Ads", "Meta Ads", "Retargeting + scaling"],
      },
      //   {
      //     media: "/images/reels.jpg",
      //     title: "Performance Marketing",
      //     desc: "Full-funnel growth strategy that connects ads, creatives, and landing pages for ROI.",
      //     tag: "Conversion System",
      //     tagDesc: "A/B testing + CRO + creative iteration for consistent scaling.",
      //     points: ["Lead generation", "CRO optimization", "Funnel strategy"],
      //   },

      //   {
      //     media: "/images/photo.png",
      //     title: "Product Design Creatives",
      //     desc: "High-impact product creatives and marketing design that boost engagement and sales.",
      //     tag: "Content Production",
      //     tagDesc: "Campaign-ready assets built for performance marketing.",
      //     points: ["Product visuals", "Ad creatives", "Social media design"],
      //   },
      //   {
      //     media: "/images/animation1.mp4",
      //     title: "2D Animation",
      //     desc: "Explainer videos and motion graphics built to educate, engage, and convert.",
      //     tag: "Storytelling",
      //     tagDesc: "Short-form motion for ads, landing pages, and social growth.",
      //     points: ["Explainers", "Motion graphics", "Brand animations"],
      //   },
    ],
    [],
  );

  const [visible, setVisible] = useState(8);

  const handleSeeMore = () => {
    setVisible((prev) =>
      prev + 4 <= allServices.length ? prev + 4 : allServices.length,
    );
  };

  const isVideo = (file) => /\.(mp4|webm|ogg)$/i.test(file);

  const renderVideo = (media) => {
    const basePath = media.replace(/\.\w+$/, "");
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={`${basePath}.webm`} type="video/webm" />
        <source src={`${basePath}.mp4`} type="video/mp4" />
      </video>
    );
  };

  return (
    <div className="bg-[#0a0a0a] text-[#0f172a] antialiased selection:bg-[#3713ec]/10 overflow-x-hidden">
      {/* Decorative overlays */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-[0.03] bg-[radial-gradient(circle_at_center,#3713ec_0.6px,transparent_0.6px)] [background-size:32px_32px]" />
      <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[140px] -z-10 bg-[#3713ec]/5" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[140px] -z-10 bg-[#3713ec]/5" />

      <main>
        {/* HERO */}
        <section className="relative isolate min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <video
              className="h-full w-full object-cover  object-center "
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/videos/bgvideo.webm" type="video/webm" />
              <source src="/videos/bgvideo.mp4" type="video/mp4" />
            </video>

           
          </div>

          {/* Accent Glow */}
          {/* <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_50%_45%,rgba(200,169,95,0.18)_0%,rgba(200,169,95,0.08)_30%,transparent_70%)]" /> */}

          {/* Content */}
          <div className="relative z-[2] max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-medium leading-[0.95] tracking-tight text-white mb-14">
              <span className="italic font-light">Built for Growth.</span>
              <br />
              <span className=" text-[#fffffffe]">
                Powered by Performance.
              </span>
            </h1>
            <TypingText></TypingText>

            <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-6">
              <button className="w-full sm:w-auto rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-bold text-white backdrop-blur transition hover:border-[#c8a95f]/30 hover:bg-[#c8a95f]/10 sm:px-10 sm:py-4 sm:text-lg flex items-center justify-center gap-3">
                Explore Services
                <span className="text-lg sm:text-xl leading-none">↓</span>
              </button>

              <Link
                href="/contactus"
                className="w-full sm:w-auto rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-bold text-white backdrop-blur transition hover:border-[#c8a95f]/30 hover:bg-[#c8a95f]/10 sm:px-10 sm:py-4 sm:text-lg flex items-center justify-center gap-3"
              >
                Book Consultation
                <span className="text-lg sm:text-xl leading-none">→</span>
              </Link>
            </div>
          </div>
        </section>

        <Section2></Section2>

        {/* PHILOSOPHY */}
        <section
          id="philosophy"
          className="relative isolate overflow-hidden md:py-24 py-16 px-6 bg-[#0a0a0a] text-white"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 z-[-1] opacity-100 "
            style={{
              backgroundImage: "url('/images/bgwhy2.jpg')",
              backgroundRepeat: "repeat",
              backgroundSize: "420px",
              backgroundPosition: "top left",
            }}
          />

          <div className="max-w-7xl mx-auto">
            {/* Top Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-8 md:mb-16">
              <div className="lg:col-span-7">
                <span className="text-[#c8a95f] font-bold text-xs uppercase tracking-[0.28em] mb-4 block">
                  Our Core Pillars
                </span>

                <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold italic text-white leading-[1.05]">
                  Strategy Built for Rankings, Leads & ROI.
                </h2>

                <p className="mt-5 text-white/70 max-w-2xl leading-relaxed">
                  SixthGenX combines <strong>website design</strong>,{" "}
                  <strong>website development</strong>, <strong>SEO</strong>,
                  and <strong>performance marketing</strong> into one growth
                  system — so your business gains visibility, conversions, and
                  scalable revenue.
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Conversion-First Website Design",
                  desc: "UI/UX architecture that builds trust and guides users toward action — perfect for landing pages and service sites.",
                  points: [
                    "Premium layout system",
                    "Clear CTAs + user flow",
                    "Brand-consistent UI",
                  ],
                },
                {
                  title: "SEO Authority & Organic Growth",
                  desc: "Technical SEO + on-page optimization + content clusters to help you rank for high-intent service keywords.",
                  points: [
                    "Technical SEO audit",
                    "Local SEO + maps",
                    "Topical authority building",
                  ],
                },
                {
                  title: "Performance Marketing That Scales",
                  desc: "Google Ads and Meta Ads engineered for conversions with tracking, creatives, and continuous testing.",
                  points: [
                    "GA4 + Pixel setup",
                    "Retargeting funnels",
                    "CPL reduction strategy",
                  ],
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-7 md:p-10 shadow-[0_18px_55px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(0,0,0,0.65)] hover:border-[#c8a95f]/35"
                >
                  {/* card glow */}
                  <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl bg-[#c8a95f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <h3 className="relative text-2xl font-bold text-white mb-4">
                    {card.title}
                  </h3>

                  <p className="relative text-white/60 leading-relaxed">
                    {card.desc}
                  </p>

                  <div className="relative mt-4 md:mt-7 pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#c8a95f]">
                      Growth pillar
                    </span>

                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all group-hover:border-[#c8a95f]/35 group-hover:bg-[#c8a95f]/15 group-hover:text-white">
                      →
                    </span>
                  </div>

                  {/* micro accent like premium UI */}
                  <div className="relative mt-7 h-[2px] w-12 bg-[#c8a95f]/70 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section
          className="relative py-13 md:py-24 px-6 bg-[#0a0a0a] overflow-hidden text-white"
          id="services"
        >
          {/* ✅ Background Image Layer */}
          <div
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage: "url('/images/bgwhy2.jpg')",
              backgroundRepeat: "repeat",
              backgroundSize: "420px",
              backgroundPosition: "top left",
            }}
          />

          {/* ✅ Content Layer */}
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
              <div>
                <span className="text-[#c8a95f] font-bold text-xs uppercase tracking-[0.28em] mb-4 block">
                  Capabilities
                </span>
                <h2 className="text-4xl md:text-6xl font-[var(--font-playfair)] font-bold italic text-white leading-[1.02]">
                  Service Ecosystem
                </h2>
              </div>

              <p className="text-white/60 max-w-md leading-relaxed">
                A premium full-stack service suite for brands that want{" "}
                <strong>high-converting websites</strong>,{" "}
                <strong>SEO growth</strong>, and{" "}
                <strong>paid acquisition</strong> that scales.
              </p>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.slice(0, visible).map((s) => (
                <article
                  key={s.title}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#2b2b2b68] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#c8a95f]/35 hover:shadow-[0_22px_70px_rgba(0,0,0,0.65)]"
                >
                  {/* Media */}
                  <div className="relative h-56 w-full overflow-hidden bg-white/5">
                    {isVideo(s.media) ? (
                      renderVideo(s.media)
                    ) : (
                      <img
                        src={s.media}
                        alt={`${s.title} preview`}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                    )}

                    {/* Micro label */}
                    {/* <div className="absolute z-[3] left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] text-white backdrop-blur border border-white/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c8a95f]" />
                      Featured
                    </div> */}
                  </div>

                  {/* Content */}
                  <div className="p-9">
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {s.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                      {s.desc}
                    </p>

                    {/* Points */}
                    <ul className="mt-3 space-y-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-sm text-white/60"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#c8a95f]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Divider + Tag */}
                    <div className="mt-5 pt-5 border-t border-white/10">
                      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#c8a95f] italic">
                        {s.tag}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {s.tagDesc}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
                        Learn more
                      </span>

                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all group-hover:border-[#c8a95f]/35 group-hover:bg-[#c8a95f]/15 group-hover:text-white">
                        →
                      </span>
                    </div>

                    {/* micro accent line */}
                    <div className="mt-6 h-[2px] w-12 bg-[#c8a95f]/70 rounded-full" />
                  </div>
                </article>
              ))}
            </div>

            {/* See more */}
            {visible < allServices.length && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={handleSeeMore}
                  className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition hover:border-[#c8a95f]/35 hover:bg-[#c8a95f]/15"
                >
                  See More Services
                </button>
              </div>
            )}
          </div>
        </section>

        {/* PROCESS (DARK STRIP + HORIZONTAL CARDS) */}
        <section
          id="process"
          className="relative py-16 md:py-22 bg-[#0a0a0a] text-white overflow-hidden"
        >
          {/* ✅ Background Image Layer */}
          <div
            className="absolute inset-0 opacity-100"
            style={{
              backgroundImage: "url('/images/bgwhy2.jpg')",
              backgroundRepeat: "repeat",
              backgroundSize: "420px",
              backgroundPosition: "top left",
            }}
          />

          {/* ✅ Content Layer */}
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
              <span className="text-[#c8a95f] font-bold text-xs uppercase tracking-widest mb-4 block">
                The Process
              </span>

              <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold italic mb-6 text-white">
                The SEO + Ads Growth Workflow
              </h2>

              <p className="text-white/60 max-w-2xl mx-auto">
                A repeatable workflow to build websites that rank, launch
                campaigns that convert, and scale performance sustainably.
              </p>
            </div>

            <div className="flex gap-8 px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2))] overflow-x-auto pb-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {[
                {
                  no: "01",
                  title: "Research & Keyword Strategy",
                  desc: "We study your business, competitors, and customer intent. Then we build a keyword map (P1/P2 long-tail) so every page targets searches that bring leads.",
                },
                {
                  no: "02",
                  title: "UI/UX Design that Converts",
                  desc: "We design clean, premium layouts with clear CTAs and strong content hierarchy. The goal is simple: users understand your offer fast and take action.",
                },
                {
                  no: "03",
                  title: "Development + Technical SEO Setup",
                  desc: "We build the site on Next.js with speed + SEO in mind: Core Web Vitals, schema, metadata, clean URLs, image optimization, and proper heading structure (H1–H3).",
                },
                {
                  no: "04",
                  title: "Launch, Track & Scale Results",
                  desc: "We launch Google & Meta Ads with correct tracking (GA4, Pixel, events). Then we optimize using real data—A/B tests, retargeting, and conversion rate improvements.",
                },
              ].map((step) => (
                <div
                  key={step.no}
                  className="group relative flex-shrink-0 w-[350px] md:mt-6 p-10 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(0,0,0,0.65)] hover:border-[#c8a95f]/35"
                >
                  {/* subtle gold glow */}
                  <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl bg-[#c8a95f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <span className="relative text-4xl font-[var(--font-playfair)] italic text-[#c8a95f] mb-6 block">
                    {step.no}
                  </span>

                  <h3 className="relative text-xl font-bold mb-4 text-white">
                    {step.title}
                  </h3>

                  <p className="relative text-sm text-white/60 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* micro accent line like premium UI */}
                  <div className="relative mt-7 h-[2px] w-12 bg-[#c8a95f]/70 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST / CASE STUDY TEASER */}
        <section
          id="case-studies"
          className="md:py-18 py-14 px-6 bg-[#c8a95f]/100 text-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/95 mb-6">
                Trusted by growth-focused brands
              </p>

              <div className="flex flex-wrap justify-center gap-8 md:gap-24 opacity-100 grayscale hover:grayscale-0 transition-all">
                <div className="text-2xl font-black italic text-white">
                  AURORA
                </div>
                <div className="text-2xl font-black italic text-white">
                  NEBULA
                </div>
                <div className="text-2xl font-black italic text-white">
                  SYNTIX
                </div>
                <div className="text-2xl font-black italic text-white">
                  AXON
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="relative bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center px-6 md:px-20 py-24 overflow-hidden">
          {/* Background Image with subtle opacity */}
            <div
            className="absolute inset-0  opacity-100 "
            style={{
              backgroundImage: "url('/images/bgwhy2.jpg')",
              backgroundRepeat: "repeat",
              backgroundSize: "420px",
              backgroundPosition: "top left",
            }}
          />
          {/* Readability overlay */}
         
          {/* Floating Gold Gradient Blob */}
          <motion.div
            className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl z-0 "
            initial={{ opacity: 0.35, scale: 1 }}
            animate={{ opacity: 0.25, scale: [1, 1.06, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center lg:text-left space-y-6 w-full lg:w-1/2"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Ready to Elevate Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c8a95f] to-[#c8a95f]">
                  Digital Presence?
                </span>
              </h1>

              <p className="text-white/60 text-lg">
                Let our team help you create stunning websites, bold branding,
                engaging content, and powerful marketing — all designed to grow
                your business.
              </p>

              <Link href={"/contactus"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="
            mt-4 flex items-center gap-3 
            px-6 py-2 
            text-black text-lg font-bold
            rounded-xl
            bg-[#c8a95f]
            border border-[#c8a95f]/50
            hover:opacity-95
            hover:shadow-[0_0_18px_rgba(200,169,95,0.22)]
            transition-all duration-300 ease-in-out
          "
                >
                  Book a Free Consultation <FiArrowRight />
                </motion.button>
              </Link>
            </motion.div>

            {/* Right Side Video or Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative max-w-md w-full">
                {/* Gold Blur Shadow */}
           
                {/* Video Container */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_22px_70px_rgba(0,0,0,0.75)] z-10">
                  <video
                    src="/images/video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full opacity-70 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className=" bg-black">
          <Testimonial></Testimonial>
        </div>

        

        {/* CONTACT / CONSULTATION (FORM) */}
        <ContactSection></ContactSection>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] relative border-t border-white/10 pt-24 pb-12 text-white">
        <div
          className="absolute inset-0 z-[1] opacity-100"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />
        <div className="max-w-7xl relative z-2 mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-5 space-y-8">
              <div className="flex items-center gap-3">
                <div className="size-10 flex items-center justify-center bg-[#c8a95f]/15 border border-[#c8a95f]/35 text-white rounded-xl">
                  <span className="text-xl">↗</span>
                </div>
                <span className="text-2xl font-black italic font-[var(--font-playfair)] text-white">
                  SixthGenX
                </span>
              </div>

              <p className="text-white/75 max-w-sm leading-relaxed">
                SixthGenX is a full-service digital agency offering website
                design & development, SEO services, performance marketing,
                Google & Meta Ads, graphic design, and 2D/3D animation.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div>
                <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-white">
                  Services
                </h4>
                <ul className="space-y-4 text-sm text-white/75 font-medium">
                  <li>
                    <a
                      className="hover:text-[#c8a95f] transition-colors"
                      href="#services"
                    >
                      Website Design & Development
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#c8a95f] transition-colors"
                      href="#services"
                    >
                      SEO Services
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#c8a95f] transition-colors"
                      href="#services"
                    >
                      Performance Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#c8a95f] transition-colors"
                      href="#services"
                    >
                      Google & Meta Ads
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-white">
                  Agency
                </h4>
                <ul className="space-y-4 text-sm text-white/75 font-medium">
                  <li>
                    <a
                      className="hover:text-[#c8a95f] transition-colors"
                      href="#philosophy"
                    >
                      Philosophy
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#c8a95f] transition-colors"
                      href="#process"
                    >
                      Workflow
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#c8a95f] transition-colors"
                      href="#case-studies"
                    >
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#c8a95f] transition-colors"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-white">
                  Connect
                </h4>

                <div className="flex gap-4 mb-6">
                  <a
                    className="size-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-[#c8a95f]/35 hover:bg-[#c8a95f]/15 hover:text-white transition-all"
                    href="#"
                    aria-label="Website"
                    rel="nofollow"
                  >
                    🌐
                  </a>
                  <a
                    className="size-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-[#c8a95f]/35 hover:bg-[#c8a95f]/15 hover:text-white transition-all"
                    href="#"
                    aria-label="Email"
                    rel="nofollow"
                  >
                    ✉
                  </a>
                </div>

                {/* micro accent line */}
                <div className="h-[2px] w-12 bg-[#c8a95f]/70 rounded-full" />
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/75 font-bold uppercase tracking-widest">
            <p>
              © {new Date().getFullYear()} SixthGenX Tech. All rights reserved.
            </p>

            <div className="flex gap-8">
              <a className="hover:text-[#c8a95f]" href="#" rel="nofollow">
                Privacy Policy
              </a>
              <a className="hover:text-[#c8a95f]" href="#" rel="nofollow">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Button */}
      {/* <div className="fixed bottom-8 right-8 z-[100]">
        <button className="size-16 bg-black text-white rounded-3xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-black to-[#3713ec] opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10 text-2xl">◎</span>
        </button>
      </div> */}
    </div>
  );
}
