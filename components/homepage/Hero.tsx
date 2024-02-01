import Image from "next/image";
import Link from "next/link";
import React from "react";
import Email from "./Email";

const Hero = () => {
  return (
    <div className="flex w-fit flex-col justify-center bg-white1 pb-[2rem] pt-[3rem] dark:bg-darkbg xs:mx-auto xs:max-w-[21.5rem] xs:px-[.33rem] ss:max-w-[25rem] sm:max-w-[38rem] md:max-w-[63rem] md:flex-row lg:max-w-[75rem] xl:max-w-[100rem]">
      <div className="mx-auto flex flex-col xs:w-full md:w-1/2">
        <h4 className="title mb-[1.25rem] text-blue dark:text-blue1 md:mb-[1.69rem]">
          HI, I AM AUSTIN
        </h4>
        <h1 className="text-[2.25rem] dark:text-white md:text-[4rem]">
          Professional
          <br />
          <div className="underline-magic w-fit">Web Developer</div>
          Based in USA
        </h1>
        <h4 className="regbody mb-[1.25rem] mt-[.87rem] w-fit dark:text-white1 md:mb-[2.25rem] md:mt-[.62rem] md:w-[31.9375rem]">
          Transforming the web one line of code at a time; Crafting cutting-edge
          digital experiences with precision, passion, and a profound commitment
          to excellence
        </h4>
        <div className="flex flex-col md:flex-row md:gap-[1.13rem]">
          <Link href="/casestudies">
            <button className="herobtn md:herobtnlg mb-[.88rem] flex w-full rounded-[379.77006rem] bg-blue hover:shadow-lg dark:bg-blue1 md:mb-0">
              <p className="herotext text-white md:text-[1.125rem]">My Work</p>
            </button>
          </Link>
          <Email />
        </div>
      </div>
      <div className="heroimg md:heroimglg w-auto md:w-1/2 md:flex-row">
        <Image
          src="/Hero.svg"
          width={757}
          height={541}
          alt="Hero computers"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
