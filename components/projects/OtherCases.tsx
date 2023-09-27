import React from "react";
import OtherCasesCard from "./OtherCasesCard";
import { getCases } from "@/sanity/sanity-utils";

export default async function OtherCases() {
  const cases = await getCases();

  return (
    <div>
      <div className="p8 md:p8lg mx-auto dark:bg-darkbg md:px-[8rem] lg:px-[11rem] xl:px-[17.5rem]">
        <div className="mb-[.75rem]">
          <p className="projectsmalltitle md:smallbold mb-[.56rem] dark:text-blue1">
            Projects
          </p>
          <h4 className="projecttitle md:ptitle2 mb-[1.5rem]  dark:text-white">
            Other Case Studies
          </h4>
        </div>
        <div className="mx-auto flex flex-col justify-center gap-[1.5rem] md:flex-row">
          {cases.map((cases, index) => (
            <OtherCasesCard {...cases} key={cases._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
