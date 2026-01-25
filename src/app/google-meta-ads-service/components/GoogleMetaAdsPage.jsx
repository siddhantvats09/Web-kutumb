"use client";

import Image from "next/image";
import Link from "next/link";

export default function GoogleMetaAdsPage() {
  return (
    <main className="bg-black font-display text-white transition-colors duration-300">
      {/* HERO */}
      <section className="relative overflow-hidden py-16 md:pt-20 md:pb-20 md:px-6">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-[#c8a95f]/10 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-1 px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="font-[var(--font-playfair)] text-5xl md:text-7xl leading-[1.1]">
              Google & Meta Ads Built for{" "}
              <span className="italic text-[#c8a95f]">Scalable ROAS</span>
            </h1>

            <p className="text-lg text-white/85 max-w-xl leading-relaxed">
              SixthGenX Tech is a performance marketing agency specializing in
              <strong> Google Ads management</strong> and
              <strong> Meta Ads optimization</strong>. We engineer paid media
              systems that reduce CPA, improve Quality Score, and scale
              profitably across search and social.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact">
                <button className="px-8 cursor-pointer py-4 rounded-xl text-base font-bold border border-[#c8a95f] hover:text-white hover:bg-[#c8a95f] hover:border-[#c8a95f] transition">
                  Get Free Ads Audit
                </button>
              </Link>
            </div>
          </div>

          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/samples/meta2.jpg"
              alt="Google Ads and Meta Ads performance dashboard"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </section>

      {/* PLATFORM FOCUS */}
      <section className="md:py-20 py-16 relative ">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />

        <div className="max-w-7xl relative z-1 mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-[var(--font-playfair)] text-4xl text-[#c8a95f] mb-6">
              Google Ads + Meta Ads, Engineered Together
            </h2>
            <p className="text-white/85">
              Search captures intent. Social creates demand. We connect both
              into one high-performance acquisition engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* META */}
            <div className="md:p-10 p-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-[#c8a95f] mb-4">
                Meta Ads (Facebook & Instagram)
              </h3>
              <p className="text-white/85 mb-6 leading-relaxed">
                Our Meta Ads strategy focuses on creative testing, audience
                expansion, and algorithmic optimization. We scale Facebook and
                Instagram campaigns while maintaining profitable ROAS.
              </p>
              <ul className="space-y-3 text-sm text-white/75">
                <li>• Creative-led scaling frameworks</li>
                <li>• Lookalike & interest expansion</li>
                <li>• Advantage+ & conversion API setup</li>
                <li>• Full-funnel retargeting</li>
              </ul>
            </div>

            {/* GOOGLE */}
            <div className="md:p-10 p-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-[#c8a95f] mb-4">
                Google Ads Management
              </h3>
              <p className="text-white/85 mb-6 leading-relaxed">
                We manage Google Search, Performance Max, Display, and Shopping
                campaigns with a focus on intent-based keyword strategy and
                Quality Score optimization.
              </p>
              <ul className="space-y-3 text-sm text-white/75">
                <li>• High-intent keyword clustering</li>
                <li>• Performance Max optimization</li>
                <li>• Shopping feed & merchant center setup</li>
                <li>• Bid strategy & CPA control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI ADVANTAGE */}
      <section className="md:py-20 py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />

        <div className="max-w-7xl relative z-1 md:px-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-20 items-center">
          <div className="px-4">
            <h2 className="font-[var(--font-playfair)] text-white text-4xl mb-6">
              AI-Driven Performance Marketing
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Manual ad management reacts late. Our AI-assisted systems predict
              performance trends, reallocate budgets, and optimize bids in
              real-time across Google and Meta.
            </p>

            <ul className="space-y-4 text-sm text-white/75">
              <li>• 30–50% reduction in CPA</li>
              <li>• Faster learning-phase exits</li>
              <li>• Stable scaling without ROAS drops</li>
            </ul>
          </div>

          <div className="border border-white/10 rounded-3xl p-10 bg-white/5 backdrop-blur-xl">
            <p className="text-4xl font-bold text-[#c8a95f] mb-2">+242% ROAS</p>
            <p className="text-sm text-white/65">
              Average improvement across Google Ads and Meta Ads accounts within
              90 days.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="md:py-18 py-14 bg-[#c8a95f] text-black text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Scale Google & Meta Ads?
        </h2>
        <p className="max-w-2xl mx-auto px-4 opacity-80 mb-10">
          Get a free performance marketing audit and discover how SixthGenX Tech
          can turn ad spend into predictable revenue.
        </p>
        <Link href="/contactus">
        <button className="bg-black cursor-pointer text-white px-10 py-4 rounded-xl font-bold hover:opacity-90 transition">
          Request Free Ads Audit
        </button>
        </Link>
      </section>
    </main>
  );
}
