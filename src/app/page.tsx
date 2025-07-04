/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Homes from "../../components/Home"
import WhyUs from "../../components/WhyUs"
import Portfolio from "../../components/Portfolio"
import ServicesSection from "../../components/ServicesSection"
import Testimonials from "../../components/Testimonials"
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"
import { Toaster } from "react-hot-toast"

export default function Home() {
  return (
    <div>
      <Toaster position="top-right" />
      
      <Hero />
      <ServicesSection />
      <WhyUs/>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
      <Homes />
      <Contact />
      <Footer />
    </div>
  );
}
