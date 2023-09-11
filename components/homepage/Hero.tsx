import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="mx-auto flex w-full flex-col justify-center bg-white1 pb-[2rem] pt-[3rem] md:flex-row xl:max-w-[120rem]">
      <div className="flex flex-col md:min-w-[32rem]">
        <h4 className="title mb-[1.25rem] md:mb-[1.69rem]">HI, I AM AUSTIN</h4>
        <h1 className="text-[2.25rem] md:text-[4rem]">
          Professional
          <br />
          Web Developer
          {/* z index negative */}
          <br /> Based in USA
        </h1>
        <h4 className="regbody mb-[1.25rem] mt-[.87rem] w-[21.125rem] md:mb-[2.25rem] md:mt-[.62rem] md:w-[31.9375rem]">
          Transforming the web one line of code at a time: Crafting cutting-edge
          digital experiences with precision, passion, and a profound commitment
          to excellence
        </h4>
        <div className="flex flex-col md:flex-row md:gap-[1.13rem]">
          <button className="herobtn md:herobtnlg mb-[.88rem] flex rounded-[379.77006rem] bg-blue md:mb-0">
            <p className="herotext text-white md:text-[1.125rem]">My Work</p>
          </button>
          <div className="herocopy md:herocopylg mb-[1.69rem] flex bg-white md:mb-0 md:w-fit">
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
      <div className="heroimg md:heroimglg md:flex-row">
        <Image src="/Hero.svg" width={757} height={541} alt="Hero computers" />
      </div>
    </div>
  );
};

export default Hero;
