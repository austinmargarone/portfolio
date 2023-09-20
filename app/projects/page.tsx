import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";
import Hero from "@/components/projects/Hero";
import MyRole from "@/components/projects/MyRole";
import Description from "@/components/projects/Description";
import Statement from "@/components/projects/Statement";
import Design from "@/components/projects/Design";
import MyProcess from "@/components/projects/MyProcess";
import Challenges from "@/components/projects/Challenges";

const page = () => {
  return (
    <>
      <div>
        <section>
          <Hero />
        </section>
        <section>
          <MyRole />
        </section>
        <section>
          <MyRole />
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
        <section></section>
        <section>
          <Contact />
        </section>
      </div>
    </>
  );
};

export default page;
