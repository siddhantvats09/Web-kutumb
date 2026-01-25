"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function FAQs() {
  const faqData = [
    {
      question: "What industries do you work with?",
      answer:
        "We partner with businesses across various industries — from startups to established brands — including tech, retail, healthcare, real estate, and more.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "It depends on the complexity. Small projects can take 2-3 weeks, while larger, custom solutions may take 6-8 weeks. We always provide clear timelines upfront.",
    },
    {
      question: "Do you provide ongoing support after project delivery?",
      answer:
        "Absolutely! We believe in building long-term partnerships. We offer maintenance, updates, and additional services as your needs grow.",
    },
    {
      question: "Can I get a custom package tailored to my needs?",
      answer:
        "Yes! Every business is unique. We craft customized service packages to align perfectly with your specific goals and budget.",
    },
    {
      question: "What makes SixthGenX different?",
      answer:
        "Our blend of creativity, strategy, and technical expertise — combined with a client-first approach — is what makes us dangerously good at what we do.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 md:py-20 px-6 md:px-16  bg-[#000] overflow-hidden">
      <div
        className="absolute inset-0 z-1 opacity-100 "
        style={{
          backgroundImage: "url('/images/bgwhy2.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "420px",
          backgroundPosition: "top left",
        }}
      />
      {/* Background Image */}
      

      {/* Title */}
      <div className="relative max-w-4xl mx-auto text-center mb-14 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-white mb-4"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-white/65 max-w-xl mx-auto"
        >
          Everything you need to know before working with us.
        </motion.p>
      </div>

      {/* FAQ List */}
      <div className="relative max-w-3xl mx-auto space-y-4 z-10">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.55)]"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <h3 className="text-sm md:text-base font-semibold text-white">
                {faq.question}
              </h3>

              <ChevronDownIcon
                className={`h-5 w-5 text-[#c8a95f] transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.05 }}
                  className="px-5 pb-5 text-sm text-white/65 leading-relaxed overflow-hidden"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
