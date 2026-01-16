/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import Hero from "./component/Hero";
import Section2 from "./component/Section2";
import Home from "./component/Home";
import Navbar2 from "../../../components/Navbar2";



const page = () => {
  return (
    <>
    <Navbar2></Navbar2>
    <Home></Home>
     {/* <Hero></Hero>
     <Section2></Section2> */}
    </>
  );
};

export default page;
