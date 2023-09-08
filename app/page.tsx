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
          <h2>Featured Projects</h2>
          <div></div>
        </div>
        {/* About */}
        <div>
          <h2>What they say about me</h2>
        </div>
        {/* Contact */}
        <div></div>
      </section>
    </>
  );
}
