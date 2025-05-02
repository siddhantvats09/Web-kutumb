/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Homes from "../../components/Home"
import ServicesSection from "../../components/ServicesSection"
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"


export default function Home() {
  return (
    <div>
      <Homes></Homes>
      <Hero></Hero>
      <ServicesSection></ServicesSection>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
