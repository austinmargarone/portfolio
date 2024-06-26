import React from "react";
import { ArrowRight1, Globe, GitHubIcon } from "@/components/svg";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  desktop: string;
  demo_site: string;
  source_code: string;
};

const Hero = (props: Props) => {
  return (
    <section className="p1">
      <div className="mx-auto flex w-full flex-col">
        <h4 className="title md:p1smalltitlelg mx-auto mb-[.62rem] text-blue dark:text-blue1 md:mb-[1.69rem]">
          Web Dev Project
        </h4>
        <h1 className="pheading md:p1titlelg dark:text-white">{props.title}</h1>
      </div>
      <div className="mx-auto">
        <div className="my-[1.5rem] hidden sm:block">
          <Image
            src={props.desktop}
            width={900}
            height={424}
            alt="Desktop View"
            quality={100}
          />
        </div>
        <div className="my-[1.5rem] flex sm:hidden">
          <Image
            src={props.desktop}
            width={345}
            height={163}
            alt="Desktop View"
            quality={100}
          />
        </div>
      </div>
      <div className="flex gap-[2.5625rem]">
        <Link href={props.demo_site} target="_blank">
          <div className="flex content-center gap-[.18rem]">
            <Globe className="my-auto flex h-[18px] w-[18px] fill-blue dark:fill-blue1 md:h-[20px] md:w-[20px]" />
            <p className="smallbold md:boldp flex items-center justify-center text-blue dark:text-blue1 ">
              Live Site
            </p>
            <ArrowRight1 className="my-auto h-[24px] w-[24px] stroke-blue dark:stroke-blue1" />
          </div>
        </Link>
        <Link href={props.source_code} target="_blank">
          <div className="flex gap-[.18rem]">
            <GitHubIcon className="my-auto h-[18px] w-[18px] fill-blue dark:fill-blue1 md:h-[20px] md:w-[20px]" />
            <p className="smallbold md:boldp flex items-center justify-center text-blue dark:text-blue1">
              Source Code
            </p>
            <ArrowRight1 className="my-auto h-[24px] w-[24px] stroke-blue dark:stroke-blue1" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
