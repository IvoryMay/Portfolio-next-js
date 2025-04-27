import Image from "next/image";
import Navbar from "./components/Navbar";
import TopSection from "./components/TopSection";
import About from "./components/About";
import Services from "./components/Services";
import MyWork from "./components/MyWork";

export default function Home() {
  return (
    < >
      
        <Navbar />
        <TopSection />
        <About />
        <Services />
        <MyWork />
        
    </>
  );
}
