// components/navbar/Navbar.jsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar2() {
  const [openServices, setOpenServices] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const panelRef = useRef(null);

  // close menu when clicking outside
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

  const services = [
    {
      heading: "Website",
      items: [
        { title: "Website Design", desc: "Premium UI/UX with conversion-first structure." },
        { title: "Website Development", desc: "website-development-service" },
        { title: "Landing Pages", desc: "Funnels built to increase leads & sales." },
        { title: "eCommerce Stores", desc: "Shopify / WooCommerce conversion builds." },
      ],
    },
    {
      heading: "SEO & Growth",
      items: [
        { title: "SEO Services", desc: "Technical, On-page, Local SEO & content clusters." },
        { title: "SEO Audit", desc: "Fix indexing, CWV, schema, and content hierarchy." },
        { title: "Local SEO", desc: "Maps ranking + location pages + citations setup." },
      ],
    },
    {
      heading: "Marketing",
      items: [
        { title: "Google Ads", desc: "High-intent leads with tracking & optimization." },
        { title: "Meta Ads", desc: "Creative + funnel + retargeting for growth." },
        { title: "Performance Marketing", desc: "Full-funnel ROI-first strategy + execution." },
      ],
    },
    {
      heading: "Creative",
      items: [
        { title: "Branding & Logo", desc: "Identity system built for trust + recall." },
        { title: "Graphic Design", desc: "Social creatives + product designs + campaign kits." },
        { title: "2D / 3D Animation", desc: "Premium motion content for ads & storytelling." },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-[200] border-b border-[#eeeeee] bg-white backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 select-none">
          <div className="h-10 w-10 rounded-2xl bg-black text-white flex items-center justify-center shadow-[0_14px_35px_rgba(0,0,0,0.18)]">
            <span className="text-sm font-black">6X</span>
          </div>
          <div className="leading-tight">
            <p className="text-base font-black tracking-tight text-black">SixthGenX</p>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-black/45">
              Web • SEO • Growth
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a className="text-sm font-bold text-black/70 hover:text-black transition" href="#work">
            Work
          </a>

          <a className="text-sm font-bold text-black/70 hover:text-black transition" href="#process">
            Process
          </a>

          {/* Services dropdown */}
          <div className="relative" ref={panelRef}>
            <button
              onClick={() => setOpenServices((s) => !s)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black transition ${
                openServices
                  ? "bg-[#3713ec]/10 text-[#3713ec]"
                  : "text-black/70 hover:text-black hover:bg-black/5"
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
                {/* folder outer */}
                <div className="relative rounded-[28px] border border-[#eeeeee] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.14)] overflow-hidden">
                  {/* top folder strip */}
                  <div className="flex items-center justify-between px-7 py-4 border-b border-[#eeeeee] bg-[#fafafa]">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#3713ec]" />
                      <p className="text-xs font-black uppercase tracking-[0.28em] text-black/55">
                        Service Suite
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-xs font-black text-white shadow-lg hover:opacity-95 transition"
                    >
                      Book Consultation →
                    </a>
                  </div>

                  {/* mega menu grid */}
                  <div className="grid grid-cols-4 gap-0">
                    {services.map((col) => (
                      <div
                        key={col.heading}
                        className="p-6 border-r border-[#eeeeee] last:border-r-0"
                      >
                        <h4 className="text-[12px] font-black uppercase tracking-[0.28em] text-black/55">
                          {col.heading}
                        </h4>

                        <div className="mt-5 space-y-2">
                          {col.items.map((it) => (
                            <Link
                              href={it.desc}
                              key={it.title}
                              className="group block rounded-2xl border border-transparent p-3 hover:border-[#3713ec]/25 hover:bg-[#3713ec]/[0.05] transition"
                            >
                              <p className="text-sm font-black text-black group-hover:text-[#3713ec] transition">
                                {it.title}
                              </p>
                              <p className="mt-1 text-xs leading-relaxed text-black/55">
                                {it.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* bottom highlight line */}
                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#3713ec]/60 to-transparent" />
                </div>

                {/* little pointer */}
                <div className="mx-auto mt-2 h-3 w-3 rotate-45 border-l border-t border-[#eeeeee] bg-white" />
              </div>
            )}
          </div>

          <a className="text-sm font-bold text-black/70 hover:text-black transition" href="#testimonials">
            Reviews
          </a>

          <a className="text-sm font-bold text-black/70 hover:text-black transition" href="#contact">
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {/* <a
            href="#contact"
            className="rounded-full border border-[#eeeeee] bg-white px-5 py-2.5 text-sm font-black text-black hover:bg-[#f8f9fa] transition"
          >
            Client Portal
          </a> */}
          <a
            href="#contact"
            className="rounded-full bg-[#3713ec] px-6 py-2.5 text-sm font-black text-white shadow-[0_16px_40px_rgba(55,19,236,0.24)] hover:opacity-95 transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpenMobile((s) => !s)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#eeeeee] bg-white hover:bg-[#f8f9fa] transition"
          aria-label="Open menu"
        >
          {openMobile ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {openMobile && (
        <div className="lg:hidden border-t border-[#eeeeee] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-5 space-y-3">
            <a className="block rounded-2xl px-4 py-3 font-black text-black hover:bg-[#f8f9fa]" href="#work">
              Work
            </a>

            <a className="block rounded-2xl px-4 py-3 font-black text-black hover:bg-[#f8f9fa]" href="#process">
              Process
            </a>

            <details className="rounded-2xl border border-[#eeeeee] bg-[#f8f9fa] overflow-hidden">
              <summary className="cursor-pointer list-none px-4 py-3 font-black text-black flex items-center justify-between">
                Services
                <span className="text-black/60">▾</span>
              </summary>

              <div className="px-4 pb-4 pt-2 space-y-4">
                {services.map((group) => (
                  <div key={group.heading}>
                    <p className="text-[11px] font-black uppercase tracking-[0.28em] text-black/50">
                      {group.heading}
                    </p>
                    <div className="mt-2 space-y-2">
                      {group.items.map((it) => (
                        <a
                          key={it.title}
                          href="#services"
                          className="block rounded-2xl bg-white border border-[#eeeeee] px-4 py-3 hover:border-[#3713ec]/30 transition"
                        >
                          <p className="font-black text-sm text-black">{it.title}</p>
                          <p className="mt-1 text-xs text-black/55">{it.desc}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </details>

            <a className="block rounded-2xl px-4 py-3 font-black text-black hover:bg-[#f8f9fa]" href="#testimonials">
              Reviews
            </a>

            <a className="block rounded-2xl px-4 py-3 font-black text-black hover:bg-[#f8f9fa]" href="#contact">
              Contact
            </a>

            <div className="pt-2 grid grid-cols-2 gap-3">
              <a
                href="#contact"
                className="rounded-2xl border border-[#eeeeee] bg-white px-4 py-3 text-center text-sm font-black text-black hover:bg-[#f8f9fa] transition"
              >
                Portal
              </a>
              <a
                href="#contact"
                className="rounded-2xl bg-[#3713ec] px-4 py-3 text-center text-sm font-black text-white shadow-[0_16px_40px_rgba(55,19,236,0.24)] hover:opacity-95 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
