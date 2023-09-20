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
      <div className="mx-auto xs:max-w-[22.5rem] ss:max-w-[30rem] sm:max-w-[45rem] md:max-w-[70rem] lg:max-w-[80rem] xl:max-w-[90rem]">
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
        <section>
          <Design />
        </section>
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
