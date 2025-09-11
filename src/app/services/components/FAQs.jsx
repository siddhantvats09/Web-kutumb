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
    <section className="relative py-8 md:py-16 px-6 md:px-16 h-[790px] md:h-[770px] bg-black overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/images/bgwhy.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
      />

      {/* Title */}
      <div className="relative max-w-4xl mx-auto text-center mb-16 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Frequently Asked Questions 
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 max-w-xl mx-auto"
        >
          Everything you need to know before working with us.
        </motion.p>
      </div>

      {/* FAQ List */}
      <div className="relative max-w-3xl mx-auto space-y-4 z-10">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border cursor-pointer border-white/20 rounded-xl backdrop-blur-md bg-gradient-to-br from-[#1c1c1c68] to-[#2a2a2a64] text-white p-4 md:p-6 shadow-xl"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <h3 className="text-base md:text-lg font-medium">
                {faq.question}
              </h3>
              <ChevronDownIcon
                className={`h-5 w-5 text-gray-300 cursor-pointer transform transition-transform ${
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
                  transition={{ duration: 0.4 }}
                  className="mt-4 text-gray-400 text-sm overflow-hidden"
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
