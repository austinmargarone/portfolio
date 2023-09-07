import Hero from "@/components/Hero";

import Services from "@/components/Services";
import SkillTile from "@/components/SkillTile";

export default function Home() {
  return (
    <>
      <main>
        <div className="bg-white1 md:pb-[6.01rem]">
          <Hero />
        </div>
      </main>
      <section>
        {/* Top Image */}
        <div></div>
        {/* Skills */}
        <div></div>
        {/* Services */}
        <div className="bg-white1">
          <Services />
        </div>
        {/* Exp */}
        <div>
          <div></div>
          <div></div>
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
