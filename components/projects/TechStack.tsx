import React from "react";
import Image from "next/image";

type Props = { tech: string };

const TechStack = (props: Props) => {
  return (
    <section className="p3 md:p3lg">
      <div>
        <p className="projectsmalltitle md:smallbold mb-[.56rem] dark:text-blue1">
          Technologies used
        </p>
        <h4 className="projecttitle md:ptitle2 mb-[1.5rem] dark:text-white">
          Tech Stack
        </h4>
      </div>
      <div className="tiles flex">
        <div className="group flex h-[3.3rem] w-[3.3rem] shrink-0 justify-center rounded-full bg-white1 hover:scale-125 hover:border hover:border-grey  hover:bg-white dark:bg-darkbg hover:dark:bg-darkbg2 md:h-[6.25rem] md:w-[6.25rem]">
          <div className="m-auto hidden shrink-0 md:flex">
            <Image
              className="justify-center	 grayscale group-hover:grayscale-0"
              src={props.tech[0]}
              width={50}
              height={50}
              alt="Stack Image"
            />
          </div>
          <div className="m-auto flex shrink-0 md:hidden">
            <Image
              className="justify-center	 grayscale group-hover:grayscale-0"
              src={props.tech[0]}
              width={25}
              height={25}
              alt="Stack Image"
            />
          </div>
          {/* {props.map((props, index) => (
            <SkillTile {...props} key={props.tech} />
          ))} */}
        </div>
        {/* <SkillTile tech={props.tech} /> */}
      </div>
    </section>
  );
};

export default TechStack;
