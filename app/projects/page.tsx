import Contact from "@/components/Contact";
import React from "react";
import Hero from "@/components/projects/Hero";
import MyRole from "@/components/projects/MyRole";
import Description from "@/components/projects/Description";
import Statement from "@/components/projects/Statement";
import Design from "@/components/projects/Design";
import MyProcess from "@/components/projects/MyProcess";
import Challenges from "@/components/projects/Challenges";
import OtherCases from "@/components/projects/OtherCases";
import TechStack from "@/components/projects/TechStack";

const page = () => {
  return (
    <>
      <div className="[&>section]xs:max-w-[25rem] [&>section]ss:max-w-[32rem] [&>section]sm:max-w-[45rem] [&>section]lg:max-w-[80rem] [&>section]xl:max-w-[90rem] [&>section]md:max-w-[70rem]">
        <section>
          <Hero />
        </section>
        <section>
          <MyRole />
        </section>
        <section>
          <TechStack />
        </section>
        <section>
          <Description />
        </section>
        <section>
          <Statement />
        </section>
        <div>
          <Design />
        </div>
        <section>
          <MyProcess />
        </section>
        <section>
          <Challenges />
        </section>
        <section>
          <OtherCases />
        </section>
        <section>
          <Contact />
        </section>
      </div>
    </>
  );
};

export default page;
