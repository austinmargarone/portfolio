import React from "react";
import { ArrowRight1, Globe, Github } from "@/components/svg";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="p1">
      <div className="mx-auto flex w-full flex-col">
        <h4 className="title mx-auto mb-[.62rem] text-blue dark:text-blue1 md:mb-[1.69rem]">
          Web Dev Project
        </h4>
        <h1 className="pheading">Morrent - A Car Rental Website</h1>
      </div>
      <div className="my-[1.5rem]">
        <Image src="/Morrent.svg" width={345} height={163} alt="Computer" />
      </div>
      <div className="flex gap-[2.5625rem]">
        <div className="flex">
          <Globe />
          <p>Demo Site</p>
          <ArrowRight1 />
        </div>
        <div className="flex">
          <Github />
          <p>Demo Site</p>
          <ArrowRight1 />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
