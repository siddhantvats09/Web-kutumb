/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Homes from "../../components/Home"
import ServicesSection from "../../components/ServicesSection"
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"
import { Toaster } from "react-hot-toast"

export default function Home() {
  return (
    <div>
      <Toaster position="top-right" />
      
      <Homes />
      <Hero />
      <ServicesSection />
      <Contact />
      <Footer />
    </div>
  );
}
