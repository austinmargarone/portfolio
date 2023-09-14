import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="services md:serviceslg mx-auto mb-[3rem] flex w-fit flex-col justify-center py-[3rem] md:mb-[4.5rem]  md:max-w-[60rem] xl:max-w-[100rem]">
      <div className="services1 md:services1lg flex flex-col md:w-fit">
        <h2 className="dark:text-white">
          What <span className="underline-magic w-fit">Service</span> Do I
          Provide
        </h2>
        <div className="flex flex-col justify-center gap-[2.5rem] md:flex-row md:flex-wrap">
          <ServiceCard
            title={"Analytics & SEO"}
            body={
              "Implement tracking & analytics tools to monitor website performance & improve SEO."
            }
            image={"/seo.svg"}
          />
          <ServiceCard
            title={"Front-End Dev"}
            body={
              "Front-end dev includes creating the user interface and interactive elements of websites and apps."
            }
            image={"/Pointer.svg"}
          />
          <ServiceCard
            title={"Back-End Dev"}
            body={
              "Front-end includes creating the user interface and interactive elements of websites and apps."
            }
            image={"/Code.svg"}
          />
          <ServiceCard
            title={"Web Optimization"}
            body={
              "Web optimization focuses on improving website performance for a smoother user experience"
            }
            image={"/Level.svg"}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
