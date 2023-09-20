import React from "react";
import OtherCasesCard from "./OtherCasesCard";

type Props = {};

const OtherCases = (props: Props) => {
  return (
    <div className="p8 md:p8lg dark:bg-darkbg">
      <div className="mb-[.75rem]">
        <p className="projectsmalltitle md:smallbold mb-[.56rem] dark:text-blue1">
          Projects
        </p>
        <h4 className="projecttitle md:ptitle2 mb-[1.5rem]  dark:text-white">
          Other Case Studies
        </h4>
      </div>
      <div className="mx-auto flex flex-col gap-[1.5rem] md:flex-row">
        <OtherCasesCard />
        <OtherCasesCard />
      </div>
    </div>
  );
};

export default OtherCases;
