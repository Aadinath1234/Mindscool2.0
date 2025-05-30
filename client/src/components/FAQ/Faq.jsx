import React,{useState, useEffect} from "react";
import Navbar2 from "../Navbar/Navbar2.jsx";
import Hero3 from "../Hero/Hero3.jsx";


import AOS from "aos";
import "aos/dist/aos.css";

const FAQ = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="flex justify-center items-center">
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          
        </video>
        <Navbar2 />
        <Hero3 />
      </div>
      
    </div>
  );
};

export default FAQ;



