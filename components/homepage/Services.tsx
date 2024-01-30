import React from "react";
import ServiceCard from "./ServiceCard";
import { Level, Pointer, SEO, Code } from "../svg";

const Services = () => {
  return (
    <section className="services md:serviceslg mx-auto mb-[3rem] flex w-fit flex-col justify-center py-[3rem] xs:max-w-[25rem] sm:max-w-[42rem] md:mb-[4.5rem] md:h-full md:max-w-[100rem] xl:max-w-[100rem]">
      <div className="services1 md:services1lg flex flex-col md:w-fit">
        <h2 className="dark:text-white">
          What <span className="underline-magic w-fit">Service</span> Do I
          Provide
        </h2>
        <div className="flex flex-col justify-center gap-[2.5rem] sm:flex-row sm:flex-wrap">
          <ServiceCard
            title={"Analytics & SEO"}
            body={
              "Implement tracking & analytics tools to monitor website performance & improve SEO."
            }
            ServiceImage={SEO}
          />
          <ServiceCard
            title={"Front-End Dev"}
            body={
              "Front-end dev includes creating the user interface and interactive elements of websites and apps."
            }
            ServiceImage={Pointer}
          />
          <ServiceCard
            title={"Back-End Dev"}
            body={
              "Backend development powers websites and apps by building server-side logic and databases."
            }
            ServiceImage={Code}
          />
          <ServiceCard
            title={"Web Optimization"}
            body={
              "Web optimization focuses on improving website performance for a smoother user experience"
            }
            ServiceImage={Level}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
