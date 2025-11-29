import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import CustomLoader from "./components/CustomLoader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MobileHeroPage from "./components/MobileHeroPage";

const About = lazy(() => import("./components/About"));
const Tech = lazy(() => import("./components/Tech"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Works = lazy(() => import("./components/Works"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          {isMobile ? <MobileHeroPage /> : <Hero />}
        </div>
        <Suspense fallback={<CustomLoader />}>
          <About />
          <Tech />
          <Experience />
          <Works />
        </Suspense>
        <div className='relative z-0'>
          <Suspense fallback={<CustomLoader />}>
            <Contact />
            <StarsCanvas />
            <Footer />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
