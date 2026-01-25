"use client";

import { motion } from "framer-motion";

export default function PerformanceRoadmap() {
  const steps = [
    {
      step: "01",
      title: "Market & Funnel Discovery",
      desc:
        "We analyze your business model, audience intent, competitors, Google Ads data, Meta Ads performance, and funnel drop-offs to identify scalable growth opportunities.",
      quote:
        "“We uncovered profitable audience segments we were completely ignoring.”",
      icon: "🔍",
    },
    {
      step: "02",
      title: "Campaign Strategy & Ad Architecture",
      desc:
        "We design a high-performance paid media strategy — including Google Search Ads, Performance Max, Meta Ads funnels, retargeting layers, bidding frameworks, and creative testing plans.",
      quote:
        "“Their campaign structure improved our ROAS within the first month.”",
      icon: "🧠",
    },
    {
      step: "03",
      title: "Launch, Tracking & Conversion Optimization",
      desc:
        "We deploy campaigns with conversion tracking, GA4, server-side tracking, pixel optimization, landing page CRO, A/B ad testing, and continuous budget reallocation.",
      quote:
        "“CPA dropped significantly after optimization started.”",
      icon: "🚀",
    },
    {
      step: "04",
      title: "Scaling, Retargeting & Profit Optimization",
      desc:
        "Once campaigns stabilize, we scale winning ad sets, expand keywords, build remarketing audiences, improve lifetime value, and maximize ROAS while protecting margins.",
      quote:
        "“Revenue scaled without increasing wasted ad spend.”",
      icon: "📈",
    },
  ];

  return (
    <section className="md:py-20 py-16  text-white relative overflow-hidden">
          <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center relative z-1 md:mb-16 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold"
          >
            The Performance Growth Roadmap
          </motion.h2>

          <p className="mt-4 text-white/90 max-w-2xl mx-auto text-sm md:text-base">
            We don’t just run ads — we engineer scalable performance marketing systems built for 
            <strong> Google Ads</strong>, <strong>Meta Ads</strong>, lower CPA, higher ROAS, and long-term profitability.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-[16px] top-0 bottom-0 w-px bg-white/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-20">

            {steps.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-1 md:left-1/2 md:-translate-x-1/2">
                    <div className="h-10 w-10  sepia rounded-xl border border-[#c8a95f]/40 bg-[#111] flex items-center justify-center text-[#c8a95f] text-lg font-bold">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[46%] rounded-3xl border border-white/10 bg-[#1f1e1ed4] p-4 md:p-7`}
                  >
                    <span className="text-[11px] uppercase tracking-[0.28em] text-[#c8a95f] font-black">
                      Step {item.step}
                    </span>

                    <h3 className="mt-2 text-lg md:text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/75">
                      {item.desc}
                    </p>

                    {/* Quote */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-black/40 p-4 text-xs text-white/70 italic">
                      {item.quote}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
