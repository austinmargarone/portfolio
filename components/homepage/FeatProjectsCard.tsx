import React from "react";
import Image from "next/image";

type Props = {};

const FeatProjectsCard = (props: Props) => {
  return (
    <div className="flex h-[32.125rem] w-[21.6rem] flex-col rounded-[1rem] bg-slate md:h-[27.75rem] md:w-[79.375rem] md:flex-row">
      <div className="ml-[1.5rem] flex flex-col">
        <h3 className="projecttitle mr-[1.63rem] mt-[2.5rem] w-[18.4375rem] text-left text-white md:w-[28.25rem]">
          Morrent - A Car Rental Application
        </h3>
        <div className="mb-[1.88rem]  mt-[1.5rem] flex gap-[1.25rem]">
          <button className="projectbutton flex bg-yellow">
            <p className="smallreg text-white">ReactJS, Next.js</p>
          </button>
          <button className="projectbutton bg-yellow">
            <p className="smallreg text-white">Nodejs, MongoDB</p>
          </button>
        </div>
        <div className="flex">
          <button className="boldbody mr-[.52rem] text-white">
            See Detail Project
          </button>
          <Image
            className="shrink-0 stroke-1"
            src="/Arrow.svg"
            width={35}
            height={0}
            alt="Arrow"
          />
        </div>
      </div>
      <div className="mx-auto mt-[1.49rem] flex flex-col">
        <div className="">
          <Image
            src="/Display.svg"
            width={325}
            height={155}
            alt="Computer & phone"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatProjectsCard;
