import Contact from "@/components/Contact";
import Heading from "@/components/casestudies/Heading";
import Projects from "@/components/casestudies/Projects";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mx-auto md:max-w-[60rem] xl:max-w-[90rem]">
        <div>
          <Heading />
        </div>
        <main className="casemain md:casemainlg mx-auto flex flex-col md:flex-row md:flex-wrap">
          <Projects
            title={"Morrent"}
            description={"Car Rental Application"}
            project={""}
          />
          <Projects
            title={"Jobit"}
            description={"Job Finding Application"}
            project={""}
          />
          <Projects
            title={"HipNode"}
            description={"Social Platform for Developers"}
            project={""}
          />
          <Projects
            title={"Trip Guide "}
            description={"Crowdfunding Application"}
            project={""}
          />
          <Projects
            title={"Virtue"}
            description={"Booking Platform"}
            project={""}
          />
          <Projects
            title={"Filmpire"}
            description={"AI-Powered Movie Application"}
            project={""}
          />
        </main>
        <section>
          <Contact />
        </section>
      </div>
    </>
  );
};

export default page;
