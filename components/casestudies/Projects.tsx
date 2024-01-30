import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Projects(cases: any) {
  return (
    <>
      <div
        key={cases._id}
        className="casemain sm:casemainlg mx-auto sm:mb-[2.5rem]"
      >
        <div
          style={{ backgroundColor: cases.bg }}
          className=" mx-auto flex w-[21rem] shrink-0 flex-col rounded-[.62725rem] border border-black bg-blue1 pb-[.32rem] pt-[2.83rem] hover:shadow-lg sm:h-[20.8rem] sm:w-[34.375rem] sm:pt-[4.25rem]"
        >
          <Link href={cases.case_study} className="mx-auto">
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
          </Link>
          <Link href={cases.case_study} className="mx-auto">
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
          </Link>
        </div>
        <div className="mx-auto flex justify-between pl-[1.5rem] pt-[1.22rem] sm:pl-[3.6rem] sm:pt-[1.95rem]">
          <Link href={cases.case_study}>
            <div className="flex-col">
              <h4 className="boldp sm:projectstitlelg flex dark:text-white">
                {cases.title}
              </h4>
              <p className="smallreg sm:regp flex dark:text-white1">
                {cases.description}
              </p>
            </div>
          </Link>
          <div className="flex">
            <Link href={cases.case_study}>
              <button className="mr-[.5rem] mt-[.5rem] rounded-sm bg-blue px-[.5rem] py-[.2rem] hover:shadow-lg dark:bg-blue1 sm:mr-[1.5rem] sm:mt-[.5rem] sm:px-[1rem] sm:py-[.66rem]">
                <p className="hidden text-white dark:text-black sm:block">
                  Learn More
                </p>
                <p className="flex text-white dark:text-black sm:hidden">
                  See Case
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
