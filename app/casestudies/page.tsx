import Heading from "@/components/casestudies/Heading";
import Projects from "@/components/casestudies/Projects";
import Contact from "@/components/Contact";
import { getCases } from "@/sanity/sanity-utils";

export const dynamic = "force-dynamic";
export const revalidate = 1;

export default async function sanity() {
  const cases = await getCases();

  return (
    <div className="mx-auto xs:max-w-[28rem] sm:max-w-[50rem] md:max-w-[50rem] lg:max-w-[90rem] ">
      <div>
        <Heading />
      </div>
      <div className="mx-auto flex flex-col gap-[2.5rem] sm:flex-row sm:flex-wrap">
        {cases.map((cases, index) => (
          <Projects {...cases} key={cases._id} />
        ))}
      </div>
      <section className="mt-[2.5rem] sm:pt-[1.95rem]">
        <Contact />
      </section>
    </div>
  );
}
