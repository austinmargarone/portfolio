import React from "react";
import ProcessTiles from "./ProcessTiles";

type Props = {};

const MyProcess = (props: Props) => {
  return (
    <section className="p6 md:p6lg">
      <div className="mb-[1.5rem] md:mb-[2.5rem]">
        <p className="projectsmalltitle mb-[.56rem]">Way of work</p>
        <h4 className="projecttitle mb-[1.5rem]">My Process</h4>
      </div>
      <div className="p6gap md:p6gaplg mx-auto">
        <ProcessTiles />
        <ProcessTiles />
        <ProcessTiles />
        <ProcessTiles />
        <ProcessTiles />
      </div>
    </section>
  );
};

export default MyProcess;
