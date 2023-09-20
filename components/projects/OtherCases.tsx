import React from "react";
import OtherCasesCard from "./OtherCasesCard";

type Props = {};

const OtherCases = (props: Props) => {
  return (
    <div className="p8 md:p8lg">
      <div className="mb-[.75rem]">
        <p className="projectsmalltitle mb-[.56rem]">Problem</p>
        <h4 className="projecttitle mb-[1.5rem]">Challenges & Learnings</h4>
      </div>
      <div className="mx-auto flex flex-col gap-[1.5rem] md:flex-row">
        <OtherCasesCard />
        <OtherCasesCard />
      </div>
    </div>
  );
};

export default OtherCases;
