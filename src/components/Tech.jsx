import React, { lazy, Suspense } from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import CustomLoader from "./CustomLoader";

const BallCanvas = lazy(() => import("./canvas/Ball"));

const Tech = () => {
  return (
    <>
      <h1 className="text-3xl text-center sm:px-16 px-6 py-10 -mt-10 text-white">Technologies I Use:</h1>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <Suspense fallback={<CustomLoader />}>
              <BallCanvas icon={technology.icon} name={technology.name}/>
            </Suspense>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
