/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";

import Footer from "../../../components/Footer";
import Contact from "../../../components/Contact";
import Navbar from "../../../components/Navbar";
import AboutUsPage from "../../../components/AboutUsPage";
import ServicesPage from "../../../components/ServicesPage";
import Hero from "./components/Hero"
import Description from "./components/Description"
import HowItWorks from "./components/HowItWorks"
import FAQs from "./components/FAQs"
import CTA from "./components/CTA"
import ProofOfWork from "./components/ProofOfWork"
import { MdDescription } from "react-icons/md";

const AboutUs = () => {
  return (
    <>
      <Hero></Hero>
      <ServicesPage></ServicesPage>
      {/* <ProofOfWork></ProofOfWork> */}
      <Description></Description>
      <HowItWorks></HowItWorks>
      <FAQs></FAQs>
      <CTA></CTA>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
