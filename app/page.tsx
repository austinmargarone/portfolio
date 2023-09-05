import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      <main>
        <h1>HI, I AM AUSTIN</h1>
        <h2>
          Professional
          <br />
          Web Developer
          <br /> Based in USA
        </h2>
        <h3>
          Transforming the web one line of code at a time: Crafting cutting-edge
          digital experiences with precision, passion, and a profound commitment
          to excellence
        </h3>
        <button>My Work</button>
        <div>austin@fcvt.dev</div>
      </main>
      <body>
        {/* Top Image */}
        <div></div>
        {/* Skills */}
        <div>
          <h1>My Skills</h1>
          <div></div>
        </div>
        {/* Services */}
        <h1>What service do I provide</h1>
        <div>
          <ServiceCard />
        </div>
        {/* Exp */}
        <div>
          <div></div>
          <div></div>
        </div>
        {/* Projects */}
        <div>
          <h1>Featured Projects</h1>
          <div></div>
        </div>
        {/* About */}
        <div>
          <h1>What they say about me</h1>
        </div>
        {/* Contact */}
        <div></div>
      </body>
    </>
  );
}
