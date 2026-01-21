// components/sections/WorkGrid.jsx
"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/* ---------------------------------------------
   AutoPlayVideo (Grid Safe + Reliable)
   - Uses basePath -> loads BOTH webm + mp4
   - preload="none" -> grid performance
   - force play on visible + onCanPlay
--------------------------------------------- */
function AutoPlayVideo({ src, title }) {
  const videoRef = useRef(null);

  // convert "/samples/web2.mp4" => "/samples/web2"
  const basePath = src.replace(/\.\w+$/, "");

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // must be muted for autoplay
    v.muted = true;
    v.loop = true;
    v.playsInline = true;

    // force attributes (iOS/Safari)
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");

    const tryPlay = async () => {
      if (!v) return;
      try {
        await v.play();
      } catch (err) {
        // autoplay may be blocked until canPlay or visible
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!v) return;

        if (entry.isIntersecting) {
          // load only when visible
          v.load();
          tryPlay();
        } else {
          v.pause();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(v);

    // initial attempt
    tryPlay();

    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-label={title}
      className="absolute inset-0 h-full w-full object-cover"
      onCanPlay={() => {
        // strongest autoplay trigger
        const v = videoRef.current;
        if (v) v.play().catch(() => {});
      }}
    >
      {/* IMPORTANT: include WEBM + MP4 like your reference */}
      <source src={`${basePath}.webm`} type="video/webm" />
      <source src={`${basePath}.mp4`} type="video/mp4" />
    </video>
  );
}

export default function WorkGrid() {
  const allProjects = useMemo(
    () => [
      {
        media: "/samples/web5.mp4",
        title: "Liko's Website",
        desc: "Brand Identity Refresh",
        badge: "https://liko-next-js.vercel.app/home-2",
      },
      {
        media: "/samples/web3.mp4",
        title: "Shatam Jeeva ",
        desc: "UI System + Product Website",
        badge: "https://shatamjeeva.life/",
      },
      {
        media: "/samples/web21.png",
        title: "Mighti",
        desc: "Landing + CRO + Ads Creative",
        badge: "https://mighti.themewant.com/",
      },
      {
        media: "/samples/web23.png",
        title: "Marketing Agency Site",
        desc: "Brand Identity Refresh",
        badge: "https://pixor.wpocean.site/home-style3/",
      },
      {
        media: "/samples/web16.png",
        title: "PS Public School",
        desc: "Creative Design System",
        badge: "https://www.pspublicschool.com/",
      },
      {
        media: "/samples/web17.png",
        title: "Agenzio",
        desc: "Packaging + Collateral",
        badge: "https://demo.casethemes.net/agenzio/",
      },
      {
        media: "/samples/web6.mp4",
        title: "Attero Website",
        desc: "Next.js Performance Build",
        badge: "https://www.attero.in/",
      },
      {
        media: "/samples/web26.png",
        title: "Bloomings Bulls",
        desc: "Technical + On-Page + Local",
        badge: "https://bloomingbullls.netlify.app/",
      },
      {
        media: "/samples/web13.mp4",
        title: "Agenzio Brand Kit",
        desc: "Typography + Logo Grid",
        badge: "https://demo.casethemes.net/agenzio/",
      },
      {
        media: "/samples/web25.png",
        title: "Sine ",
        desc: "Premium Animation Render",
        badge: "https://www.sineiitb.org/",
      },
      {
        media: "/samples/web19.png",
        title: "LuxBlack Website",
        desc: "Modern Layout + Components",
        badge: "https://luxblackone.com/",
      },
      {
        media: "/samples/web8.mp4",
        title: "Pixor Website",
        desc: "Thumb-stopping Short Ads",
        badge: "https://pixor.wpocean.site/home-style3/",
      },
      {
        media: "/samples/web27.png",
        title: "Articsticx",
        desc: "High-Intent Lead System",
        badge: "https://themexriver.com/wp/artisticx/",
      },
      {
        media: "/samples/web28.png",
        title: "LightBeam AI",
        desc: "UX + Conversion Design",
        badge: "https://www.lightbeam.ai/",
      },
      {
        media: "/samples/web20.png",
        title: "Shatam Jeeva Website",
        desc: "UI System + Product Website",
        badge: "https://shatamjeeva.life/",
      },
    ],
    []
  );

  const [visible, setVisible] = useState(9);

  const handleSeeMore = () => {
    setVisible((prev) =>
      prev + 6 <= allProjects.length ? prev + 6 : allProjects.length
    );
  };

  const isVideo = (file) => /\.(mp4|webm|ogg)$/i.test(file);

  return (
  <section id="work" className="relative  py-14 md:py-20 overflow-hidden">
     <div
            className="absolute inset-0 opacity-100 z-[-1]"
            style={{
              backgroundImage: "url('/images/bgwhy2.jpg')",
              backgroundRepeat: "repeat",
              backgroundSize: "420px",
              backgroundPosition: "top left",
            }}
          />
  {/* soft background */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(200,169,95,0.10)_0%,transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_70%,rgba(255,255,255,0.06)_0%,transparent_55%)]" />
  </div>

  <div className="mx-auto max-w-7xl px-6">
    {/* heading */}
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-white/70">
          Portfolio
        </p>

        <h2 className="mt-4 text-3xl md:text-5xl font-[var(--font-playfair)] font-bold text-white">
          Recent Work & Visual Proof
        </h2>

        <p className="mt-4 max-w-2xl text-sm md:text-base text-white/60 leading-relaxed">
          A mix of website builds, branding, creatives, motion and growth
          systems — designed for conversion and built for performance.
        </p>
      </div>
    </div>

    {/* ✅ NEW PORTFOLIO GRID (Beautiful / gallery-style) */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {allProjects.slice(0, visible).map((p, idx) => (
        <motion.article
          key={`${p.title}-${idx}`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            delay: Math.min(idx * 0.05, 0.25),
          }}
          className={[
            "group relative overflow-hidden rounded-[26px]",
            "border border-white/10 bg-white/5 backdrop-blur-xl",
            "transition-all duration-500 hover:-translate-y-[3px] hover:border-[#c8a95f]/35",
            "shadow-[0_18px_55px_rgba(0,0,0,0.45)] hover:shadow-[0_22px_70px_rgba(0,0,0,0.65)]",
          ].join(" ")}
        >
          {/* media */}
          <div className="relative h-[250px] w-full overflow-hidden bg-black/20">
            {isVideo(p.media) ? (
              <AutoPlayVideo src={p.media} title={p.title} />
            ) : (
              <img
                src={p.media}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                loading="lazy"
              />
            )}

            {/* subtle highlight */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />

            {/* gold glow corner */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl bg-[#c8a95f]/12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* top badge */}
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.24em] text-white backdrop-blur border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8a95f]" />
              Project
            </div>
          </div>

          {/* content */}
          <Link href={p.badge} target="_blank" rel="noopener noreferrer">
            <div className="p-6">
              <h3 className="text-lg font-bold text-white leading-snug">
                {p.title}
              </h3>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
                  Click to View
                </span>

                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all group-hover:border-[#c8a95f]/35 group-hover:bg-[#c8a95f]/15">
                  →
                </span>
              </div>

              {/* micro accent line */}
              <div className="mt-5 h-[2px] w-12 bg-[#c8a95f]/70 rounded-full" />
            </div>
          </Link>
        </motion.article>
      ))}
    </div>

    {/* See more */}
    <div className="mt-10 flex flex-col items-center gap-4">
      {visible < allProjects.length && (
        <button
          onClick={handleSeeMore}
          className="inline-flex items-center justify-center rounded-2xl bg-[#c8a95f] px-8 py-4 text-sm font-bold text-black shadow-xl hover:opacity-95 transition-all"
        >
          See More Work <span className="ml-2">→</span>
        </button>
      )}

      <a href="/work" className="md:hidden text-sm font-bold text-[#c8a95f] hover:underline">
        View All Work →
      </a>
    </div>
  </div>
</section>

  );
}

function getSpanClasses(idx) {
  const i = idx % 5;
  const base = "col-span-1 row-span-3";

  if (i === 0) return `md:col-span-7 md:row-span-5 ${base}`;
  if (i === 1) return `md:col-span-5 md:row-span-3 ${base}`;
  if (i === 2) return `md:col-span-5 md:row-span-2 ${base}`;
  if (i === 3) return `md:col-span-4 md:row-span-2 ${base}`;
  return `md:col-span-8 md:row-span-2 ${base}`;
}
