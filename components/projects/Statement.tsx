import React from "react";
import { Cars } from "../svg";

type Props = {};

const Statement = (props: Props) => {
  return (
    <section className="p5 md:p5lg">
      <div>
        <p className="projectsmalltitle mb-[.56rem]">Problem</p>
        <h4 className="projecttitle">Problem Statement</h4>
      </div>
      <div>
        <p className="projecttext my-[1.5rem]">
          One of the main problems that people face when looking to rent a car
          is the hassle of finding a reliable and user-friendly platform to
          search for and book rental cars. In addition, car owners who want to
          rent out their vehicles often struggle to find a suitable platform to
          list their cars and manage their rentals.
        </p>
      </div>
      <div>
        <Cars />
      </div>
    </section>
  );
};

export default Statement;
