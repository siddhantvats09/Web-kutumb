const services = [
    {
      title: "Web Design",
      description: "Modern, responsive interface design",
      image: "/images/webdes.png",
    },
    {
      title: "Web Development",
      description: "Smooth And SEO optimized Websites",
      image: "/images/webdev.png",
    },
    {
      title: "Photography",
      description: "Professional brand-focused shoots",
      image: "/images/photo.png",
    },
    {
      title: "Graphics",
      description: "Creative digital visual content",
      image: "/images/graphic.png",
    },
    {
      title: "Video Editing",
      description: "Crisp, compelling edited content",
      image: "/images/editing.png",
    },
    {
      title: "Google Ads",
      description: "Targeted, optimized ad campaigns",
      image: "/images/googleads.png",
    },
  ];
  
  export default function ServicesSection() {
    return (
      <section className="relative bg-[#f1f1f1] py-20 px-4 sm:px-6 lg:px-12 text-white overflow-hidden">
        {/* 🔵 Background and gradient layers */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bg-pattern.jpg"
            alt="background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 backdrop-blur-sm" />
          {/* <div className="absolute top-1/3 left-0 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-0 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl animate-ping" /> */}
        </div>
  
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Our Services
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:scale-[1.03] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
              >
                {/* Gradient glow hover */}
                <div className="absolute -inset-[1px] z-0 rounded-2xl bg-gradient-to-tr from-purple-600/50 to-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
  
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full max-w-[280px] mx-auto mb-6 object-contain rounded-xl z-10 relative drop-shadow-lg"
                />
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 z-10 relative">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-base z-10 relative">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  