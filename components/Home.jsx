"use client";

export default function Homes() {
  return (
    <main className="min-h-full bg-black text-white px-6 py-18 relative overflow-hidden">
      {/* Hero Text */}
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Everything you need <br />
          to start and run your <span className="text-white">Business</span>
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mt-8">
          The ideas that improve your products. Be among the first founders to
          experience the easiest way to start and run a business.
        </p>
      </div>

      {/* View Demos Button */}
      <div className="flex justify-center mt-16 z-10 relative">
        <button className="flex items-center px-5 py-2 bg-gray-800 border border-gray-600 rounded-full hover:bg-gray-700 transition">
          <div className="w-4 h-4 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-full mr-2" />
          View Demos and Highlights
        </button>
      </div>

      {/* Abstract Background Shape */}
      <div className="absolute top-50 left-1/2 transform -translate-x-1/2 z-0">
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-40 rounded-full blur-3xl" />
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 max-w-5xl mx-auto z-10 relative">
        {[
          { label: "Web Design", desc: "Modern, responsive interface design" },
          { label: "Animation", desc: "Dynamic, engaging motion visuals" },
          { label: "Photography", desc: "Professional brand-focused shoots" },
          { label: "Graphics", desc: "Creative digital visual content" },
        ].map((item, i) => (
          <div
            key={i}
            className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-auto md:h-auto rounded-xl bg-gradient-to-br from-[#1c1c1c68] to-[#2a2a2a64] p-6 border border-[#5b5b5b7a] text-center hover:scale-105 transition transform shadow-lg flex flex-col justify-center items-center mx-auto"
          >
            <p className="text-base font-semibold mb-1">{item.label}</p>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
