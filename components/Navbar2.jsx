"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar2() {
  const [openServices, setOpenServices] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

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

  const closeMobile = () => setOpenMobile(false);

  const services = [
    {
      heading: "Website",
      items: [
        { title: "Website Design", desc: "Premium UI/UX with conversion-first structure.", href: "/website-development-service" },
        { title: "Website Development", desc: "High-performance Next.js / custom builds.", href: "/website-development-service" },
        { title: "Landing Pages", desc: "Funnels built to increase leads & sales.", href: "/services/landing-pages" },
      ],
    },
    {
      heading: "SEO & Growth",
      items: [
        { title: "SEO Services", desc: "Technical, On-page, Local SEO & content clusters.", href: "/search-engion-optimization-seo-service" },
      ],
    },
    {
      heading: "Marketing",
      items: [
        { title: "Google & Meta Ads", desc: "High-intent leads with tracking & optimization.", href: "/google-meta-ads-service" },
        { title: "Performance Marketing", desc: "ROI-first strategy + execution.", href: "performance-marketing-googel-meta-ads" },
      ],
    },
    {
      heading: "Creative",
      items: [
        { title: "Branding & Logo", desc: "Identity system built for trust.", href: "/graphic-logo-design-service" },
        { title: "2D / 3D Animation", desc: "Premium motion content for storytelling.", href: "/animation-2d-3d-service-page" },
      ],
    },
  ];

  return (
    // Outer container provides the spacing for the "floating" effect
    <header className="fixed top-4 left-0 right-0 z-[200] px-4">
      <div 
        className="mx-auto max-w-7xl rounded-full border border-white/10 bg-[#7171715a] backdrop-blur-xl shadow-2xl transition-all duration-300"
      >
        <div className="flex items-center justify-between gap-4 px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos2.png"
              alt="Logo"
              width={120}
              height={35}
              className="hover:scale-105 transition-transform duration-300 sepia"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link className="text-xs font-bold uppercase tracking-wider text-white/70 hover:text-[#c8a95f] transition" href="/">
              Home
            </Link>
            <Link className="text-xs font-bold uppercase tracking-wider text-white/70 hover:text-[#c8a95f] transition" href="/proof">
              Work
            </Link>

            {/* Services Dropdown with Hover */}
            <div 
              className="relative py-2" 
              onMouseEnter={() => setOpenServices(true)}
              onMouseLeave={() => setOpenServices(false)}
            >
              <button
                className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition ${
                  openServices ? "text-[#c8a95f]" : "text-white/70 hover:text-white"
                }`}
              >
                Services
                <span className={`transition-transform duration-300 ${openServices ? "rotate-180" : ""}`}>▾</span>
              </button>

              {/* Mega Menu */}
              {openServices && (
                <div className="absolute left-1/2 top-full w-[850px] -translate-x-1/2 pt-4 transition-all">
                  <div className="rounded-[32px] border border-white/10 bg-[#0b0b0b] shadow-2xl overflow-hidden">
                    <div className="flex items-center justify-between px-8 py-4 border-b border-white/5 bg-white/5">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c8a95f] animate-pulse" />
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Our Expertise</p>
                      </div>
                      <Link href="/contactus" className="text-[10px] font-bold uppercase text-[#c8a95f] hover:underline">
                        Book a Strategy Call →
                      </Link>
                    </div>

                    <div className="grid grid-cols-4 divide-x divide-white/5">
                      {services.map((col) => (
                        <div key={col.heading} className="p-6">
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-[#c8a95f] mb-4">
                            {col.heading}
                          </h4>
                          <div className="space-y-1">
                            {col.items.map((it) => (
                              <Link
                                href={it.href}
                                key={it.title}
                                className="group block rounded-xl p-3 hover:bg-white/5 transition"
                              >
                                <p className="text-sm font-bold text-white group-hover:text-[#c8a95f] transition">
                                  {it.title}
                                </p>
                                <p className="mt-1 text-[11px] leading-snug text-white/40 group-hover:text-white/60">
                                  {it.desc}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link className="text-xs font-bold uppercase tracking-wider text-white/70 hover:text-[#c8a95f] transition" href="/about-us">
              About
            </Link>
            <Link className="text-xs font-bold uppercase tracking-wider text-white/70 hover:text-[#c8a95f] transition" href="#contact">
              Contact
            </Link>
          </nav>

          {/* Action Button */}
          <div className="hidden lg:block">
            <Link
              href="/contactus"
              className="rounded-full bg-[#c8a95f] px-6 py-2 text-xs font-black uppercase tracking-widest text-black hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#c8a95f]/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpenMobile((s) => !s)}
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-white border border-white/10"
          >
            {openMobile ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {openMobile && (
        <div className="lg:hidden fixed inset-0 z-[250]">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeMobile} />
          <div className="absolute right-4 top-4 bottom-4 w-full max-w-[320px] bg-[#0b0b0b] rounded-[32px] border border-white/10 flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
              <span className="text-xs font-black uppercase tracking-widest text-white/40">Menu</span>
              <button onClick={closeMobile} className="text-white text-xl">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <Link onClick={closeMobile} href="/" className="block text-xl font-bold text-white">Home</Link>
              <Link onClick={closeMobile} href="/proof" className="block text-xl font-bold text-white">Work</Link>
              <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#c8a95f] mb-4">Services</p>
                {services.map(group => (
                  <div key={group.heading} className="mb-4">
                    {group.items.map(it => (
                      <Link key={it.title} href={it.href} onClick={closeMobile} className="block py-2 text-sm text-white/60 hover:text-white">
                        {it.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}