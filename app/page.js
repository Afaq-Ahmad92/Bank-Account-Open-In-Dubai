import React from "react";
import "./globals.css";

const page = () => {
  return (
    <>
      <section className="Section bg-blend-darken px-10  bg-[url('/assets/banner.jpg')] flex flex-col items-center justify-center">
        <h1 className="font-extrabold text-7xl m-12  ">
          Welcome to Bank Account Open in Dubai Your trusted banking partner
        </h1>
        <p className="font-semibold text-1xl mx-28">
          With us, opening a bank account in Dubai is simple. We’re with you
          every step, ensuring you get the support you need for a hassle-free
          banking setup.
        </p>
        <button className="Button">Get Start Now</button>

      </section>
      <section className="Section bg-gray-200 flex items-center justify-center">
        <h2>Section 2</h2>
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
