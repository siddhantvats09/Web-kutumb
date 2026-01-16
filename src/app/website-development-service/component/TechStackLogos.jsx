// components/sections/TechStackLogos.jsx
"use client";

export default function TechStackLogos() {
  const categories = [
    {
      title: "Code-Based Development",
      subtitle: "Fast, scalable & SEO-ready builds",
      items: [
        { name: "Next.js", icon: <LogoNext /> },
        { name: "React", icon: <LogoReact /> },
        { name: "TypeScript", icon: <LogoTS /> },
        { name: "Node.js", icon: <LogoNode /> },
        { name: "APIs", icon: <LogoAPI /> },
      ],
    },
    {
      title: "CMS Websites",
      subtitle: "Easy management, powerful output",
      items: [
        { name: "WordPress", icon: <LogoWP /> },
        { name: "Webflow", icon: <LogoWebflow /> },
        { name: "Headless CMS", icon: <LogoCMS /> },
        { name: "Admin Panel", icon: <LogoAdmin /> },
      ],
    },
    {
      title: "eCommerce Development",
      subtitle: "High-converting online stores",
      items: [
        { name: "Shopify", icon: <LogoShopify /> },
        { name: "WooCommerce", icon: <LogoWoo /> },
        { name: "Stripe", icon: <LogoStripe /> },
        { name: "Payments", icon: <LogoCard /> },
      ],
    },
    {
      title: "Tracking & Performance",
      subtitle: "Data-driven growth systems",
      items: [
        { name: "GA4", icon: <LogoGA /> },
        { name: "GTM", icon: <LogoGTM /> },
        { name: "Meta Pixel", icon: <LogoMeta /> },
        { name: "CWV", icon: <LogoSpeed /> },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-[#0f075f] bg-[#6a4cff] md:bg-[#4931c3]">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(55,19,236,0.35),transparent_60%)]" />
        <div className="absolute -bottom-60 right-[-10%] h-[520px] w-[520px] rounded-full blur-3xl opacity-25 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_65%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-white/100">
            Platforms & Technologies We Build With
          </p>

          <h2 className="my-6 md:my-4 text-2xl sm:text-3xl md:text-5xl font-[var(--font-playfair)] font-bold text-white leading-[1.05]">
            Built On Reliable, Modern Stacks
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-white/100 leading-relaxed">
            We build websites using the right platform — Next.js code builds,
            WordPress CMS, Shopify/WooCommerce stores — with tracking + performance.
          </p>
        </div>

        {/* Responsive grid */}
        <div className="mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <TechCard
              key={cat.title}
              title={cat.title}
              subtitle={cat.subtitle}
              items={cat.items}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-white/100">
          Engineered for Speed • SEO • Tracking • Conversion
        </p>
      </div>
    </section>
  );
}

/* -------------------- Card -------------------- */

function TechCard({ title, subtitle, items }) {
  return (
    <div className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 shadow-[0_18px_45px_rgba(0,0,0,0.40)] transition-all duration-500 hover:-translate-y-1 hover:bg-white/10">
      {/* glow */}
      <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl bg-[#3713ec]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <h3 className="relative text-base sm:text-lg font-bold text-white">
        {title}
      </h3>
      <p className="relative mt-1 text-xs sm:text-sm text-white/90 leading-relaxed">
        {subtitle}
      </p>

      {/* Compact tech pills */}
      <div className="relative mt-4 flex flex-wrap gap-2">
        {items.map((it) => (
          <div
            key={it.name}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2 hover:border-[#3713ec]/35 transition-all"
          >
            <span className="h-4 w-4 text-white/90">{it.icon}</span>
            <span className="text-[11px] sm:text-xs font-bold text-white/80 whitespace-nowrap">
              {it.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------- Icon wrapper -------------------- */

function IconWrap({ children }) {
  return <span className="inline-flex h-full w-full items-center justify-center">{children}</span>;
}

/* -------------------- Logos -------------------- */

function LogoNext() {
  return (
    <IconWrap>
      <svg viewBox="0 0 128 128" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0Zm26.7 97.4-9.8 5.7-36.5-63v44.6h-12V24.9l9.8 5.7 36.5 63V49.1h12v48.3Z"
        />
      </svg>
    </IconWrap>
  );
}

function LogoReact() {
  return (
    <IconWrap>
      <svg viewBox="0 0 128 128" className="h-4 w-4">
        <g fill="none" stroke="currentColor" strokeWidth="8">
          <ellipse cx="64" cy="64" rx="50" ry="20" />
          <ellipse cx="64" cy="64" rx="20" ry="50" transform="rotate(60 64 64)" />
          <ellipse cx="64" cy="64" rx="20" ry="50" transform="rotate(120 64 64)" />
        </g>
        <circle cx="64" cy="64" r="8" fill="currentColor" />
      </svg>
    </IconWrap>
  );
}

function LogoTS() {
  return (
    <IconWrap>
      <svg viewBox="0 0 128 128" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M22 22h84v84H22V22Zm18 20v12h18v52h14V54h18V42H40Zm56 22c0-10-8-18-20-18h-10v14h10c4 0 6 2 6 5 0 4-3 5-8 7-10 3-18 8-18 20 0 12 9 20 22 20 12 0 20-6 20-16h-14c0 3-2 5-6 5-4 0-7-2-7-6 0-5 4-6 10-8 9-3 17-8 17-19Z"
        />
      </svg>
    </IconWrap>
  );
}

function LogoNode() {
  return (
    <IconWrap>
      <svg viewBox="0 0 128 128" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M64 8 20 32v64l44 24 44-24V32L64 8Zm0 14 32 18v40L64 98 32 80V40l32-18Z"
        />
      </svg>
    </IconWrap>
  );
}

function LogoWP() {
  return (
    <IconWrap>
      <svg viewBox="0 0 128 128" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M64 10C34.2 10 10 34.2 10 64s24.2 54 54 54 54-24.2 54-54S93.8 10 64 10Zm0 10c24.3 0 44 19.7 44 44s-19.7 44-44 44-44-19.7-44-44 19.7-44 44-44Z"
        />
      </svg>
    </IconWrap>
  );
}

function LogoWebflow() {
  return (
    <IconWrap>
      <svg viewBox="0 0 128 128" className="h-4 w-4">
        <path fill="currentColor" d="M20 34h20l12 32 12-32h18L60 94H44L20 34Z" />
      </svg>
    </IconWrap>
  );
}

function LogoCMS() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path fill="currentColor" d="M4 5h16v14H4V5Zm2 2v10h12V7H6Z" />
      </svg>
    </IconWrap>
  );
}

function LogoAdmin() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path fill="currentColor" d="M4 4h16v4H4V4Zm0 6h16v10H4V10Z" />
      </svg>
    </IconWrap>
  );
}

function LogoShopify() {
  return (
    <IconWrap>
      <svg viewBox="0 0 128 128" className="h-4 w-4">
        <path fill="currentColor" d="M42 28c4-8 10-14 18-14 9 0 13 6 15 10 6 1 12 3 17 6l-8 82H36L24 34c6-3 12-5 18-6Z" />
      </svg>
    </IconWrap>
  );
}

function LogoWoo() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path fill="currentColor" d="M4 7c0-2 2-3 4-3h8c2 0 4 1 4 3v10c0 2-2 3-4 3H8c-2 0-4-1-4-3V7Z" />
      </svg>
    </IconWrap>
  );
}

function LogoStripe() {
  return (
    <IconWrap>
      <svg viewBox="0 0 128 128" className="h-4 w-4">
        <path fill="currentColor" d="M72 52c0-4-4-6-10-6-6 0-14 2-20 5V36c6-3 14-5 24-5 16 0 26 7 26 19 0 22-30 18-30 28 0 3 3 5 8 5 8 0 15-2 22-6v15c-6 3-14 5-24 5-16 0-26-7-26-19 0-23 30-19 30-28Z" />
      </svg>
    </IconWrap>
  );
}

function LogoGA() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path fill="currentColor" d="M4 20V10h4v10H4Zm6 0V4h4v16h-4Zm6 0v-7h4v7h-4Z" />
      </svg>
    </IconWrap>
  );
}

function LogoGTM() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path fill="currentColor" d="M5 5h6v6H5V5Zm8 0h6v6h-6V5ZM5 13h6v6H5v-6Zm8 0h6v6h-6v-6Z" />
      </svg>
    </IconWrap>
  );
}

function LogoMeta() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path fill="currentColor" d="M5 18c1.5-6 4-12 7-12s5.5 6 7 12h-2c-1-4-3-10-5-10s-4 6-5 10H5Z" />
      </svg>
    </IconWrap>
  );
}

function LogoSpeed() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path fill="currentColor" d="M12 4a10 10 0 0 0-10 10h2a8 8 0 1 1 16 0h2A10 10 0 0 0 12 4Z" />
      </svg>
    </IconWrap>
  );
}

function LogoAPI() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path fill="currentColor" d="M4 7h16v2H4V7Zm0 8h16v2H4v-2Zm2-5h12v4H6v-4Z" />
      </svg>
    </IconWrap>
  );
}

function LogoCard() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path fill="currentColor" d="M3 6h18v12H3V6Zm2 2v2h14V8H5Zm0 5h7v3H5v-3Z" />
      </svg>
    </IconWrap>
  );
}
