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

  const [visible, setVisible] = useState(10);

  const handleSeeMore = () => {
    setVisible((prev) =>
      prev + 5 <= allProjects.length ? prev + 5 : allProjects.length
    );
  };

  const isVideo = (file) => /\.(mp4|webm|ogg)$/i.test(file);

  return (
    <section id="work" className="relative bg-[#0D0634] py-14 md:py-20">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(55,19,236,0.08)_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-white">
              Portfolio
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-[var(--font-playfair)] font-bold text-white">
              Recent Work & Visual Proof
            </h2>

            <p className="mt-4 max-w-2xl text-sm md:text-base text-white leading-relaxed">
              A mix of website builds, branding, creatives, motion and growth
              systems — designed for conversion and built for performance.
            </p>
          </div>

          {/* <a
            href="/work"
            className="hidden md:inline-flex text-sm font-bold text-[#3713ec] hover:underline"
          >
            View All Work →
          </a> */}
        </div>

        {/* GRID */}
        <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-12 auto-rows-[70px] md:auto-rows-[90px]">
  {allProjects.slice(0, visible).map((p, idx) => {
    const span = getSpanClasses(idx);

    return (
      <motion.article
        key={`${p.title}-${idx}`}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: Math.min(idx * 0.04, 0.25),
        }}
        className={[
          "group relative overflow-hidden border-2 border-[#ffffff] rounded-[18px] bg-white shadow-sm",
          "hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)] transition-all duration-500",
          "hover:-translate-y-[2px]",
          span,
        ].join(" ")}
      >
        {/* media */}
        <div className="absolute inset-0 bg-[#f8f9fa]">
          {isVideo(p.media) ? (
            <AutoPlayVideo src={p.media} title={p.title} />
          ) : (
            <img
              src={p.media}
              alt={p.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
          )}

          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.32),transparent_55%)]" />
        </div>

        {/* title */}
        <Link href={p.badge} target="_blank" rel="noopener noreferrer">
          <div className="relative flex h-full flex-col justify-end p-3 md:p-4">
            <div className="w-fit max-w-[88%] rounded-xl border border-white/15 bg-black/45 px-3 py-2 backdrop-blur-md shadow-[0_10px_28px_rgba(0,0,0,0.22)]">
              <h3 className="text-[13px] md:text-[15px] font-bold text-white leading-snug">
                {p.title}
              </h3>

              <p className="text-[9px] md:text-[11px] mt-1 font-medium text-[#29fe4d]">
                Click to View
              </p>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  })}
</div>


        {/* See more */}
        <div className="mt-10 flex flex-col items-center gap-4">
          {visible < allProjects.length && (
            <button
              onClick={handleSeeMore}
              className="inline-flex items-center justify-center rounded-2xl bg-black px-8 py-4 text-sm font-bold text-white shadow-xl hover:opacity-95 transition-all"
            >
              See More Work <span className="ml-2">→</span>
            </button>
          )}

          <a
            href="/work"
            className="md:hidden text-sm font-bold text-[#3713ec] hover:underline"
          >
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
