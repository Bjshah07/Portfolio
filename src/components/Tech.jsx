import React, { lazy, Suspense, useState, useEffect } from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import CustomLoader from "./CustomLoader";

const BallCanvas = lazy(() => import("./canvas/Ball"));

const Tech = () => {
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
    <>
      <h1 className="text-3xl text-center sm:px-16 px-6 py-10 -mt-10 text-white">Technologies I Use:</h1>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 flex flex-col items-center justify-center' key={technology.name}>
            {isMobile ? (
              <>
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-16 h-16 object-contain mb-2"
                  loading="lazy"
                />
                <p className="text-center text-white text-sm">{technology.name}</p>
              </>
            ) : (
              <Suspense fallback={<CustomLoader />}>
                <BallCanvas icon={technology.icon} name={technology.name}/>
              </Suspense>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
