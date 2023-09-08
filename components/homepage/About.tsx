import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="about md:aboutlg my-[3rem] bg-white1">
      <div>
        <div>
          <h2>What they say about me</h2>
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex gap-[2rem]">
          <div>
            <Image
              className="shrink-0 rounded-[1rem]"
              src="/headshot.svg"
              width={200}
              height={200}
              alt="Headshot"
            />
          </div>
          <div className="flex gap-[1rem]">
            <div className="circle">
              <Image
                className="shrink-0 rounded-[1rem]"
                src="/arrow-left.svg"
                width={20}
                height={20}
                alt="Headshot"
              />
            </div>
            <div className="circle">
              {" "}
              <Image
                className="shrink-0 rounded-[1rem]"
                src="/arrow-right.svg"
                width={20}
                height={20}
                alt="Headshot"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mb-[1rem]">
            <Image
              className="shrink-0 rounded-[1rem]"
              src="/Stars.svg"
              width={200}
              height={200}
              alt="Headshot"
            />
          </div>
          <div>
            <p className="regbody mb-[1.5rem] self-stretch text-black">
              I have had the pleasure of working with Adrian as a Software
              Developer and can confidently say that he is a valuable asset to
              any team. He is highly skilled in ReactJS, NextJS, Javascript,
              Material UI, Tailwind CSS, Redux, and GitHub, and consistently
              delivers high-quality code.
            </p>
          </div>
          <div>
            <p className="boldbody self-stretch text-black	">
              - Austin Margarone
            </p>
            <p className="regbody self-stretch text-slate	">
              Managing-Member of FC Virtual Tours
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div>
          <div className="mb-[1rem]">
            <Image
              className="shrink-0 rounded-[1rem]"
              src="/Stars.svg"
              width={200}
              height={200}
              alt="Headshot"
            />
          </div>
          <div className="mb-[1rem]">
            <Image
              className="shrink-0 rounded-[1rem]"
              src="/Stars.svg"
              width={200}
              height={200}
              alt="Headshot"
            />
          </div>
          <div>
            <p className="regbody mb-[1.5rem] self-stretch text-black">
              I have had the pleasure of working with Adrian as a Software
              Developer and can confidently say that he is a valuable asset to
              any team. He is highly skilled in ReactJS, NextJS, Javascript,
              Material UI, Tailwind CSS, Redux, and GitHub, and consistently
              delivers high-quality code.
            </p>
          </div>
          <div>
            <p className="boldbody self-stretch text-black	">
              - Austin Margarone
            </p>
            <p className="regbody self-stretch text-slate	">
              Managing-Member of FC Virtual Tours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
