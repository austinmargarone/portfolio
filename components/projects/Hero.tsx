import React from "react";
import { ArrowRight1, Globe, GitHubIcon } from "@/components/svg";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="p1">
      <div className="mx-auto flex w-full flex-col">
        <h4 className="title md:p1smalltitlelg mx-auto mb-[.62rem] text-blue dark:text-blue1 md:mb-[1.69rem]">
          Web Dev Project
        </h4>
        <h1 className="pheading md:p1titlelg dark:text-white">
          Morrent - A Car Rental Website
        </h1>
      </div>
      <div className="my-[1.5rem] flex sm:hidden">
        <Image src="/Morrent.svg" width={345} height={163} alt="Computer" />
      </div>
      <div className="my-[1.5rem] hidden sm:block">
        <Image src="/Morrent.svg" width={742} height={350} alt="Computer" />
      </div>
      <div className="flex gap-[2.5625rem]">
        <div className="flex content-center gap-[.18rem]">
          <Globe className="my-auto flex h-[18px] w-[18px] fill-blue dark:fill-blue1 md:h-[20px] md:w-[20px]" />
          <p className="smallbold md:boldp text-blue dark:text-blue1 ">
            Demo Site
          </p>
          <ArrowRight1 className="my-auto h-[24px] w-[24px] stroke-blue dark:stroke-blue1" />
        </div>
        <div className="flex gap-[.18rem]">
          <GitHubIcon className="my-auto h-[18px] w-[18px] fill-blue dark:fill-blue1 md:h-[20px] md:w-[20px]" />
          <p className="smallbold md:boldp text-blue dark:text-blue1">
            Demo Site
          </p>
          <ArrowRight1 className="my-auto h-[24px] w-[24px] stroke-blue dark:stroke-blue1" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
