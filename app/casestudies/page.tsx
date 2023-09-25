import Contact from "@/components/Contact";
import Heading from "@/components/casestudies/Heading";
import Projects from "@/components/casestudies/Projects";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mx-auto sm:max-w-[50rem] md:max-w-[90rem]">
        <div>
          <Heading />
        </div>
        <main className="casemain sm:casemainlg mx-auto flex flex-col sm:flex-row sm:flex-wrap">
          <Projects
            params={{
              project: "",
            }}
          />
          <Projects
            params={{
              project: "",
            }}
          />

          {/* <Projects
            title={"Morrent"}
            description={"Car Rental Application"}
            project={"/Carrent.svg"}
            bg={""}
          />
          <Projects
            title={"Jobit"}
            description={"Job Finding Application"}
            project={"JoBit.svg"}
            bg={"#0BAB7C"}
          />
          <Projects
            title={"HipNode"}
            description={"Social Platform for Developers"}
            project={"HipNode.svg"}
            bg={"#FF6934"}
          />
          <Projects
            title={"Trip Guide "}
            description={"Crowdfunding Application"}
            project={"/Filmpire.svg"}
            bg={"#316BFF"}
          />
          <Projects
            title={"Virtue"}
            description={"Booking Platform"}
            project={"/Virtue.svg"}
            bg={"#4ACD8D"}
          />
          <Projects
            title={"Filmpire"}
            description={"AI-Powered Movie Application"}
            project={"Filmpire.svg"}
            bg={"#DB202C"}
          /> */}
        </main>
        <section className="mt-[1.25rem] sm:pt-[1.95rem]">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default page;
