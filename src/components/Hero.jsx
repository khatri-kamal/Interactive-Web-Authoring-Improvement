import React from "react";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-o top-[120px] max-w-7x1 m-auto flex flex-row items-start gap-5`}
      >
        <div className="ml-[43px]">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="gradient__text">Kamal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I Study at<span className="gradient__text"> Ulster University</span>{" "}
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            My Student Id is <span className="gradient__text">B0000000</span>{" "}
            <br className="sm:block hidden" /> this is my improvement of <br />
            <span className="gradient__text">Interactive Web</span> assignment
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
