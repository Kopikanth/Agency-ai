import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.display = 'block';
        ringRef.current.style.display = 'block';
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;
        position.current.x = e.clientX;
        position.current.y = e.clientY;
      }
    }

    const handleMouseEnter = (e) => {
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.display = 'block';
        ringRef.current.style.display = 'block';
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;
        position.current.x = e.clientX;
        position.current.y = e.clientY;
      }
    }

    const handleMouseOut = () => {
      dotRef.current.style.display = 'none';
      ringRef.current.style.display = 'none';
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseOut);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
        ringRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseOut);
    }
  }, [])


  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Team />
      <ContactUs />
      <Footer theme={theme} />
      <Analytics/>

      {/* custom cursor ring */}
      <div ref={ringRef} className="fixed hidden top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]" style={{ transition: 'transform 0.1s ease-out' }} />

      {/* custom cursor dot */}
      <div ref={dotRef} className="fixed hidden top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]" />
    </div>
  );
};

export default App;