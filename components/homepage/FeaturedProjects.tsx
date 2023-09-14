import React from "react";
import Image from "next/image";
import featured from "constants/featured.json";
import FeatProjectsCard from "./FeatProjectsCard";

const FeaturedProjects = () => {
  const data = JSON.parse(JSON.stringify(featured));

  return (
    <section className="mx-auto flex w-fit flex-col justify-center pt-[3rem] md:max-w-[60rem] xl:max-w-[80rem]">
      <div className="my-[3rem] flex flex-col gap-[2.25rem] md:my-[4.5rem] md:gap-[3rem]">
        <h2 className="dark:text-white">
          Featured <span className="underline-magic w-fit">Projects</span>
        </h2>
        <div className="flex flex-col gap-[2.25rem] md:gap-[3rem]">
          {data.slice(0, 4).map((FeaturedCardProps: featured) => (
            <div key={FeaturedCardProps._id}>
              <FeatProjectsCard
                title={FeaturedCardProps.title}
                tech={FeaturedCardProps.tech}
                tech1={FeaturedCardProps.tech1}
                link={FeaturedCardProps.link}
                bg={FeaturedCardProps.bg}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[2.25rem] md:gap-[3rem]">
          {featured.map(featured => (
            return (
            <div key={featured.id}>
              <FeatProjectsCard
                title={featured.title}
                tech={featured.tech}
                tech1={featured.tech1}
                link={featured.link}
                bg={featured.bg}
              />
            </div>
            )
          ))}
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
