import React from "react";
import Image from "next/image";

import FeatProjectsCard from "./FeatProjectsCard";

const FeaturedProjects = () => {
  return (
    <section className="mx-auto flex w-fit max-w-[1200px] flex-col justify-center pt-[3rem]">
      <div className="my-[3rem] flex flex-col gap-[2.25rem] md:my-[4.5rem] md:gap-[3rem]">
        <h2 className="">
          Featured <span className="underline-magic w-fit">Projects</span>
        </h2>
        <div className="flex flex-col gap-[2.25rem] md:gap-[3rem]">
          <FeatProjectsCard />
          <FeatProjectsCard />
          <FeatProjectsCard />
        </div>
        <div>
          <div className="hidden justify-center md:flex">
            <button className="projectbutton1 flex">
              <p className="boldbody flex text-white">See more case studies</p>
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
    </section>
  );
};

export default FeaturedProjects;
