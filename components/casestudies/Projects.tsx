import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="casemain mx-auto flex w-[21.5625rem] shrink-0 flex-col rounded-[.62725rem] border border-black bg-blue1 md:w-[34.375rem]">
        <h4 className="boldp md:projectstitlelg flex justify-center dark:text-white">
          Morrent
        </h4>
        <section className="mx-auto flex">
          <div>
            <Image
              src="/Computer.svg"
              width={290}
              height={165}
              alt="Arrow Right"
            />
          </div>
          <div className="absolute pl-[1.45rem] pt-[.5rem]">
            <Image
              src="/Carrent.svg"
              width={239}
              height={134}
              alt="Arrow Right"
            />
          </div>
        </section>
        <p className="smallreg md:regp flex justify-center dark:text-white1">
          Car Rental Application
        </p>
      </div>
    </>
  );
};

export default Projects;
