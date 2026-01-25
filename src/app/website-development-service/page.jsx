/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import WebsiteDevelopmentPage from "./component/WebsiteDevelopmentPage";
import ContactSection from "../../../components/ContactSection";
import Footer2 from "../../../components/Footer2";
import Navbar2 from "../../../components/Navbar2";

const page = () => {
  return (
    <>
      {/* <Navbar2></Navbar2> */}
      <WebsiteDevelopmentPage></WebsiteDevelopmentPage>
      {/* <ContactSection></ContactSection>
      <Footer2></Footer2> */}
    </>
  );
};

export default page;
