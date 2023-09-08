import React from "react";
import ServiceCard from "./ServiceCard";

type Props = {};

const Services = (props: Props) => {
  return (
    <section className="services md:serviceslg 2xl:mx-auto 2xl:max-w-[120rem] mx-[1.5rem] flex w-full max-w-[28rem] flex-col justify-center pb-[2rem] pt-[3rem] sm:mx-auto sm:max-w-[30rem] md:mx-auto md:max-w-[60rem] md:flex-row lg:mx-auto lg:max-w-[75rem] xl:mx-auto xl:max-w-[100rem]">
      <div className="services1 md:services1lg flex md:w-fit md:flex-col">
        <h2>What service do I provide</h2>
        <div className="flex flex-col gap-[2.5rem] md:flex-row md:flex-wrap">
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
