import Heading from "@/components/casestudies/Heading";
import Projects from "@/components/casestudies/Projects";
import Contact from "@/components/Contact";
import { getCases } from "@/sanity/sanity-utils";

export const dynamic = "force-dynamic";
export const revalidate = 1;

export default async function sanity() {
  const cases = await getCases();

  return (
    <div className="mx-[1rem] xs:mx-auto  xs:max-w-[28rem] sm:max-w-[50rem] md:max-w-[50rem] lg:max-w-[90rem] ">
      <div>
        <Heading />
      </div>
      <div className="mx-auto mb-[3rem] flex flex-col gap-[1.25rem] sm:mb-[4.5rem] sm:flex-row sm:flex-wrap sm:gap-[2.25rem]">
        {cases.map((cases, index) => (
          <Projects {...cases} key={cases._id} />
        ))}
      </div>
      <section>
        <div className="mt-[3rem] sm:mt-[4.5rem]">
          <Contact />
        </div>
      </section>
    </div>
  );
}
