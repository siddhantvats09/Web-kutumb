"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar2() {
  const [openServices, setOpenServices] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const panelRef = useRef(null);

  // close dropdown when clicking outside (desktop services)
  useEffect(() => {
    const handler = (e) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target)) {
        setOpenServices(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ✅ LOCK BODY SCROLL when mobile menu open
  useEffect(() => {
    if (openMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMobile]);

  // ✅ close mobile menu when route changes / clicking links
  const closeMobile = () => setOpenMobile(false);

  const services = [
    {
      heading: "Website",
      items: [
        {
          title: "Website Design",
          desc: "Premium UI/UX with conversion-first structure.",
          href: "/services/website-design",
        },
        {
          title: "Website Development",
          desc: "High-performance Next.js / custom builds.",
          href: "/website-development-service",
        },
        {
          title: "Landing Pages",
          desc: "Funnels built to increase leads & sales.",
          href: "/services/landing-pages",
        },
        {
          title: "eCommerce Stores",
          desc: "Shopify / WooCommerce conversion builds.",
          href: "/services/ecommerce",
        },
      ],
    },
    {
      heading: "SEO & Growth",
      items: [
        {
          title: "SEO Services",
          desc: "Technical, On-page, Local SEO & content clusters.",
          href: "/services/seo",
        },
        {
          title: "SEO Audit",
          desc: "Fix indexing, CWV, schema, and content hierarchy.",
          href: "/services/seo-audit",
        },
        {
          title: "Local SEO",
          desc: "Maps ranking + location pages + citations setup.",
          href: "/services/local-seo",
        },
      ],
    },
    {
      heading: "Marketing",
      items: [
        {
          title: "Google Ads",
          desc: "High-intent leads with tracking & optimization.",
          href: "/services/google-ads",
        },
        {
          title: "Meta Ads",
          desc: "Creative + funnel + retargeting for growth.",
          href: "/services/meta-ads",
        },
        {
          title: "Performance Marketing",
          desc: "Full-funnel ROI-first strategy + execution.",
          href: "/services/performance-marketing",
        },
      ],
    },
    {
      heading: "Creative",
      items: [
        {
          title: "Branding & Logo",
          desc: "Identity system built for trust + recall.",
          href: "/services/branding",
        },
        {
          title: "Graphic Design",
          desc: "Social creatives + product designs + campaign kits.",
          href: "/services/graphic-design",
        },
        {
          title: "2D / 3D Animation",
          desc: "Premium motion content for ads & storytelling.",
          href: "/services/animation",
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-[200] border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 select-none">
         

          <div className="leading-tight">
            <Link href="/hero2">
              <p className="text-base font-black tracking-tight text-white">
                SixthGenX
              </p>
            </Link>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/45">
              Web • SEO • Growth
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a
            className="text-sm font-bold text-white/80 hover:text-white transition"
            href="#work"
          >
            Work
          </a>

          <a
            className="text-sm font-bold text-white/80 hover:text-white transition"
            href="#process"
          >
            Process
          </a>

          {/* Services dropdown */}
          <div className="relative" ref={panelRef}>
            <button
              onClick={() => setOpenServices((s) => !s)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black transition ${
                openServices
                  ? "bg-[#c8a95f]/15 border border-[#c8a95f]/35 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              Services
              <span
                className={`transition-transform duration-300 ${
                  openServices ? "rotate-180" : "rotate-0"
                }`}
              >
                ▾
              </span>
            </button>

            {/* Folder Mega Menu */}
            {openServices && (
              <div className="absolute left-1/2 top-[58px] w-[920px] -translate-x-1/2">
                <div className="relative rounded-[28px] border border-white/10 bg-[#0b0b0b] shadow-[0_24px_90px_rgba(0,0,0,0.75)] overflow-hidden">
                  <div className="flex items-center justify-between px-7 py-4 border-b border-white/10 bg-white/5">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#c8a95f]" />
                      <p className="text-xs font-black uppercase tracking-[0.28em] text-white/55">
                        Service Suite
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full bg-[#c8a95f] px-4 py-2 text-xs font-black text-black shadow-[0_0_18px_rgba(200,169,95,0.22)] hover:opacity-95 transition"
                    >
                      Book Consultation →
                    </a>
                  </div>

                  <div className="grid grid-cols-4 gap-0">
                    {services.map((col) => (
                      <div
                        key={col.heading}
                        className="p-6 border-r border-white/10 last:border-r-0"
                      >
                        <h4 className="text-[12px] font-black uppercase tracking-[0.28em] text-white/55">
                          {col.heading}
                        </h4>

                        <div className="mt-5 space-y-2">
                          {col.items.map((it) => (
                            <Link
                              href={it.href}
                              key={it.title}
                              className="group block rounded-2xl border border-transparent p-3 hover:border-[#c8a95f]/25 hover:bg-[#c8a95f]/[0.06] transition"
                            >
                              <p className="text-sm font-black text-white group-hover:text-[#c8a95f] transition">
                                {it.title}
                              </p>
                              <p className="mt-1 text-xs leading-relaxed text-white/55">
                                {it.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#c8a95f]/60 to-transparent" />
                </div>

                <div className="mx-auto mt-2 h-3 w-3 rotate-45 border-l border-t border-white/10 bg-[#0b0b0b]" />
              </div>
            )}
          </div>

          <a
            className="text-sm font-bold text-white/80 hover:text-white transition"
            href="#testimonials"
          >
            Reviews
          </a>

          <a
            className="text-sm font-bold text-white/80 hover:text-white transition"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-[#c8a95f] px-6 py-2.5 text-sm font-black text-black shadow-[0_0_18px_rgba(200,169,95,0.22)] hover:opacity-95 transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpenMobile((s) => !s)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-white"
          aria-label="Open menu"
        >
          {openMobile ? "✕" : "☰"}
        </button>
      </div>

      {/* ✅ MOBILE MENU = FIXED + SCROLLABLE */}
      {openMobile && (
        <div className="lg:hidden fixed inset-0 z-[250]">
          {/* overlay */}
          <div className="absolute inset-0 bg-black/70" onClick={closeMobile} />

          {/* drawer */}
          <div className="absolute right-0 top-0 h-[100dvh] w-full max-w-[420px] bg-[#0b0b0b] shadow-[0_40px_120px_rgba(0,0,0,0.75)] border-l border-white/10 flex flex-col">
            {/* header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
              <p className="text-sm font-black tracking-tight text-white">
                Navigation
              </p>
              <button
                onClick={closeMobile}
                className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-white"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* ✅ scrollable content */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-5 space-y-3">
              <a
                onClick={closeMobile}
                className="block rounded-2xl px-4 py-3 font-black text-white hover:bg-white/5"
                href="#work"
              >
                Work
              </a>

              <a
                onClick={closeMobile}
                className="block rounded-2xl px-4 py-3 font-black text-white hover:bg-white/5"
                href="#process"
              >
                Process
              </a>

              <details className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                <summary className="cursor-pointer list-none px-4 py-3 font-black text-white flex items-center justify-between">
                  Services <span className="text-white/60">▾</span>
                </summary>

                <div className="px-4 pb-4 pt-2 space-y-4">
                  {services.map((group) => (
                    <div key={group.heading}>
                      <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#c8a95f]/80">
                        {group.heading}
                      </p>

                      <div className="mt-2 space-y-2">
                        {group.items.map((it) => (
                          <Link
                            key={it.title}
                            href={it.href}
                            onClick={closeMobile}
                            className="block rounded-2xl bg-[#0a0a0a] border border-white/10 px-4 py-3 hover:border-[#c8a95f]/35 transition"
                          >
                            <p className="font-black text-sm text-white">
                              {it.title}
                            </p>
                            <p className="mt-1 text-xs text-white/55">
                              {it.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </details>

              <a
                onClick={closeMobile}
                className="block rounded-2xl px-4 py-3 font-black text-white hover:bg-white/5"
                href="#testimonials"
              >
                Reviews
              </a>

              <a
                onClick={closeMobile}
                className="block rounded-2xl px-4 py-3 font-black text-white hover:bg-white/5"
                href="#contact"
              >
                Contact
              </a>

              {/* CTA */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  onClick={closeMobile}
                  href="#contact"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-black text-white hover:bg-white/10 transition"
                >
                  Portal
                </a>
                <a
                  onClick={closeMobile}
                  href="#contact"
                  className="rounded-2xl bg-[#c8a95f] px-4 py-3 text-center text-sm font-black text-black shadow-[0_0_18px_rgba(200,169,95,0.22)] hover:opacity-95 transition"
                >
                  Get Started
                </a>
              </div>

              <div className="h-10" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
