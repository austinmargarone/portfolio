import Image from "next/image";
import React from "react";

type Props = { challenges: string[]; learnings: string[] };

const Challenges = (props: Props) => {
  return (
    <div className="p7 md:p7lg">
      <div className="mb-[1.5rem] md:mb-[2.5rem]">
        <p className="projectsmalltitle md:smallbold mb-[.56rem] dark:text-blue1">
          Problem
        </p>
        <h4 className="projecttitle md:ptitle2 mb-[1.5rem] dark:text-white">
          Challenges & Learnings
        </h4>
      </div>
      <div className="p7bg md:p7bglg w-full dark:bg-darkbg">
        <h4 className="boldbody text-red">CHALLENGES</h4>
        <div className="smallreg md:regbody text-slate dark:text-white1">
          {props.challenges.map((challenge) => (
            <div key={challenge} className="mb-[1.25rem] flex">
              <div className="w-[2.5rem] pt-[0.38rem]">
                <Image
                  src="/Challenges.svg"
                  width={20}
                  height={20}
                  alt="Challenges"
                />
              </div>
              <div className="w-[100%]">{challenge}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="p7bg md:p7bglg w-full dark:bg-darkbg">
        <h4 className="boldbody text-green">LEARNINGS</h4>
        <div className="smallreg md:regbody text-slate dark:text-white1">
          {props.learnings.map((learning) => (
            <div key={learning} className="mb-[1.25rem] flex">
              <div className="w-[2.5rem] pt-[0.38rem]">
                <Image src="/tick.svg" width={20} height={20} alt="Tick" />
              </div>
              <div className="w-[100%]">{learning}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;
