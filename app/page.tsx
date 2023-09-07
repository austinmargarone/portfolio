import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ServiceCardWhite from "@/components/ServiceCardWhite";
import SkillTile from "@/components/SkillTile";

export default function Home() {
  return (
    <>
      <main>
        <div className="bg-white1 md:pb-[6.01rem]">
          <Hero />
        </div>
        <button>My Work</button>
      </main>
      <section>
        {/* Top Image */}
        <div></div>
        {/* Skills */}
        <div>
          <h2>My Skills</h2>
          <div>
            <SkillTile imageUrl="" />
          </div>
        </div>
        {/* Services */}
        <h2>What service do I provide</h2>
        <div>
          <ServiceCard />
          <ServiceCardWhite />
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
