export default function ServicesPage() {
    return (
      <div className="bg-[#0f0f0f] text-white font-sans">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-r from-indigo-500/70 via-purple-500/60 to-blue-500/70 text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Elevate Your Business with Our <span className="text-yellow-300">Creative Services</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            We specialize in innovative web design, development, digital marketing, and multimedia services to transform your business.
          </p>
          <a href="#services" className="bg-yellow-300 text-black py-3 px-6 rounded-full text-lg font-medium hover:bg-yellow-400 transition-all">
            Explore Our Services
          </a>
        </section>
  
        {/* Service Overview Section */}
        <section className="py-20 px-6 bg-[#1d1d1d] text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Our Expertise in Various Digital Services</h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            From web design to marketing campaigns, we offer a range of services to help your business grow and thrive in the digital world. Below is a glimpse of what we offer.
          </p>
        </section>
  
        {/* Detailed Services Section */}
        <section id="services" className="py-20 px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 bg-[#121212]">
          {[
            { title: "Web Design", description: "Create stunning, user-friendly websites that reflect your brand identity.", icon: "/images/webdes.png" },
            { title: "Web Development", description: "Transform your business with custom websites, web apps, and e-commerce solutions.", icon: "/images/webdev.png" },
            { title: "Graphic Design", description: "Designing logos, branding, and digital assets that make your business stand out.", icon: "/images/graphic.png" },
            { title: "Video Editing", description: "Captivate your audience with engaging videos, crafted to perfection.", icon: "/images/editing.png" },
            { title: "Video Shooting", description: "Professional video production services for your business or brand.", icon: "/images/photo.png" },
            { title: "Google Ads", description: "Boost your business with targeted, high-performing Google Ads campaigns.", icon: "/images/googleads.png" },
            { title: "Animation", description: "Bring your ideas to life with 2D/3D animation and motion graphics.", icon: "/images/all.png" },
            { title: "Photography", description: "Capture stunning photos for your brand, products, and services.", icon: "/images/photo.png" },
          ].map((service, index) => (
            <div key={index} className="bg-[#2a2a2a] p-8 rounded-xl border border-gray-600 text-center hover:scale-105 transition-all transform shadow-lg">
              <img src={service.icon} alt={service.title} className="w-16 rounded-[10px] h-16 mx-auto mb-4" />
              <p className="text-2xl font-semibold text-white mb-4">{service.title}</p>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </section>
  
        {/* Why Choose Us Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-500/70 via-purple-500/60 to-blue-500/70 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-white">Why Choose Web Kutumb?</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Experience and Expertise</h3>
              <p className="text-gray-400">
                With over 10 years of experience in the industry, we have the expertise to provide exceptional results across all of our services.
              </p>
            </div>
            <div className="bg-[#1c1c1c] p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Tailored Solutions</h3>
              <p className="text-gray-400">
                We work closely with you to understand your unique needs and deliver personalized solutions that align with your goals.
              </p>
            </div>
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-[#121212] text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-10">Client Testimonials</h2>
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-10">
            {[
              { name: "John Doe", feedback: "Web Kutumb transformed our website and increased our conversions significantly!", position: "CEO, TechCo" },
              { name: "Jane Smith", feedback: "The team created beautiful graphics and videos that elevated our brand presence.", position: "Marketing Manager, Retail Corp" },
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#2a2a2a] p-8 rounded-xl shadow-lg w-full sm:w-1/2 lg:w-1/3">
                <p className="text-xl text-white mb-4">"{testimonial.feedback}"</p>
                <p className="text-gray-400">{testimonial.name} - {testimonial.position}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="py-20 px-6 text-center bg-gradient-to-r from-indigo-500/70 via-purple-500/60 to-blue-500/70">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">Ready to Take Your Business to the Next Level?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Let's work together to bring your digital vision to life. Our team of experts is here to help you succeed.
          </p>
          <a href="/contactus" className="bg-yellow-300 text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-yellow-400 transition-all">
            Get Started Now
          </a>
        </section>
      </div>
    );
  }
  