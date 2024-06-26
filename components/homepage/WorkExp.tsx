import React from "react";
import WorkExpCard from "./WorkExpCard";
import Image from "next/image";

type Props = {};

const WorkExp = (props: Props) => {
  return (
    <section className="mx-auto flex w-[18rem] justify-center pb-[3rem] xs:w-[450px] ss:w-[33rem]  sm:max-w-[40rem] md:max-w-[60rem] xl:max-w-[80rem]">
      <div className="flex flex-col justify-center gap-[1rem] lg:flex-row">
        <div className="flex w-fit flex-col content-center justify-center rounded-[1rem] bg-black px-[1.5rem] pb-[2.39rem] pt-[3.68rem] shadow-lg dark:bg-white1 xs:px-[2.38rem] md:w-auto md:pb-[6.5625rem] md:pl-[6.56rem] md:pr-[8.94rem] md:pt-[9.5rem]">
          <h2 className="mb-[1.49rem] flex h-[5.9rem] w-[12.625rem] shrink-0 flex-col text-left text-white dark:text-black md:h-[7.31rem] md:w-[20rem]">
            Work <span className="underline-magicexp w-fit">Experience</span>
          </h2>
          <p className="smallreg mb-[2.66rem] h-[4.1rem] shrink-0 text-white dark:text-black md:mb-[3.66rem] md:w-[20rem]">
            Progress and milestones: A simple walkthrough of roles, projects,
            and achievements in my career.
          </p>
          <div className="flex shrink-0 md:hidden">
            <div className="flex pt-[1.25rem]">
              <Image
                src={"/Line&Ball.png"}
                alt={"Line & Ball"}
                width={269}
                height={58}
              />
            </div>
          </div>
          <div className="hidden md:flex">
            <div className="flex shrink-0 content-center">
              <div className="flex">
                <Image
                  src={"/Line&Ball.png"}
                  alt={"Line & Ball"}
                  width={356}
                  height={70}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] md:gap-[2.19rem] lg:ml-[1.62rem]">
          <WorkExpCard
            title={"Flower City Virtual Tours"}
            body={"Full Stack Developer"}
            image={"/FCVT.svg"}
          />
          <WorkExpCard
            title={"JS Mastery"}
            body={"Completed: The JSM Masterclass"}
            image={"/jsm-logo.svg"}
          />
          <WorkExpCard
            title={"CodeCademy"}
            body={"Completed: Front-End Engineer Career Path"}
            image={"/codecademy.svg"}
          />
          <WorkExpCard
            title={"Patrick Collins"}
            body={"Completed: Solidity and Blockchain Course"}
            image={"/blockchain.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkExp;
