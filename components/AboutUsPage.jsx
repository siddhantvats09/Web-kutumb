export default function AboutUsPage() {
  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1a1a1a4c] relative z-1 text-white py-20 px-6 sm:px-8 text-center ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          About <span className="text-gradient">SixthGenX</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl">
          We are a creative digital agency dedicated to delivering top-notch
          web, design, and media solutions to grow your business.
        </p>
      </section>

      {/* Mission and Vision Cards Section */}
      <section className="py-20 px-6 sm:px-8 md:px-16  bg-[#222222]">
        <h2 className="text-3xl font-semibold relative z-1 text-white mb-10 text-center">
          Our Mission & Vision
        </h2>
        <div className="grid relative z-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission Card */}
          <div className="bg-[#2b2b3a] p-8 rounded-xl border border-[#5b5b5b] text-center hover:scale-105 transition-all transform shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-400 text-lg">
              At SixthGenX, our mission is to empower businesses with
              cutting-edge design, development, and marketing solutions. We
              strive to create visually stunning and highly functional digital
              experiences that convert.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#2b2b3a] p-8 rounded-xl border border-[#5b5b5b] text-center hover:scale-105 transition-all transform shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Our Vision
            </h3>
            <p className="text-gray-400 text-lg">
              Our vision is to be the leading digital agency globally,
              delivering innovative solutions that transform businesses and help
              them thrive in the digital world. We aim to be the go-to agency
              for businesses seeking creativity, excellence, and results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 px-6 sm:px-8 md:px-16 bg-[#1a1a1a]">
        <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-200 mb-10 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "Web Design",
            "Web Development",
            "Video Editing",
            "Video Shooting",
            "Graphic Design",
            "Animation",
            "Photography",
            "Google Ads",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-[#2b2b3a] p-8 rounded-xl border border-[#5b5b5b] text-center hover:scale-105 transition-all transform shadow-lg"
            >
              <p className="text-lg font-semibold text-white mb-2">{service}</p>
              <p className="text-gray-400 text-sm">
                Get creative, effective, and tailored solutions for your
                business.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6 sm:px-8 md:px-16">
        <h2 className="text-3xl font-semibold text-white mb-10 text-center">
          Meet the Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Manish Vats - Graphic Designing Expert",
            "Siddhant Vats - Software Developer",
            "Atulya Garg - Google Ads Expert",
          ].map((member, index) => {
            const [name, designation] = member.split(" - ");
            return (
              <div
                key={index}
                className="bg-[#2b2b3a] p-6 rounded-xl text-center shadow-lg hover:scale-105 transition-all"
              >
                <div className="w-24 h-24 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-full mx-auto mb-4" />
                <p className="text-white text-lg font-medium">{name}</p>
                <p className="text-gray-400 text-sm mt-1">{designation}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 px-6 sm:px-8 text-center bg-[#222222]">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Ready to take your business to the next level?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
          Let’s discuss how SixthGenX can help bring your vision to life
          through digital creativity and innovation.
        </p>
        <a
          href="https://wa.me/7988180681" // Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all"
        >
          WhatsApp
        </a>
      </section>

      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0">
        <div className="lg:w-[600px] lg:h-[600px] w-[300px] h-[300px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-40 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
