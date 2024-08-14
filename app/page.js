import React from "react";
import "./globals.css";
import Banner from "./components/Home/Banner";
import Services from "./components/Home/Services";
import What_We_Can_Do from "./components/Home/What_We_Can_Do";
import Solution from "./components/Home/Solution";
// import Timeline from "./components/shared/Timeline";
import Projects from "./components/Home/Projects";
const page = () => {
  return (
    <>
      <Banner />
      <Services />
      <What_We_Can_Do />
      <Solution />
      {/* <Timeline /> */}
      {/* <Projects /> */}
    </>
  );
};

export default page;
