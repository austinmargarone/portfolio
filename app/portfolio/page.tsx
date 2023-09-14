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
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
        </main>
        <section>
          <Contact />
        </section>
      </div>
    </>
  );
};

export default page;
