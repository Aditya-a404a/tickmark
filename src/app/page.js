import Image from "next/image";
import Navbar from "/src/app/components/navbar.js";
import HeroSection from "/src/app/components/herosection.js";
import React from "react";

export default function Home() {
  return (
    <main >
      {/* imported components  */}
      <Navbar/>
      <HeroSection/>
      
    </main>
  );
}
