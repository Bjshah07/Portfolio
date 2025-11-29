import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import CustomLoader from "./components/CustomLoader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Tech = lazy(() => import("./components/Tech"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Works = lazy(() => import("./components/Works"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
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
