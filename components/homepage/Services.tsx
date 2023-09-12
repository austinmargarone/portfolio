import React from "react";
import ServiceCard from "./ServiceCard";

type Props = {};

const Services = (props: Props) => {
  return (
    <section className="services md:serviceslg mx-auto mb-[3rem] flex w-fit flex-col justify-center py-[3rem] md:mb-[4.5rem]  md:max-w-[60rem] xl:max-w-[100rem]">
      <div className="services1 md:services1lg flex flex-col md:w-fit">
        <h2 className="dark:text-white">
          What <span className="underline-magic w-fit">service</span> do I
          provide
        </h2>
        <div className="flex flex-col justify-center gap-[2.5rem] md:flex-row md:flex-wrap">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default Services;
