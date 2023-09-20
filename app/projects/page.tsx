import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";
import { Cars } from "@/components/svg";
import Hero from "@/components/projects/Hero";
import MyRole from "@/components/projects/MyRole";
import Description from "@/components/projects/Description";
import Statement from "@/components/projects/Statement";

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
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section>
          <Contact />
        </section>
      </div>
    </>
  );
};

export default page;
