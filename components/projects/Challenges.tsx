import Image from "next/image";
import React from "react";

type Props = { challenges: string; learnings: string };

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
          <div className="mb-[1.25rem] flex">
            <div className="w-[2.5rem] pt-[0.38rem]">
              <Image
                src="/Challenges.svg"
                width={20}
                height={20}
                alt="Challenges"
              />
            </div>
            <div className="w-[100%]">{props.challenges[0]}</div>
          </div>
          <div className="mb-[1.25rem] flex">
            <div className="w-[2.5rem] pt-[0.38rem]">
              <Image
                src="/Challenges.svg"
                width={20}
                height={20}
                alt="Challenges"
              />
            </div>
            <div className="w-[100%] pt-[0.38rem]">{props.challenges[1]}</div>
          </div>
          <div className="flex">
            <div className="w-[2.5rem] pt-[0.38rem]">
              <Image
                src="/Challenges.svg"
                width={20}
                height={20}
                alt="Challenges"
              />
            </div>
            <div className="w-[100%]">{props.challenges[2]}</div>
          </div>
        </div>
      </div>
      <div className="p7bg md:p7bglg w-full dark:bg-darkbg">
        <h4 className="boldbody text-green">LEARNINGS</h4>
        <div className="smallreg md:regbody text-slate dark:text-white1">
          <div className="mb-[1.25rem] flex">
            <div className="w-[2.5rem] pt-[0.38rem]">
              <Image src="/tick.svg" width={20} height={20} alt="Tick" />
            </div>
            <div className="w-[100%]">{props.learnings[0]}</div>
          </div>
          <div className="mb-[1.25rem] flex">
            <div className="w-[2.5rem] pt-[0.38rem]">
              <Image src="/tick.svg" width={20} height={20} alt="Tick" />
            </div>
            <div className="w-[100%]">{props.learnings[1]}</div>
          </div>
          <div className="mb-[1.25rem] flex">
            <div className="w-[2.5rem] pt-[0.38rem]">
              <Image src="/tick.svg" width={20} height={20} alt="Tick" />
            </div>
            <div className="w-[100%]">{props.learnings[2]}</div>
          </div>
          <div className="flex">
            <div className="w-[2.5rem] pt-[0.38rem]">
              <Image src="/tick.svg" width={20} height={20} alt="Tick" />
            </div>
            <div className="w-[100%]">{props.learnings[3]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
