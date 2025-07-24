/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Homes from "../../components/Home"
import WhyUs from "../../components/WhyUs"
import Portfolio from "../../components/Portfolio2"
import ServicesSection from "../../components/ServicesSection"
import Testimonials from "../../components/Testimonials"
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"
import { Toaster } from "react-hot-toast"
import FAQs from "./services/components/FAQs"

export default function Home() {
  return (
    <div>
      <Toaster position="top-right" />
      
      <Hero />
      {/* <ServicesSection /> */}
      <Portfolio></Portfolio>
      <WhyUs/>
      <Testimonials></Testimonials>
      <Homes />
      <FAQs></FAQs>
      <Contact />
      <Footer />
    </div>
  );
}
