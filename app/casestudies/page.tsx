import Heading from "@/components/casestudies/Heading";
import Projects from "@/components/casestudies/Projects";
import Contact from "@/components/Contact";
import { getCases } from "@/sanity/sanity-utils";

export default async function sanity() {
  const cases = await getCases();

  return (
    <div className="mx-auto xs:max-w-[28rem] sm:max-w-[50rem] md:max-w-[50rem] lg:max-w-[90rem] ">
      <div>
        <Heading />
      </div>
      <div className="casemain sm:casemainlg mx-auto flex flex-col sm:flex-row sm:flex-wrap">
        {cases.map((cases, index) => (
          <Projects {...cases} key={cases._id} />
        ))}
      </div>
      <section className="mt-[1.25rem] sm:pt-[1.95rem]">
        <Contact />
      </section>
    </div>
  );
}

// const page = () => {
//   return (
//     <>
//       <div className="mx-auto sm:max-w-[50rem] md:max-w-[90rem]">
//         <div>
//           <Heading />
//         </div>
//         <main className="casemain sm:casemainlg mx-auto flex flex-col sm:flex-row sm:flex-wrap">

//         </main>
//         <section className="mt-[1.25rem] sm:pt-[1.95rem]">
//           <Contact />
//         </section>
//       </div>
//     </>
//   );
// };

// export default page;
