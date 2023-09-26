import Heading from "@/components/casestudies/Heading";
import Projects from "@/components/casestudies/Projects";
import Contact from "@/components/Contact";
import { getCases } from "@/sanity/sanity-utils";

export default async function sanity() {
  const cases = await getCases();

  return (
    <div className="mx-auto xs:max-w-[25rem] ss:max-w-[25rem] sm:max-w-[40rem] md:max-w-[40rem] lg:max-w-[77rem] ">
      <div>
        <Heading />
      </div>
      <main className="casemain sm:casemainlg mx-auto flex flex-col sm:flex-row sm:flex-wrap">
        {cases.map((cases) => (
          <Projects {...cases} key={cases._id} />
        ))}
      </main>
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
