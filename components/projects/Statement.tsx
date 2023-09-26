import React from "react";
import Image from "next/image";

type Props = { problem: string; place_image: string };

const Statement = (props: Props) => {
  return (
    <section className="p5 md:p5lg">
      <div className="">
        <p className="projectsmalltitle md:smallbold mb-[.56rem] dark:text-blue1">
          Problem
        </p>
        <h4 className="projecttitle md:ptitle2 dark:text-white">
          Problem Statement
        </h4>
      </div>
      <div>
        <p className="projecttext md:regp my-[1.5rem] dark:text-white1">
          {props.problem}
        </p>
      </div>
      <div className="mx-auto">
        {props.place_image}
        <Image
          className="w-[348px] md:w-[879px]"
          src="/Car.png"
          width={348}
          height={363}
          alt="Computer"
        />
      </div>
    </section>
  );
};

export default Statement;
