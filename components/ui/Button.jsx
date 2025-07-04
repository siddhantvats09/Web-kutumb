"use client";

export function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`
        px-6 py-3 
        text-white text-lg font-medium
        rounded-xl
        bg-transparent
        border border-white/20
        hover:border-[#494646]
        hover:bg-white/5
        hover:shadow-md
        hover:scale-105
        backdrop-blur-sm
        transition-all duration-300 ease-in-out
        ${className}
      `}
    >
      {children}
    </button>
  );
}
