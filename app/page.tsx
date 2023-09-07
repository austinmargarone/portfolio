import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";

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
          <div></div>
        </div>
        {/* Services */}
        <div></div>
        {/* Exp */}
        <div>
          <div></div>
          <div></div>
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
