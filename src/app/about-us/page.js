/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";

import Footer from "../../../components/Footer";
import Contact from "../../../components/Contact";
import Navbar from "../../../components/Navbar";
import AboutUsPage from "../../../components/AboutUsPage";
import Hero from "./components/Hero";
import TeamCard from "./components/TeamCard";
import Values from "./components/Values";
import OurStory from "./components/OurStory";
import Stats from "./components/Stats";
import Teamphotos from "./components/Teamphotos";
import Testimonials from "../../../components/Testimonials";

const AboutUs = () => {
  return (
    <>
      <Hero></Hero>
      {/* <AboutUsPage></AboutUsPage> */}
      <OurStory></OurStory>
      <Values></Values>
      <TeamCard></TeamCard>
      <Stats></Stats>
      <Testimonials></Testimonials>
      {/* <Teamphotos></Teamphotos> */}
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
