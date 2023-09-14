import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  project: string;
  bg: string;
};

const Projects = (props: Props) => {
  return (
    <>
      <div
        style={{ backgroundColor: props.bg }}
        className="casemain mx-auto flex w-[21.5625rem] shrink-0 flex-col rounded-[.62725rem] border border-black bg-blue1 md:w-[34.375rem]"
      >
        <h4 className="boldp md:projectstitlelg flex justify-center dark:text-white">
          {props.title}
        </h4>
        <section className="mx-auto flex">
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
              src={props.project}
              width={239}
              height={134}
              alt="Project Image"
            />
          </div>
        </section>
        <p className="smallreg md:regp flex justify-center dark:text-white1">
          {props.description}
        </p>
      </div>
    </>
  );
};

export default Projects;
