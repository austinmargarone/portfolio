import { getProject } from "@/sanity/sanity-utils";
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

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <>
      <div className="[&>section]:xs:max-w-[35rem] [&>section]:ss:max-w-[45rem] [&>section]:sm:max-w-[60rem] [&>section]:md:max-w-[80rem] [&>section]:lg:max-w-[100rem] [&>section]:xl:max-w-[115rem]">
        <section>
          <Hero
            title={project.title}
            desktop_image={project.desktop_image}
            mobile_image={project.mobile_image}
            demo_site={project.demo_site}
            source_code={project.source_code}
          />
        </section>
        <section>
          <MyRole
            my_role={project.my_role}
            start_date={project.start_date}
            end_date={project.end_date}
          />
        </section>
        <section>
          <TechStack tech_stack={project.tech_stack} />
        </section>
        <section>
          <Description description={project.description} />
        </section>
        <section>
          <Statement
            problem={project.problem}
            place_image={project.place_image}
          />
        </section>
        <div>
          <Design design_image={project.design_image} />
        </div>
        <section>
          <MyProcess />
        </section>
        <section>
          <Challenges
            challenge_array={project.challenge_array}
            learnings_array={project.learnings_array}
          />
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
}
