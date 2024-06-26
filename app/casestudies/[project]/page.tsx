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
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 1;
type Props = {
  params: { project: string };
};

export const metadata: Metadata = {
  title: "Projects | Full Stack Developer | NextJS | React",
  description:
    "View my projects and see what I can do for you. I specialize in building NextJS and React web applications.",
  keywords:
    "Full Stack Developer, NextJS, React, TypeScript, TailwindCSS, GraphQl, MongoDB, NodeJS, Web Development, Frontend",
  openGraph: {
    images: [
      {
        url: `https://austinmargarone.com/meta.png`,
        width: 1200,
        height: 630,
        alt: "Full Stack Developer",
      },
    ],
  },
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <>
      <div className="overflow-x-hidden [&>section]:xs:max-w-[35rem] [&>section]:ss:max-w-[45rem] [&>section]:sm:max-w-[60rem] [&>section]:md:max-w-[80rem] [&>section]:lg:max-w-[100rem] [&>section]:xl:max-w-[150rem]">
        <section>
          <Hero
            title={project.title}
            desktop={project.desktop}
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
          <TechStack tech={project.tech} />
        </section>
        <section>
          <Description description={project.description} />
        </section>
        <section>
          <Statement problem={project.problem} accent={project.accent} />
        </section>
        <div>
          <Design design={project.design} />
        </div>
        <section>
          <MyProcess />
        </section>
        <section>
          <Challenges
            challenges={project.challenges}
            learnings={project.learnings}
          />
        </section>
        <section>
          <OtherCases slug={slug} />
        </section>
        <section>
          <Contact />
        </section>
      </div>
    </>
  );
}
