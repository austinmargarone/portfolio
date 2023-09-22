import React from "react";
import { Cars } from "../svg";
import Image from "next/image";

type Props = {};

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
          One of the main problems that people face when looking to rent a car
          is the hassle of finding a reliable and user-friendly platform to
          search for and book rental cars. In addition, car owners who want to
          rent out their vehicles often struggle to find a suitable platform to
          list their cars and manage their rentals.
        </p>
      </div>
      <div className="mx-auto">
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
