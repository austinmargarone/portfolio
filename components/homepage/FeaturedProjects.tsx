import React from "react";
import FeatProjectsCard from "./FeatProjectsCard";

type Props = {};

const FeaturedProjects = (props: Props) => {
  return (
    <section className=" 2xl:mx-auto 2xl:max-w-[120rem] mx-[1.5rem] flex w-full max-w-[28rem] flex-col justify-center sm:mx-auto sm:max-w-[30rem] md:mx-auto md:max-w-[60rem] md:flex-row lg:mx-auto lg:max-w-[75rem] xl:mx-auto xl:max-w-[90rem]">
      <div>
        <div>
          <h2>Featured Projects</h2>
          <div>
            <FeatProjectsCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
