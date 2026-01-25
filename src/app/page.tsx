/* eslint-disable @typescript-eslint/no-unused-vars */
// import Navbar from "../../components/Navbar"
// import Hero from "../../components/Hero"
// import Homes from "../../components/Home"
// import WhyUs from "../../components/WhyUs"
// import Portfolio from "../../components/Portfolio2"
// import ServicesSection from "../../components/ServicesSection"
// import Testimonials from "../../components/Testimonials"
// import Contact from "../../components/Contact"
// import Footer from "../../components/Footer"
import { Toaster } from "react-hot-toast";
import FAQs from "./services/components/FAQs"

import Home from "../app/hero2/component/Home";
import Testimonial2 from "../../components/Testimonial2";

export default function page() {
  return (
    <div>
      <Toaster position="top-right" />

      {/* <Hero /> */}
      {/* <ServicesSection /> */}
      {/* <Portfolio></Portfolio>
      <WhyUs/>
      <Testimonials></Testimonials>
      <Homes /> */}
      {/* <FAQs></FAQs> */}
      {/* <Contact />
      <Footer /> */}

      <Home />
      <Testimonial2></Testimonial2>
      <FAQs></FAQs>
    </div>
  );
}
