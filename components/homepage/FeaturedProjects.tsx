import React from "react";
import Image from "next/image";

import FeatProjectsCard from "./FeatProjectsCard";

const FeaturedProjects = () => {
  return (
    <section className="mx-auto flex w-fit flex-col justify-center pt-[3rem] md:max-w-[60rem] xl:max-w-[80rem]">
      <div className="my-[3rem] flex flex-col gap-[2.25rem] md:my-[4.5rem] md:gap-[3rem]">
        <h2 className="dark:text-white">
          Featured <span className="underline-magic w-fit">Projects</span>
        </h2>
        <div className="flex flex-col gap-[2.25rem] md:gap-[3rem]">
          <FeatProjectsCard
            title={"Morrent - A Car Rental Application"}
            tech={"ReactJS, Next.js"}
            tech1={"Nodejs, MongoDB"}
            link={""}
            bg={"#416CEA"}
          />
          <FeatProjectsCard
            title={"JobIT - A Job Finding Application"}
            tech={"ReactJS, Next.js"}
            tech1={"Nodejs, MongoDB"}
            link={""}
            bg={"#0BAB7C"}
          />
          <FeatProjectsCard
            title={"Hipnode - A Social Media Application"}
            tech={"ReactJS, Next.js"}
            tech1={"Nodejs, MongoDB"}
            link={""}
            bg={"#FF6934"}
          />
        </div>
        <div>
          <div className="hidden justify-center md:flex">
            <button className="projectbutton1 flex dark:bg-blue1">
              <p className="boldbody flex text-white">See More Case Studies</p>
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
