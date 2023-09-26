import { getCases } from "@/sanity/sanity-utils";
import Image from "next/image";
import React from "react";

type Props = {
  params: { cases: string };
};
export default async function Projects({ params }: Props) {
  const cases = await getCases();

  return (
    <>
      <div
        key={cases._id}
        className="casemain sm:casemainlg mx-auto sm:mb-[2.5rem]"
      >
        <div
          style={cases.bg}
          className=" mx-auto flex w-[21.5625rem] shrink-0 flex-col rounded-[.62725rem] border border-black bg-blue1 pb-[.32rem] pt-[2.83rem] sm:h-[20.8rem] sm:w-[34.375rem] sm:pt-[4.25rem]"
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
            {cases.description}
          </h4>
          <p className="smallreg sm:regp flex dark:text-white1">{}</p>
        </div>
      </div>
    </>
  );
}
