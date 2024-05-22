import React from "react";
import "./globals.css";
import Banner from "./Banner";

const page = () => {
  return (
    <>
      <Banner/>
      <section className="Section bg-gray-200 flex flex-row items-center justify-center">
        
      </section>
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
