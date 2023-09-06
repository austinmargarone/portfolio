import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col md:flex">
      <h4 className="title">HI, I AM AUSTIN</h4>
      <h1>
        Professional
        <br />
        Web Developer
        <br /> Based in USA
      </h1>
      <h4 className="regbody w-[21.125rem]">
        Transforming the web one line of code at a time: Crafting cutting-edge
        digital experiences with precision, passion, and a profound commitment
        to excellence
      </h4>
      <button className="herobtn rounded-[379.77006rem] bg-blue">
        <p className="herotext text-white">My Work</p>
      </button>
      <div className="herocopy bg-white">
        <div className="flex justify-between">
          <p className="herocopytext text-slate">austin@fcvt.dev</p>
          <Image
            className="shrink-0"
            src="/Frame.svg"
            width={16}
            height={16}
            alt="Copy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
