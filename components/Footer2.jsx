import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer2 = () => {
  return (
    <>
      <footer className="bg-[#0a0a0a] relative  pt-24 pb-12 text-white">
        <div
          className="absolute inset-0 z-[1] opacity-100"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "420px",
            backgroundPosition: "top left",
          }}
        />
        <div className="max-w-7xl relative z-2 mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-5 space-y-8">
              <div className="flex items-center gap-3">
                <div className="size-10 flex items-center justify-center bg-[#c8a95f]/15 border border-[#c8a95f]/35 text-white rounded-xl">
                  <span className="text-xl">↗</span>
                </div>
                <span className="text-2xl font-black italic font-[var(--font-playfair)] text-white">
                  SixthGenX
                </span>
              </div>

              <p className="text-white/75 max-w-sm leading-relaxed">
                SixthGenX is a full-service digital agency offering website
                design & development, SEO services, performance marketing,
                Google & Meta Ads, graphic design, and 2D/3D animation.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div>
                <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-white">
                  Services
                </h4>
                <ul className="space-y-4 text-sm text-white/75 font-medium">
                  <li>
                    <Link
                      className="hover:text-[#c8a95f] transition-colors"
                      href="/website-development-service"
                    >
                      Website Design & Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-[#c8a95f] transition-colors"
                      href="/search-engion-optimization-seo-service"
                    >
                      SEO Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-[#c8a95f] transition-colors"
                      href="/performance-marketing-googel-meta-ads"
                    >
                      Performance Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-[#c8a95f] transition-colors"
                      href="/animation-2d-3d-service-page"
                    >
                      Graphic and Brand Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-[#c8a95f] transition-colors"
                      href="/google-meta-ads-service"
                    >
                      Google & Meta Ads
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-[#c8a95f] transition-colors"
                      href="/animation-2d-3d-service-page"
                    >
                     Animation 3D/2D
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-white">
                  Agency
                </h4>
                <ul className="space-y-4 text-sm text-white/75 font-medium">
                  <li>
                    <Link
                      className="hover:text-[#c8a95f] transition-colors"
                      href="about-us"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-[#c8a95f] transition-colors"
                      href="/proof"
                    >
                      Work & Proof
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      className="hover:text-[#c8a95f] transition-colors"
                      href="#case-studies"
                    >
                      Case Studies
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      className="hover:text-[#c8a95f] transition-colors"
                      href="/contactus"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-white">
                  Connect
                </h4>

                <div className="flex gap-4 mb-6">
                  <a
                    className="size-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-[#c8a95f]/35 hover:bg-[#c8a95f]/15 hover:text-white transition-all"
                    href="https://www.sixthgenx.com/"
                    aria-label="Website"
                    rel="nofollow"
                  >
                    🌐
                  </a>
                  <a
                    className="size-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-[#c8a95f]/35 hover:bg-[#c8a95f]/15 hover:text-white transition-all"
                    href="mailto:sixthgenxtech@gmail.com"
                    aria-label="Email"
                    rel="nofollow"
                  >
                    ✉
                  </a>
                </div>

                {/* micro accent line */}
                <div className="h-[2px] w-12 bg-[#c8a95f]/70 rounded-full" />
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/75 font-bold uppercase tracking-widest">
            <p>
              © {new Date().getFullYear()} SixthGenX Tech. All rights reserved.
            </p>

            <div className="flex gap-8">
              <a className="hover:text-[#c8a95f]" href="#" rel="nofollow">
                Privacy Policy
              </a>
              <a className="hover:text-[#c8a95f]" href="#" rel="nofollow">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <a
          href="https://wa.me/919817612848"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex h-16 w-16 items-center justify-center rounded-3xl bg-[#0b0b0b] border border-[#c8a95f]/35 shadow-[0_18px_55px_rgba(0,0,0,0.75)] transition-all duration-300 hover:scale-110 active:scale-95"
        >
          {/* gold glow */}
          <span className="pointer-events-none absolute inset-0 rounded-3xl bg-[#c8a95f]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* WhatsApp icon (custom, no external lib) */}
          <svg
            viewBox="0 0 32 32"
            className="relative z-10 h-7 w-7 fill-[#c8a95f]"
            aria-hidden="true"
          >
            <path d="M16 3C9.4 3 4 8.2 4 14.7c0 2.3.7 4.6 2 6.6L4 29l8-2.1c1.9 1 4 1.6 6 1.6 6.6 0 12-5.2 12-11.8C30 8.2 22.6 3 16 3zm0 22.7c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.8 1.3 1.3-4.6-.3-.4c-1.1-1.6-1.7-3.4-1.7-5.3C5 9.7 9.9 5 16 5s11 4.7 11 10.1c0 5.6-4.9 10.6-11 10.6zm6.1-7.8c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-.3-.1-1.4-.5-2.6-1.6-1-1-1.6-2.2-1.8-2.6-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5-.1-.1-.7-1.6-1-2.2-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.2.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2 3.2 4.9 4.5.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.3.2-.6.2-1.1.2-1.3-.1-.2-.3-.3-.6-.4z" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default Footer2;
