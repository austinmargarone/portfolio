import About from "@/components/homepage/About";
import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/homepage/FeaturedProjects";
import Hero from "@/components/homepage/Hero";
import MySkills from "@/components/homepage/MySkills";
import Services from "@/components/homepage/Services";
import WorkExp from "@/components/homepage/WorkExp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Stack Developer | NextJS | React",
  description:
    "Welcome to my Full Stack Developer porfolio, showcasing my work. I specialize in building NextJS and React web applications.",
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

export default function Home() {
  return (
    <>
      {/*  left right top gaps */}
      <main>
        <div className="mx-auto overflow-x-hidden bg-white1 dark:bg-darkbg md:pb-[6.01rem]">
          <Hero />
        </div>
      </main>
      <section>
        {/* Skills */}
        <div>
          <MySkills />
        </div>
        {/* Services */}
        <div className="dark:bg-darkbg md:bg-white1">
          <Services />
        </div>

        {/* Exp */}
        <div>
          <WorkExp />
        </div>
        {/* Projects */}
        <div>
          <FeaturedProjects />
        </div>
        {/* About */}
        <div className="bg-white1 dark:bg-darkbg">
          <About />
        </div>
        {/* Contact */}
        <div>
          <Contact />
        </div>
      </section>
    </>
  );
}
