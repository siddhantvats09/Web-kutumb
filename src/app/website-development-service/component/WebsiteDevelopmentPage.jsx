// app/website-development/page.jsx
"use client";

import { motion } from "framer-motion";
import DevProcessTimeline from "./DevProcessTimeline";
import TechStackLogos from "./TechStackLogos";
import WorkGrid from "./WorkGrid";
import ContactSection from "../../../../components/ContactSection";
import Navbar2 from "../../../../components/Navbar2";
import Hero from "./Hero";

export default function WebsiteDevelopmentPage() {
  const coreServices = [
    {
      title: "Custom Website Development",
      desc: "High-performance websites engineered for speed, lead generation, and long-term scalability.",
      icon: "⌘",
    },
    {
      title: "SEO-Optimized Development",
      desc: "Semantic HTML, metadata structure, schema, internal linking and Core Web Vitals — built to rank.",
      icon: "⚡",
    },
    {
      title: "Secure & Reliable Builds",
      desc: "SSL, best-practice secure coding, performance hardening, and deployment standards.",
      icon: "🛡",
    },
    {
      title: "Conversion-First UX",
      desc: "UX layout built for clarity and action — better CTR, better engagement, better leads.",
      icon: "↗",
    },
  ];

  const devProcess = [
    {
      step: "01",
      title: "Blueprint & Sitemap",
      time: "Week 1",
      desc: "We define goals, user flow, sitemap and required pages. This becomes the growth-ready structure for your website.",
    },
    {
      step: "02",
      title: "UI/UX Design System",
      time: "Week 2",
      desc: "Premium interface design with conversion UX, typography hierarchy, and consistent components.",
    },
    {
      step: "03",
      title: "Development & SEO Build",
      time: "Week 3-5",
      desc: "Next.js development with mobile-first layout, Core Web Vitals, metadata, schema, and content structure.",
    },
    {
      step: "04",
      title: "QA, Launch & Tracking",
      time: "Week 6",
      desc: "Cross-device testing, performance checks, GA4 setup, events, and final deployment to production.",
    },
  ];

  const projects = [
    {
      title: "Business Website Revamp",
      desc: "Modern UI + SEO structure + speed improvements.",
      image: "/images/project-1.jpg",
    },
    {
      title: "Lead Generation Landing Page",
      desc: "Conversion funnel + CTA flow + tracking.",
      image: "/images/project-2.jpg",
    },
  ];

  const testimonials = [
    {
      quote:
        "SixthGenX improved our website speed and lead conversions. The new structure is clean and our Google visibility increased.",
      name: "Business Owner",
      role: "Website Development + SEO",
    },
    {
      quote:
        "They delivered a premium website with fast performance and proper SEO tags. Very professional communication and delivery.",
      name: "Marketing Manager",
      role: "Development + Tracking Setup",
    },
    {
      quote:
        "We needed a scalable build. SixthGenX did the full setup with structured pages, speed optimization and a clean CMS workflow.",
      name: "Startup Founder",
      role: "Custom Web Development",
    },
  ];

  return (
    <main className="   text-[#0f172a]">
      <Navbar2></Navbar2>

      {/* HERO */}
      <Hero></Hero>

      {/* TECH STRIP */}

      <TechStackLogos></TechStackLogos>

      {/* CORE SERVICES */}
      <section className="relative md:py-18 py-12 overflow-hidden">
        {/* ✅ BG Image (repeat) */}
        <div
          className="absolute inset-0 opacity-100 -z-10"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />

        <div className="mx-auto max-w-7xl flex justify-center items-center flex-col px-6">
          <div className="max-w-2xl pb-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-[var(--font-playfair)] font-bold text-white">
              Core Website Development Services
            </h2>

            <p className="mt-3 text-lg text-center text-white/60">
              Everything required to build a high-performing website — from UI
              build to SEO integration and launch support.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((s) => (
              <article
                key={s.title}
                className="rounded-[26px] border border-white/10 bg-white/5 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.08)] hover:border-[#c8a95f]/35"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c8a95f]/15 text-[#c8a95f] font-black">
                  {s.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      {/* <section className="border-y border-[#eeeeee] bg-[#f8f9fa] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-[var(--font-playfair)] font-bold text-black">
              Website Development Process
            </h2>
            <p className="mt-2 text-[#0f172a]/60">
              A transparent workflow designed for speed, quality and predictable delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {devProcess.map((p) => (
              <div
                key={p.step}
                className="rounded-[26px] border border-[#eeeeee] bg-white p-7 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white text-sm font-black">
                      {p.step}
                    </span>
                    <h3 className="text-lg font-bold text-black">{p.title}</h3>
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#3713ec] bg-[#3713ec]/10 px-3 py-1 rounded-full w-fit">
                    {p.time}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#0f172a]/65 max-w-3xl">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <DevProcessTimeline></DevProcessTimeline>

      {/* WORK / PORTFOLIO */}
      {/* <section id="work" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl font-[var(--font-playfair)] font-bold text-black">
              Recent Website Projects
            </h2>

            <a
              href="/work"
              className="hidden md:inline-flex text-sm font-bold text-[#3713ec] hover:underline"
            >
              View All Work →
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-[28px] border border-[#eeeeee] bg-white shadow-md transition hover:shadow-xl"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <a
              className="text-sm font-bold text-[#3713ec] hover:underline"
              href="/work"
            >
              View All Work →
            </a>
          </div>
        </div>
      </section> */}

      <WorkGrid id="work"></WorkGrid>

      {/* REVIEWS */}
      <section className="relative md:py-18 py-14 overflow-hidden">
        {/* subtle bg glow */}

         <div
            className="absolute inset-0 opacity-100 z-[-1]"
            style={{
              backgroundImage: "url('/images/bgwhy2.jpg')",
              backgroundRepeat: "repeat",
              backgroundSize: "420px",
              backgroundPosition: "top left",
            }}
          />
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(200,169,95,0.10)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.06)_0%,transparent_60%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-white text-center">
            Client Reviews
          </h2>

          <p className="mt-3 text-sm md:text-base text-white/60 text-center max-w-2xl mx-auto leading-relaxed">
            Real feedback from businesses we’ve helped with website development,
            SEO and performance growth.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="group relative rounded-[26px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#c8a95f]/35 hover:shadow-[0_22px_70px_rgba(0,0,0,0.65)]"
              >
                {/* subtle glow */}
                <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl bg-[#c8a95f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex gap-1 text-[#c8a95f] text-sm font-black">
                  ★★★★★
                </div>

                <p className="relative mt-4 text-sm leading-relaxed text-white/60 italic">
                  “{t.quote}”
                </p>

                <div className="relative mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 border border-white/10" />
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-white/55">{t.role}</p>
                  </div>
                </div>

                {/* micro accent line */}
                <div className="relative mt-6 h-[2px] w-12 bg-[#c8a95f]/70 rounded-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section id="contact" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[32px] bg-[#3713ec] px-8 py-14 text-center shadow-xl shadow-[#3713ec]/25">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />

            <h2 className="relative z-10 text-3xl md:text-5xl font-[var(--font-playfair)] font-bold text-white">
              Ready to build a website that ranks and converts?
            </h2>

            <p className="relative z-10 mt-4 text-white/90 text-lg max-w-2xl mx-auto">
              Get a website development plan with performance optimization, SEO
              structure, and conversion-first UI. Let’s build something
              powerful.
            </p>

            <div className="relative z-10 mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-sm font-black text-[#3713ec] hover:bg-[#f8f9fa] transition"
              >
                Get Free Quote
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-[#3713ec]/30 px-8 py-4 text-sm font-black text-white hover:bg-[#3713ec]/45 transition"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <ContactSection />
    </main>
  );
}
