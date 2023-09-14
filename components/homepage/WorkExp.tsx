import React from "react";
import WorkExpCard from "./WorkExpCard";
import Image from "next/image";

type Props = {};

const WorkExp = (props: Props) => {
  return (
    <section className="mx-auto flex justify-center pb-[3rem] md:max-w-[60rem] xl:max-w-[80rem]">
      <div className="flex flex-col justify-center gap-[1rem] lg:flex-row">
        <div className="flex w-[21.5625rem] flex-col content-center justify-center rounded-[1rem] bg-black px-[2.38rem] pb-[2.39rem] pt-[3.68rem] dark:bg-white1 md:w-auto md:pb-[6.5625rem] md:pl-[6.56rem] md:pr-[8.94rem] md:pt-[9.5rem]">
          <h2 className="mb-[1.49rem] flex h-[5.9rem] w-[12.625rem] shrink-0 flex-col text-left text-white dark:text-black md:h-[7.31rem] md:w-[20rem]">
            Work <span className="underline-magicexp w-fit">Experience</span>
          </h2>
          <p className="smallreg mb-[2.66rem] h-[4.1rem] w-[16.1875rem] shrink-0 text-white dark:text-black md:mb-[3.66rem] md:w-[20rem]">
            Progress and milestones: A simple walkthrough of roles, projects,
            and achievements in my career.
          </p>
          <div className="flex shrink-0 md:hidden">
            <Image src="/Lineexp.svg" width={211} height={1} alt="Line" />
            <div className="flex">
              <Image
                className="stroke-1"
                src="/Ellipseout.svg"
                width={58}
                height={58}
                alt="Eclipesout"
              />
              <Image
                className="absolute ml-3 mt-3 flex"
                src="/Ellipsein.svg"
                width={34}
                height={34}
                alt="Eclipesin"
              />
            </div>
          </div>
          <div className="hidden md:flex">
            <div className="flex shrink-0">
              <Image src="/Lineexp.svg" width={286} height={1} alt="Line" />
              <div className="flex">
                <Image
                  className="stroke-1"
                  src="/Ellipseout.svg"
                  width={70}
                  height={70}
                  alt="Eclipesout"
                />
                <Image
                  className="absolute ml-3 mt-3 flex"
                  src="/Ellipsein.svg"
                  width={44}
                  height={44}
                  alt="Eclipesin"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] md:ml-[1.62rem] md:gap-[2.19rem]">
          <WorkExpCard
            title={"Slack"}
            body={"Product Design - 4 Years Experince"}
            image={"/Slack.svg"}
          />
          <WorkExpCard
            title={"Firefox"}
            body={"Sr. UI Design - 4 Years Experince"}
            image={"/Firefox.svg"}
          />
          <WorkExpCard
            title={"Digital Ocean"}
            body={"UI & Motion Designer - 4 Years Experince"}
            image={"/Ocean.svg"}
          />
          <WorkExpCard
            title={"Mailchimp"}
            body={"UI Designer - 4 Years Experince"}
            image={"/Chimp.svg"}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkExp;
