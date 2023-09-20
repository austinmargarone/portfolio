import Image from "next/image";
import React from "react";

type Props = {};

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
      <div className="p7bg md:p7bglg dark:bg-darkbg">
        <h4 className="boldbody text-red">CHALLENGES</h4>
        <div className="smallreg md:regbody text-slate dark:text-white1">
          <div className="mb-[1.25rem] flex">
            <div className="w-[6rem]">
              <Image
                src="/Challenges.svg"
                width={20}
                height={20}
                alt="Challenges"
              />
            </div>
            <div>
              Gained extensive knowledge of full authentication and
              authorization implementation, including the use of
              industry-standard security protocols such as JSON Web Tokens.
            </div>
          </div>
          <div className="mb-[1.25rem] flex">
            <div className="w-[6rem]">
              <Image
                src="/Challenges.svg"
                width={20}
                height={20}
                alt="Challenges"
              />
            </div>
            <div>
              We conducted brainstorming and carefully weighed our options
              before making a decision. Furthermore, using NextJS was a new
              experience for us, and we encountered difficulties while
              implementing its features. Finally, we had to work under time
              constraints, which added pressure to the project.
            </div>
          </div>
          <div className="flex">
            <div className="w-[6rem]">
              <Image
                src="/Challenges.svg"
                width={20}
                height={20}
                alt="Challenges"
              />
            </div>
            <div>
              However, we collaborated effectively to overcome these obstacles
              and ultimately delivered a high-quality product within the given
              timeline.
            </div>
          </div>
        </div>
      </div>
      <div className="p7bg md:p7bglg dark:bg-darkbg">
        <h4 className="boldbody text-green">LEARNINGS</h4>
        <div className="smallreg md:regbody text-slate dark:text-white1">
          <div className="mb-[1.25rem] flex">
            <div className="w-[6rem]">
              <Image src="/tick.svg" width={20} height={20} alt="Tick" />
            </div>
            <div>
              Gained extensive knowledge of full authentication and
              authorization implementation, including the use of
              industry-standard security protocols such as JSON Web Tokens.
            </div>
          </div>
          <div className="mb-[1.25rem] flex">
            <div className="w-[6rem]">
              <Image src="/tick.svg" width={20} height={20} alt="Tick" />
            </div>
            <div>
              Sharpened my backend skills, specifically in optimizing database
              queries, improving performance, and handling server-side logic.
            </div>
          </div>
          <div className="mb-[1.25rem] flex">
            <div className="  w-[6rem]">
              <Image src="/tick.svg" width={20} height={20} alt="Tick" />
            </div>
            <div>
              Learned how to properly handle files, including file upload,
              storage, and retrieval, ensuring that the apps data is organized &
              easily accessible while keeping it secure.
            </div>
          </div>
          <div className="flex">
            <div className="w-[6rem]">
              <Image src="/tick.svg" width={20} height={20} alt="Tick" />
            </div>
            <div>
              Acquired proficiency in NextJS and implemented various features
              utilizing industry-standard best practices.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
