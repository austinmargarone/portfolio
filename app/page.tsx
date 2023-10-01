import About from "@/components/homepage/About";
import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/homepage/FeaturedProjects";
import Hero from "@/components/homepage/Hero";
import MySkills from "@/components/homepage/MySkills";
import Services from "@/components/homepage/Services";
import WorkExp from "@/components/homepage/WorkExp";
import { getTestimonials } from "@/sanity/sanity-utils";

export const dynamic = "force-dynamic";
export const revalidate = 1;
type Props = {
  params: { testimonials: string };
};

export default async function Home({ params }: Props) {
  const testimonials = await getTestimonials();
  return (
    <>
      {/*  left right top gaps */}
      <main>
        <div className="mx-auto bg-white1 dark:bg-darkbg md:pb-[6.01rem]">
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
          {testimonials.slice(0).map((testimonials: string) => (
            <About
              title={testimonials.title}
              name={testimonials.name}
              content={testimonials.content}
              _id={testimonials._id}
              image={testimonials.image}
              key={testimonials._id}
            />
          ))}
        </div>
        {/* Contact */}
        <div>
          <Contact />
        </div>
      </section>
    </>
  );
}
