"use client";
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-transparent  bg-opacity-50 text-white fixed w-full z-10 Footer">
      <p className="text-lg">Footer Content Here</p>
      <p className="text-sm">&copy; {new Date().getFullYear()} My Company</p>
  </footer>
  )
}

export default Footer