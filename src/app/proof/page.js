/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";

import Footer from "../../../components/Footer";
import Contact from "../../../components/Contact";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import ServicesSection from "./components/ServiceSection";
import WorkGallery from "./components/WorkGallery";

import Portfolio from "./components/Portfolio";
import FAQs from "../services/components/FAQs";
import Testimonials from "../../../components/Testimonials";

const page = () => {
  return (
    <>
      <Hero></Hero>
      {/* <ServicesSection></ServicesSection> */}
      <WorkGallery></WorkGallery>
      <Metrics></Metrics>
      <Testimonials></Testimonials>
      {/* <Portfolio></Portfolio> */}
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default page;
