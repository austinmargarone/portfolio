import Image from "next/image";
import React from "react";

type Props = {};

const Challenges = (props: Props) => {
  return (
    <div className="p7 md:p7lg">
      <div className="mb-[1.5rem] md:mb-[2.5rem]">
        <p className="projectsmalltitle mb-[.56rem]">Problem</p>
        <h4 className="projecttitle mb-[1.5rem]">Challenges & Learnings</h4>
      </div>
      <div className="p7bg md:p7bglg">
        <h4 className="boldbody text-red">CHALLENGES</h4>
        <div>
          <div className="mb-[1.25rem] flex">
            <div className="w-[6rem]">
              <Image
                src="/Challenges.svg"
                width={20}
                height={20}
                alt="Challenges"
              />
            </div>
            <div className="smallreg text-slate">
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
            <div className="smallreg text-slate">
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
            <div className="smallreg text-slate">
              However, we collaborated effectively to overcome these obstacles
              and ultimately delivered a high-quality product within the given
              timeline.
            </div>
          </div>
        </div>
      </div>
      <div className="p7bg md:p7bglg">
        <h4 className="boldbody text-green">LEARNINGS</h4>
        <div>
          <div className="mb-[1.25rem] flex">
            <div className="w-[6rem]">
              <Image src="/tick.svg" width={20} height={20} alt="Tick" />
            </div>
            <div className="smallreg text-slate">
              Gained extensive knowledge of full authentication and
              authorization implementation, including the use of
              industry-standard security protocols such as JSON Web Tokens.
            </div>
          </div>
          <div className="mb-[1.25rem] flex">
            <div className="w-[6rem]">
              <Image src="/tick.svg" width={20} height={20} alt="Tick" />
            </div>
            <div className="smallreg text-slate">
              Sharpened my backend skills, specifically in optimizing database
              queries, improving performance, and handling server-side logic.
            </div>
          </div>
          <div className="flex">
            <div className="w-[6rem]">
              <Image src="/tick.svg" width={20} height={20} alt="Tick" />
            </div>
            <div className="smallreg mb-[1.25rem] text-slate">
              Learned how to properly handle files, including file upload,
              storage, and retrieval, ensuring that the app's data is organized
              & easily accessible while keeping it secure.
            </div>
          </div>
          <div className="flex">
            <div className="w-[6rem]">
              <Image src="/tick.svg" width={20} height={20} alt="Tick" />
            </div>
            <div className="smallreg text-slate">
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
