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
            project={"/Carrent.svg"}
            bg={"blue"}
          />
          <Projects
            title={"Jobit"}
            description={"Job Finding Application"}
            project={"JoBit.svg"}
            bg={"yellow"}
          />
          <Projects
            title={"HipNode"}
            description={"Social Platform for Developers"}
            project={"HipNode.svg"}
            bg={"white1"}
          />
          <Projects
            title={"Trip Guide "}
            description={"Crowdfunding Application"}
            project={"/Filmpire.svg"}
            bg={"blue1"}
          />
          <Projects
            title={"Virtue"}
            description={"Booking Platform"}
            project={"/Virtue.svg"}
            bg={"yellow"}
          />
          <Projects
            title={"Filmpire"}
            description={"AI-Powered Movie Application"}
            project={"Filmpire.svg"}
            bg={"white1"}
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
