// app/website-development/page.jsx
"use client";

import { motion } from "framer-motion";
import DevProcessTimeline from "./DevProcessTimeline";
import TechStackLogos from "./TechStackLogos";
import WorkGrid from "./WorkGrid";
import ContactSection from "../../../../components/ContactSection";

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
    <main className=" bg-white text-[#0f172a]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* bg video */}
        {/* <div className="absolute inset-0 z-10">
          <video
            className="h-full w-full object-cover opacity-25"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/bg3.webm" type="video/webm" />
            <source src="/videos/bg3.mp4" type="video/mp4" />
          </video>

         </div> */}

        <div className="mx-auto z-11 max-w-7xl px-6 py-8 md:py-18">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="hidden md:block">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#eeeeee] bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#3713ec]">
                  <span className="h-2 w-2 rounded-full bg-[#3713ec] animate-pulse" />
                  Website Development Services
                </div>
              </div>

              {/* SINGLE H1 */}
              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold leading-[1.05] tracking-tight text-black">
                Custom Website Development
                <br />
                <span className="italic font-medium text-[#3713ec]">
                  Built for Performance & SEO.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-[#0f172a]/80">
                We build modern websites that load fast, rank on Google, and
                convert visitors into leads. Our development process includes{" "}
                <strong>technical SEO</strong>, <strong>Core Web Vitals</strong>
                , and a conversion-first UI system.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-black px-7 text-sm font-bold text-white shadow-xl hover:opacity-95 transition"
                >
                  Start Your Website Project →
                </a>

                <a
                  href="#work"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-[#eeeeee] bg-white/70 px-7 text-sm font-bold text-black hover:bg-[#f8f9fa] transition"
                >
                  View Website Work
                </a>
              </div>

              {/* Social proof micro */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-9 w-9 rounded-full border-2 border-white bg-[#eeeeee]"
                    />
                  ))}
                </div>
                <p className="text-sm text-[#0f172a]/60 font-semibold">
                  Trusted by 100+ businesses for development & growth
                </p>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative z-11">
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-[#3713ec]/25 to-black/10 blur opacity-60" />
              <div className="relative overflow-hidden rounded-[28px] border border-[#eeeeee] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.10)]">
                <img
                  src="/samples/web1.jpg"
                  alt="Website development preview"
                  className="h-[360px] w-full object-cover md:h-[440px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-black backdrop-blur">
                  Speed • SEO • Conversion
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STRIP */}

      <TechStackLogos></TechStackLogos>

      {/* CORE SERVICES */}
      <section className="md:py-18 py-12">
        <div className="mx-auto max-w-7xl flex justify-center items-center flex-col px-6">
          <div className="max-w-2xl pb-2  ">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-center  font-[var(--font-playfair)] font-bold text-black">
              Core Website Development Services
            </h2>
            <p className="mt-3 text-lg text-center text-[#0f172a]/65">
              Everything required to build a high-performing website — from UI
              build to SEO integration and launch support.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((s) => (
              <article
                key={s.title}
                className="rounded-[26px] border border-[#eeeeee] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.08)] hover:border-[#3713ec]/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3713ec]/10 text-[#3713ec] font-black">
                  {s.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-black">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0f172a]/65">
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
      <section className="md:py-18 py-14 bg-[#f8f9fa] border-y border-[#eeeeee]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-[var(--font-playfair)] font-bold text-black text-center">
            Client Reviews
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="rounded-[26px] border border-[#eeeeee] bg-white p-8 shadow-sm"
              >
                <div className="flex gap-1 text-[#3713ec] text-sm font-black">
                  ★★★★★
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#0f172a]/70 italic">
                  “{t.quote}”
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#eeeeee]" />
                  <div>
                    <p className="text-sm font-bold text-black">{t.name}</p>
                    <p className="text-xs text-[#0f172a]/60">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20">
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
      </section>
      <ContactSection />
    </main>
  );
}
