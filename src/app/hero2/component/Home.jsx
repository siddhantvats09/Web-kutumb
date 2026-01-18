// app/page.jsx
"use client";

import { useMemo, useState } from "react";

import { motion } from "framer-motion";
import Section2 from "./Section2";
import Image from "next/image";
import Testimonial from "./Testimonial";
import ContactSection from "../../../../components/ContactSection";
import Link from "next/link";

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
    []
  );

  const [visible, setVisible] = useState(8);

  const handleSeeMore = () => {
    setVisible((prev) =>
      prev + 4 <= allServices.length ? prev + 4 : allServices.length
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
    <div className="bg-[#ffffff] text-[#0f172a] antialiased selection:bg-[#3713ec]/10 overflow-x-hidden">
      {/* Decorative overlays */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-[0.03] bg-[radial-gradient(circle_at_center,#3713ec_0.6px,transparent_0.6px)] [background-size:32px_32px]" />
      <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[140px] -z-10 bg-[#3713ec]/5" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[140px] -z-10 bg-[#3713ec]/5" />

      {/* HEADER */}
      {/* <header className="sticky top-0 z-[100] border-b border-[#eeeeee]/70 bg-white/70 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="size-10 flex items-center justify-center bg-black text-white rounded-2xl shadow-lg transition-transform group-hover:rotate-12">
              <span className="text-2xl leading-none">↗</span>
            </div>
            <div className="text-2xl font-black tracking-tight italic font-[var(--font-playfair)] text-black">
              SixthGenX
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            <a
              className="text-sm font-semibold text-[#0f172a]/60 hover:text-[#3713ec] transition-colors"
              href="#philosophy"
            >
              Philosophy
            </a>
            <a
              className="text-sm font-semibold text-[#0f172a]/60 hover:text-[#3713ec] transition-colors"
              href="#services"
            >
              Services
            </a>
            <a
              className="text-sm font-semibold text-[#0f172a]/60 hover:text-[#3713ec] transition-colors"
              href="#process"
            >
              Workflow
            </a>
            <a
              className="text-sm font-semibold text-[#0f172a]/60 hover:text-[#3713ec] transition-colors"
              href="#case-studies"
            >
              Case Studies
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-bold text-black px-6 py-2.5 rounded-full border border-[#eeeeee] hover:bg-[#f8f9fa] transition-all">
              Client Portal
            </button>
            <button className="bg-black text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-xl hover:-translate-y-0.5 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </header> */}

      <main>
        {/* HERO */}
        <section className="relative isolate min-h-[95vh] flex items-center justify-center overflow-hidden bg-white">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <video
              className="h-full w-full object-cover blur-[10px] object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/videos/bg2.webm" type="video/webm" />
              <source src="/videos/bg3.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Accent Glow */}
          <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_50%_45%,rgba(55,19,236,0.14)_0%,rgba(55,19,236,0.06)_30%,transparent_70%)]" />

          {/* Content */}
          <div className="relative z-[2] max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-playfair)] font-medium leading-[0.95] tracking-tight text-black mb-8">
              <span className="italic font-light">Built for Growth.</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-[#3713ec] to-[#3713ec]">
                Powered by Performance.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#0f172a]/65 font-light leading-relaxed mb-12">
              SixthGenX helps brands scale with{" "}
              <strong>website design & development</strong>,{" "}
              <strong>SEO services</strong>,{" "}
              <strong>performance marketing</strong>,{" "}
              <strong>Google Ads</strong>, <strong>Meta Ads</strong>, branding,
              and <strong>2D/3D animation</strong> — engineered for leads,
              sales, and visibility.
            </p>

            <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-6">
              <button className="w-full sm:w-auto rounded-2xl bg-black px-6 py-4 text-base font-bold text-white shadow-xl transition hover:opacity-95 sm:px-10 sm:py-5 sm:text-lg flex items-center justify-center gap-3">
                Explore Services
                <span className="text-lg sm:text-xl leading-none">↓</span>
              </button>

              <Link
                href="/contactus"
                className="w-full sm:w-auto rounded-2xl border border-[#eeeeee] bg-white/70 px-6 py-4 text-base font-bold text-black backdrop-blur transition hover:bg-[#f8f9fa] sm:px-10 sm:py-5 sm:text-lg flex items-center justify-center gap-3"
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
          className="relative isolate overflow-hidden md:py-24 py-16 px-6 bg-[#ffffff]"
        >
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/images/bg21.jpg"
              alt="Background"
              className="h-full w-full opacity-60 object-cover blur-[16px] object-center"
              loading="lazy"
            />

            {/* overlay (for readability) */}
            <div className="absolute inset-0 " />
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Top Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-8 md:mb-16">
              <div className="lg:col-span-7">
                <span className="text-[#3713ec] font-bold text-xs uppercase tracking-[0.28em] mb-4 block">
                  Our Core Pillars
                </span>

                <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold italic text-black leading-[1.05]">
                  Strategy Built for Rankings, Leads & ROI.
                </h2>

                <p className="mt-5 text-[#0f172a]/65 max-w-2xl leading-relaxed">
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
                  className="group relative overflow-hidden rounded-[32px] border border-[#eeeeee] bg-white/70 backdrop-blur-xl p-7 md:p-10 shadow-[0_18px_55px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(0,0,0,0.10)] hover:border-[#3713ec]/30"
                >
                  {/* card glow */}
                  <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl bg-[#3713ec]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <h3 className="relative text-2xl font-bold text-black mb-4">
                    {card.title}
                  </h3>

                  <p className="relative text-[#0f172a]/65 leading-relaxed">
                    {card.desc}
                  </p>

                  {/* <ul className="relative mt-6 space-y-2">
                    {card.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-[#0f172a]/70"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#3713ec]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul> */}

                  {/* footer */}
                  <div className="relative mt-4 md:mt-7 pt-6 border-t border-[#eeeeee] flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#0f172a]/40">
                      Growth pillar
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#eeeeee] bg-white text-black transition-all group-hover:border-[#3713ec]/30 group-hover:bg-[#3713ec] group-hover:text-white">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-24 px-6" id="services">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
              <div>
                <span className="text-[#3713ec] font-bold text-xs uppercase tracking-[0.28em] mb-4 block">
                  Capabilities
                </span>
                <h2 className="text-4xl md:text-6xl font-[var(--font-playfair)] font-bold italic text-black leading-[1.02]">
                  Service Ecosystem
                </h2>
              </div>
              <p className="text-[#0f172a]/65 max-w-md leading-relaxed">
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
                  className="group relative overflow-hidden rounded-[30px] border border-[#eeeeee] bg-[#00000009] transition-all duration-500 hover:-translate-y-1 hover:border-[#1d1d1e] hover:shadow-[0_22px_70px_rgba(0,0,0,0.10)]"
                >
                  {/* Media */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#f8f9fa]">
                    {/* Gradient overlay */}

                    {/* Accent corner glow */}

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
                    <div className="absolute z-[3] left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] text-black backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#3713ec]" />
                      Featured
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-9">
                    <h3 className="text-xl font-bold text-black leading-snug">
                      {s.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-relaxed text-[#0f172a]/65">
                      {s.desc}
                    </p>

                    {/* Points */}
                    <ul className="mt-3 space-y-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-sm text-[#0f172a]/70"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#3713ec]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Divider + Tag */}
                    <div className="mt-5 pt-5 border-t border-[#eeeeee]">
                      <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#3713ec] italic">
                        {s.tag}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#0f172a]/65">
                        {s.tagDesc}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-black/60">
                        Learn more
                      </span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#eeeeee] bg-white text-black transition-all group-hover:border-[#3713ec]/30 group-hover:bg-[#3713ec] group-hover:text-white">
                        →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* See more */}
            {visible < allServices.length && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={handleSeeMore}
                  className="rounded-2xl border border-[#eeeeee] bg-white px-8 py-4 text-sm font-bold text-black transition hover:bg-[#f8f9fa]"
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
          className="py-28 bg-[#080130] text-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
            <span className="text-[#775dfa] font-bold text-xs uppercase tracking-widest mb-4 block">
              The Process
            </span>
            <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold italic mb-6">
              The SEO + Ads Growth Workflow
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto">
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
                className="flex-shrink-0 w-[350px] p-10 bg-white/5 rounded-[2.5rem] border border-white/10"
              >
                <span className="text-4xl font-[var(--font-playfair)] italic text-[#3713ec] mb-6 block">
                  {step.no}
                </span>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST / CASE STUDY TEASER */}
        <section id="case-studies" className="py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0f172a]/35 mb-6">
                Trusted by growth-focused brands
              </p>
              <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
                <div className="text-2xl font-black italic">AURORA</div>
                <div className="text-2xl font-black italic">NEBULA</div>
                <div className="text-2xl font-black italic">SYNTIX</div>
                <div className="text-2xl font-black italic">QUANTUM</div>
                <div className="text-2xl font-black italic">AXON</div>
              </div>
            </div>

            <div className=" items-center">
              {/* <div className="space-y-8">
                <div className="bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                  <span className="absolute top-4 right-8 text-[#3713ec]/10 text-7xl">
                    ❝
                  </span>
                  <p className="text-xl font-[var(--font-playfair)] italic text-black relative z-10 mb-8 leading-relaxed">
                    “SixthGenX improved our website speed, SEO rankings, and
                    lead pipeline within weeks — the strategy and execution were
                    elite.”
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-[#eeeeee]" />
                    <div>
                      <p className="font-bold text-sm text-black">
                        Client Review
                      </p>
                      <p className="text-xs text-[#0f172a]/60">
                        Website + SEO + Ads Growth
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              <Testimonial></Testimonial>

              {/* <div className="px-10">
                <h2 className="text-4xl font-[var(--font-playfair)] font-bold italic mb-6 text-black">
                  Built on Trust.
                </h2>
                <p className="text-[#0f172a]/60 leading-relaxed mb-8">
                  We build premium digital systems: fast websites, search
                  visibility, conversion funnels, and paid media scaling.
                </p>
                <a
                  className="inline-flex items-center gap-2 font-bold text-[#3713ec] hover:gap-4 transition-all"
                  href="#contact"
                >
                  Explore Case Studies <span>→</span>
                </a>
              </div> */}
            </div>
          </div>
        </section>

        {/* CONTACT / CONSULTATION (FORM) */}
        <ContactSection></ContactSection>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-[#eeeeee] pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-5 space-y-8">
              <div className="flex items-center gap-3">
                <div className="size-10 flex items-center justify-center bg-black text-white rounded-xl">
                  <span className="text-xl">↗</span>
                </div>
                <span className="text-2xl font-black italic font-[var(--font-playfair)] text-black">
                  SixthGenX
                </span>
              </div>

              <p className="text-[#0f172a]/60 max-w-sm leading-relaxed">
                SixthGenX is a full-service digital agency offering website
                design & development, SEO services, performance marketing,
                Google & Meta Ads, graphic design, and 2D/3D animation.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div>
                <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-black">
                  Services
                </h4>
                <ul className="space-y-4 text-sm text-[#0f172a]/60 font-medium">
                  <li>
                    <a
                      className="hover:text-[#3713ec] transition-colors"
                      href="#services"
                    >
                      Website Design & Development
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#3713ec] transition-colors"
                      href="#services"
                    >
                      SEO Services
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#3713ec] transition-colors"
                      href="#services"
                    >
                      Performance Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#3713ec] transition-colors"
                      href="#services"
                    >
                      Google & Meta Ads
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-black">
                  Agency
                </h4>
                <ul className="space-y-4 text-sm text-[#0f172a]/60 font-medium">
                  <li>
                    <a
                      className="hover:text-[#3713ec] transition-colors"
                      href="#philosophy"
                    >
                      Philosophy
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#3713ec] transition-colors"
                      href="#process"
                    >
                      Workflow
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#3713ec] transition-colors"
                      href="#case-studies"
                    >
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#3713ec] transition-colors"
                      href="#contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-black">
                  Connect
                </h4>
                <div className="flex gap-4 mb-6">
                  <a
                    className="size-10 rounded-full border border-[#eeeeee] flex items-center justify-center hover:bg-black hover:text-white transition-all"
                    href="#"
                    aria-label="Website"
                    rel="nofollow"
                  >
                    🌐
                  </a>
                  <a
                    className="size-10 rounded-full border border-[#eeeeee] flex items-center justify-center hover:bg-black hover:text-white transition-all"
                    href="#"
                    aria-label="Email"
                    rel="nofollow"
                  >
                    ✉
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#f8f9fa] flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#0f172a]/40 font-bold uppercase tracking-widest">
            <p>
              © {new Date().getFullYear()} SixthGenX Tech. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a className="hover:text-[#3713ec]" href="#" rel="nofollow">
                Privacy Policy
              </a>
              <a className="hover:text-[#3713ec]" href="#" rel="nofollow">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <button className="size-16 bg-black text-white rounded-3xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-black to-[#3713ec] opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10 text-2xl">◎</span>
        </button>
      </div>
    </div>
  );
}
