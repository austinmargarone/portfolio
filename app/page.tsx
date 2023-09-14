import About from "@/components/homepage/About";
import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/homepage/FeaturedProjects";
import Hero from "@/components/homepage/Hero";
import MySkills from "@/components/homepage/MySkills";
import Services from "@/components/homepage/Services";
import WorkExp from "@/components/homepage/WorkExp";

export default function Home() {
  return (
    <>
      {/*  left right top gaps */}
      <main>
        <div className="bg-white1 dark:bg-darkbg md:pb-[6.01rem]">
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
          <div>
            <FeaturedProjects />
          </div>
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
