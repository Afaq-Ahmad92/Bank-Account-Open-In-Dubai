import React from "react";
import "./globals.css";
import Banner from "./Banner";
import Services from "./Services";

const page = () => {
  return (
    <>
      <Banner/>
      <Services/>
      <section className="Section bg-gray-300 flex items-center justify-center">
        <h2>Section 3</h2>
      </section>
      <section className="Section bg-gray-400 flex items-center justify-center">
        <h2>Section 4</h2>
      </section>
      <section className="Section bg-gray-500 flex items-center justify-center">
        <h2>Section 5</h2>
      </section>
    </>
  );
};

export default page;
