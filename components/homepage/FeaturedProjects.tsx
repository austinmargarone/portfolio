import React from "react";
import Image from "next/image";

import FeatProjectsCard from "./FeatProjectsCard";
import Link from "next/link";

const FeaturedProjects = () => {
  return (
    <section className="mx-[1rem] flex w-fit flex-col justify-center pt-[3rem] xs:mx-auto xs:max-w-[21.5rem] ss:max-w-[25rem] sm:max-w-[40rem] md:max-w-[60rem] xl:max-w-[80rem]">
      <div className="my-[3rem] flex flex-col gap-[2.25rem] md:my-[4.5rem] md:gap-[3rem]">
        <h2 className="dark:text-white">
          Featured <span className="underline-magic w-fit">Projects</span>
        </h2>
        <div className="flex flex-col gap-[2.25rem] md:gap-[3rem]">
          <FeatProjectsCard
            title={"Morrent - A Car Rental Application"}
            tech={"ReactJS, Next.js"}
            tech1={"Nodejs, MongoDB"}
            link={"/casestudies/morrent"}
            bg={"bg-blue1"}
            featuredImage={"/Morrent.png"}
          />
          <FeatProjectsCard
            title={"JobIT - A Job Finding Application"}
            tech={"ReactJS, Next.js"}
            tech1={"TypeScript, Nodejs"}
            link={"/casestudies/jobit"}
            bg={"bg-darkbg"}
            featuredImage={"/JobIt.png"}
          />
          <FeatProjectsCard
            title={"Filmpire - A Movie Search Application"}
            tech={"ReactJS, Tailwind"}
            tech1={"JavaScript, Nodejs"}
            link={"/casestudies/filmpire"}
            bg={"bg-red"}
            featuredImage={"/Filmpire.png"}
          />
        </div>
        <div>
          <div className="hidden justify-center md:flex">
            <Link href="/casestudies">
              <button className="projectbutton1 flex dark:bg-blue1">
                <p className="boldbody flex text-white">
                  See More Case Studies
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
