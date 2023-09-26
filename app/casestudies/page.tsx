import Heading from "@/components/casestudies/Heading";
import Contact from "@/components/Contact";
import { getCases } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function sanity() {
  const cases = await getCases();

  return (
    <div className="mx-auto xs:max-w-[21.5rem] ss:max-w-[25rem] sm:max-w-[40rem] md:max-w-[40rem] lg:max-w-[77rem] ">
      <div>
        <Heading />
      </div>
      <main className="casemain sm:casemainlg mx-auto flex flex-col sm:flex-row sm:flex-wrap">
        {cases.map((cases) => (
          <div key={cases._id}>
            <div className="w-[21.5625rem] sm:mb-[2.5rem] sm:w-[34.375rem]">
              <div
                className={`${cases.bg} mx-auto flex shrink-0 flex-col rounded-[.62725rem] border border-black  pb-[.32rem] pt-[2.83rem] sm:h-[20.8rem] sm:pt-[4.25rem]`}
              >
                <div className="mx-auto flex sm:hidden">
                  <div>
                    <Image
                      src="/Computer.svg"
                      width={290}
                      height={165}
                      alt="Computer"
                    />
                  </div>
                  <div className="absolute pl-[1.45rem] pt-[.5rem]">
                    <Image
                      src={cases.image}
                      width={239}
                      height={134}
                      alt="Project Image"
                    />
                  </div>
                </div>
                <div className="mx-auto hidden sm:flex">
                  <div>
                    <Image
                      src="/Computer.svg"
                      width={430}
                      height={255}
                      alt="Computer"
                    />
                  </div>
                  <div className="absolute pl-[2.15rem] pt-[1rem]">
                    <Image
                      src={cases.image}
                      width={355}
                      height={206}
                      alt="Project Image"
                    />
                  </div>
                </div>
              </div>
              <div className="mx-auto pl-[3.1rem] pt-[1.22rem] sm:pl-[3.6rem] sm:pt-[1.95rem]">
                <h4 className="boldp sm:projectstitlelg flex dark:text-white">
                  {cases.title}
                </h4>
                <p className="smallreg sm:regp flex dark:text-white1">
                  {cases.description}
                </p>
              </div>
            </div>
          </div>
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
