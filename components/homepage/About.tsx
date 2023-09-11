import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="about md:aboutlg mx-auto my-[3rem] bg-white1">
      <div>
        <h2>
          What <span className="underline-magic w-fit">they say</span> about me
        </h2>
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
                alt="Arrow Left"
              />
            </div>
            <div className="circle">
              <Image
                className="shrink-0 rounded-[1rem]"
                src="/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mb-[1rem] mt-[2.5rem]">
            <Image
              className="shrink-0 rounded-[1rem]"
              src="/Stars.svg"
              width={200}
              height={200}
              alt="Stars"
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
      <div className="mt-[4rem] hidden md:block">
        <div className="flex">
          <div className="circlelg mt-[6rem] flex">
            <Image
              className="shrink-0 rounded-[1rem]"
              src="/arrow-left.svg"
              width={24}
              height={24}
              alt="Arrow Left"
            />
          </div>
          <div className="flex">
            <div className="mx-[1.62rem]">
              <Image
                className="shrink-0 rounded-[1rem]"
                src="/headshot.svg"
                width={800}
                height={800}
                alt="Headshot"
              />
            </div>
            <div>
              <div className="mb-[1rem]">
                <Image
                  className="shrink-0 rounded-[1rem]"
                  src="/Stars.svg"
                  width={116}
                  height={20}
                  alt="Stars"
                />
              </div>
              <div>
                <p className="regbase mb-[2rem] text-slate">
                  I have had the pleasure of working with Adrian as a Software
                  Developer and can confidently say that he is a valuable asset
                  to any team. He is highly skilled in ReactJS, NextJS,
                  Javascript, Material UI, Tailwind CSS, Redux, and GitHub, and
                  consistently delivers high-quality code.
                </p>
              </div>
              <div>
                <p className="boldbody mb-[.25rem] self-stretch text-black">
                  - Austin Margarone
                </p>
                <p className="regbody self-stretch text-slate	">
                  Managing-Member of FC Virtual Tours
                </p>
              </div>
            </div>
          </div>
          <div className="circlelg mt-[6rem]">
            <Image
              className="shrink-0 rounded-[1rem]"
              src="/arrow-right.svg"
              width={24}
              height={24}
              alt="Arrow Right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
