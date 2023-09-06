import ServiceCard from "@/components/ServiceCard";
import ServiceCardWhite from "@/components/ServiceCardWhite";
import SkillTile from "@/components/SkillTile";

export default function Home() {
  return (
    <>
      <main>
        <h3>HI, I AM AUSTIN</h3>
        <h1>
          Professional
          <br />
          Web Developer
          <br /> Based in USA
        </h1>
        <h4>
          Transforming the web one line of code at a time: Crafting cutting-edge
          digital experiences with precision, passion, and a profound commitment
          to excellence
        </h4>
        <button>My Work</button>
        <div>austin@fcvt.dev</div>
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
