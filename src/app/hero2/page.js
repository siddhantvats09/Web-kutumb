/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import Hero from "./component/Hero";
import Section2 from "./component/Section2";
import Home from "./component/Home";
import Navbar2 from "../../../components/Navbar2";
import ContactSection from "../../../components/ContactSection";
import Footer2 from "../../../components/Footer2";
import Testimonial2 from "../../../components/Testimonial2";

const page = () => {
  return (
    <>
      {/* ✅ Sticky / Fixed Background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: "url('/images/bgwhy2.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "520px",
            backgroundPosition: "top left",
            backgroundAttachment: "fixed",
          }}
        />

        {/* overlay for readability */}
        <div className="absolute inset-0 bg-black/15" />

        {/* premium gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_10%,rgba(200,169,95,0.18),transparent_60%)]" />
      </div>

      {/* ✅ Site Content Scrolls */}
      {/* <Navbar2 /> */}
      <Home />
      <Testimonial2></Testimonial2>
      <ContactSection></ContactSection>
      <Footer2></Footer2>
    </>
  );
};

export default page;
