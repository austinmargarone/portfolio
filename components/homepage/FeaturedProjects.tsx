import React from "react";
import Image from "next/image";

import FeatProjectsCard from "./FeatProjectsCard";


const FeaturedProjects = () => {
  return (
    <section className=" 2xl:mx-auto 2xl:max-w-[120rem] mx-auto flex w-full max-w-[28rem] flex-col justify-center sm:mx-auto sm:max-w-[30rem] md:mx-auto md:max-w-[60rem] md:flex-row lg:mx-auto lg:max-w-[75rem] xl:mx-auto xl:max-w-[90rem]">
      <div className="my-[3rem] md:my-[4.5rem]">
        <div className="flex flex-col gap-[2.25rem] md:gap-[3rem]">
          <h2 className="">Featured Projects</h2>
          <div className="flex flex-col gap-[2.25rem] md:gap-[3rem]">
            <FeatProjectsCard />
            <FeatProjectsCard />
            <FeatProjectsCard />
          </div>
          <div>
            <div className="hidden justify-center md:flex">
              <button className="projectbutton1 flex">
                <p className="boldbody flex text-white">
                  See more case studies
                </p>
                <div className="flex shrink-0">
                  <Image
                    src="/Arrow1.svg"
                    width={16}
                    height={0}
                    alt="Arrow Right"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
