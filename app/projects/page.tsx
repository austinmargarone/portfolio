import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";
import { ArrowRight1, Globe, Github } from "@/components/svg";
import SkillTile from "@/components/projects/SkillTile";

const page = () => {
  return (
    <>
      <div>
        <section className="p1">
          <div className="mx-auto flex w-full flex-col">
            <h4 className="title mx-auto mb-[.62rem] text-blue dark:text-blue1 md:mb-[1.69rem]">
              Web Dev Project
            </h4>
            <h1 className="pheading">Morrent - A Car Rental Website</h1>
          </div>
          <div className="my-[1.5rem]">
            <Image src="/Morrent.svg" width={345} height={163} alt="Computer" />
          </div>
          <div className="flex gap-[2.5625rem]">
            <div className="flex">
              <Globe />
              <p>Demo Site</p>
              <ArrowRight1 />
            </div>
            <div className="flex">
              <Github />
              <p>Demo Site</p>
              <ArrowRight1 />
            </div>
            <div></div>
          </div>
        </section>
        <section className="p2 md:p2lg flex-col">
          <div>
            <p className="smallbold mb-[.62rem]">My Role</p>
            <p className="boldp">Software Engineer</p>
          </div>
          <div>
            <p className="smallbold mb-[.62rem]">Start Date</p>
            <p className="boldp">02/03/2023</p>
          </div>
          <div>
            <p className="smallbold mb-[.62rem]">End Date</p>
            <p className="boldp">02/03/2023</p>
          </div>
        </section>
        <section className="p3 md:p3lg">
          <div>
            <p className="p3techsmall mb-[.56rem]">Technologies used</p>
            <h4 className="p3tech mb-[1.5rem]">Tech Stack</h4>
          </div>
          <div className="tiles flex">
            <SkillTile />
            <SkillTile />
            <SkillTile />
            <SkillTile />
            <SkillTile />
            <SkillTile />
            <SkillTile />
            <SkillTile />
            <SkillTile />
            <SkillTile />
            <SkillTile />
            <SkillTile />
            <SkillTile />
            <SkillTile />
          </div>
        </section>
        <section></section>
        <section></section>
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
