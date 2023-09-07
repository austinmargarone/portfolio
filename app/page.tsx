import Hero from "@/components/Hero";
import MySkills from "@/components/homepage/MySkills";
import ServiceCard from "@/components/homepage/ServiceCard";
import ServiceCardWhite from "@/components/homepage/ServiceCardWhite";

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
        <div>
          <MySkills />
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
