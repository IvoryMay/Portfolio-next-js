"use client";
import { useState } from "react";

import Image from "next/image";
import Navbar from "./components/Navbar";
import TopSection from "./components/TopSection";
import About from "./components/About";
import Services from "./components/Services";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

export default function Home() {


  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check theme on page load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  // Toggle dark mode
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [isDarkMode]);


  
  
  return (
    < >
      
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <TopSection isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <Services isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <MyWork isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/> 
        <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/> 
        
    </>
  );
}
