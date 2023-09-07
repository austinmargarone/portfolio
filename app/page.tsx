import Hero from "@/components/Hero";

import WorkExp from "@/components/WorkExp";

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
        <div className="bg-white1"></div>
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
