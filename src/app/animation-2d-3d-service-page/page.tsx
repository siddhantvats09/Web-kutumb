import React from 'react'
import Navbar2 from '../../../components/Navbar2'
import ContactSection from '../../../components/ContactSection'
import Footer2 from '../../../components/Footer2'
import AnimationServicePage from './components/AnimationServicePage'

const page = () => {
  return (
    <>
    <Navbar2></Navbar2>
    <AnimationServicePage></AnimationServicePage>
    <ContactSection></ContactSection>
    <Footer2></Footer2>
    </>
  )
}

export default page