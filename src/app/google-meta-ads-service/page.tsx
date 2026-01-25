/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import GoogleMetaAdsPage from './components/GoogleMetaAdsPage'
import DeploymentAndProof from './components/DeploymentAndProof'
import Navbar2 from '../../../components/Navbar2'
import ContactSection from '../../../components/ContactSection'
import Footer2 from '../../../components/Footer2'

const page = () => {
  return (
    <>
    {/* <Navbar2></Navbar2> */}
    <GoogleMetaAdsPage></GoogleMetaAdsPage>
    <DeploymentAndProof></DeploymentAndProof>
    {/* <ContactSection></ContactSection>
    <Footer2></Footer2> */}
    </>
  )
}

export default page;
