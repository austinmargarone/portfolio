import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/homepage/Hero";
import MySkills from "@/components/homepage/MySkills";
import Services from "@/components/homepage/Services";
import WorkExp from "@/components/homepage/WorkExp";

export default function Home() {
  return (
    <>
      <main>
        <div className="bg-white1 md:pb-[6.01rem]">
          <Hero />
        </div>
      </main>
      <section>
        {/* Skills */}
        <div>
          <MySkills />
        </div>
        {/* Services */}
        <div className="bg-white1">
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
        <div></div>
        {/* Contact */}
        <div></div>
      </section>
    </>
  );
}
