"use client";

import { useEffect, useMemo, useState } from "react";

export default function Typing({
  phrases = [
    "2D Explainer Animation",
    "3D Product Animation",
    "Motion Graphics",
    "Brand Animation",
    "LOGO Animation",
    "Marketing Videos",
    "UI & App Animation",
  ],
  typingSpeed = 55,
  deletingSpeed = 35,
  holdTime = 1100,
  className = "",
}) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = useMemo(
    () => phrases[phraseIndex % phrases.length],
    [phrases, phraseIndex]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      // typing forward
      if (!isDeleting) {
        const next = currentPhrase.slice(0, typed.length + 1);
        setTyped(next);

        // reached end -> hold then delete
        if (next === currentPhrase) {
          setTimeout(() => setIsDeleting(true), holdTime);
        }
      } else {
        // deleting backward
        const next = currentPhrase.slice(0, typed.length - 1);
        setTyped(next);

        // finished deleting -> next phrase
        if (next === "") {
          setIsDeleting(false);
          setPhraseIndex((p) => p + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [typed, isDeleting, currentPhrase, typingSpeed, deletingSpeed, holdTime]);

  return (
    <div className={["max-w-2xl pt-4 md:py-6 pb-6 mx-auto  text-[26px] md:text-[32px]  font-light leading-relaxed", className].join(" ")}>
    

      {/* Typed highlight */}
      <p className="font-semibold text-[#e8c26a]">
        {typed}
        {/* Cursor */}
        <span className="inline-block w-[10px] translate-y-[2px]">
          <span className="animate-pulse text-[#c8a95f]">|</span>
        </span>
      </p>
    </div>
  );
}
