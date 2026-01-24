import React from 'react'
import SEOservicepage from "./components/SEOservicepage"
import SEOCapablities from "./components/SEOCapablities"
import SEOResults from "./components/SEOResults"
import SEOCases from "./components/SEOCases"
import Navbar2 from '../../../components/Navbar2'
import ContactSection from '../../../components/ContactSection'
import Footer2 from '../../../components/Footer2'
import Testimonial2 from '../../../components/Testimonial2'

const page = () => {
  return (
    <>
    <Navbar2></Navbar2>
    <SEOservicepage></SEOservicepage>
    <SEOCapablities></SEOCapablities>
    <SEOResults></SEOResults>
    <SEOCases></SEOCases>
    <Testimonial2></Testimonial2>
    <ContactSection></ContactSection>
    <Footer2></Footer2>
    </>
  )
}

export default page