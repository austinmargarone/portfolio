import React from "react";
import ServiceCard from "./ServiceCard";

<<<<<<< HEAD
const Services = () => {
=======
type Props = { title: string; body: string; image: string };

const Services = (props: Props) => {
>>>>>>> 18a9869d0d7611dc363c69d07e0251e22a9bb1ce
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
