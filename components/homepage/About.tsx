"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "@/components/svg";

const testimonials = [
  {
    id: 0,
    name: "Billy",
    content: "I like austin wow much job do good",
    image: "/images/billy.jpg",
  },
  {
    id: 0,
    name: "Billy",
    content: "I like austin wow much job do good",
    image: "/images/billy.jpg",
  },
];

const About = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const maxLength = testimonials.length - 1;
  const next = () => {
    if (currentReview === maxLength) {
      setCurrentReview(0);
    } else {
      setCurrentReview((c) => c + 1);
    }
  };
  const prev = () => {
    if (currentReview === 0) {
      setCurrentReview(maxLength);
    } else {
      setCurrentReview((c) => c - 1);
    }
  };
  return (
    <div className="about md:aboutlg mx-auto my-[3rem] bg-white1 dark:bg-darkbg xs:max-w-[25rem] sm:max-w-[42rem] md:w-fit md:max-w-[75rem] xl:max-w-[80rem]">
      <div className="flex w-full">
        <h2 className="mx-auto w-full dark:text-white">
          <span className="underline-magic w-fit">Testimonials</span>
        </h2>
      </div>
      <div className="sm:hidden">
        <div className="flex gap-[2rem]">
          <div>
            <Image
              className="shrink-0 rounded-[1rem]"
              src="/Adrian.svg"
              width={328}
              height={328}
              alt="Headshit"
            />
          </div>
          <div className="flex gap-[1rem]">
            <button onClick={prev}>
              <div className="circle dark:border-darkbg dark:bg-darkbg2">
                <div className="shrink-0">
                  <ArrowLeft
                    className="stroke-black dark:stroke-white"
                    width={20}
                    height={20}
                    alt="Arrow Left"
                  />
                </div>
              </div>
            </button>
            <button onClick={next}>
              <div className="circle dark:border-darkbg dark:bg-darkbg2">
                <div className="shrink-0 ">
                  <ArrowRight
                    className="stroke-black dark:stroke-white"
                    width={20}
                    height={20}
                    alt="Arrow Right"
                  />
                </div>
              </div>
            </button>
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
            <p className="regbody mb-[1.5rem] self-stretch text-black dark:text-white">
              I have had the pleasure of working with Adrian as a Software
              Developer and can confidently say that he is a valuable asset to
              any team. He is highly skilled in ReactJS, NextJS, Javascript,
              Material UI, Tailwind CSS, Redux, and GitHub, and consistently
              delivers high-quality code.
            </p>
          </div>
          <div>
            <p className="boldbody self-stretch text-black dark:text-white1">
              — Adrian Hajdin
            </p>
            <p className="regbody self-stretch text-slate	dark:text-white">
              Founder & CEO at JS Mastery
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[4rem] hidden sm:block">
        <div className="flex">
          <button onClick={prev}>
            <div className="circlelg mt-[6rem] flex dark:border-darkbg dark:bg-darkbg2">
              <div className="shrink-0 ">
                <ArrowLeft
                  className="stroke-black dark:stroke-white"
                  width={20}
                  height={20}
                  alt="Arrow Left"
                />
              </div>
            </div>
          </button>
          <div className="flex ">
            <div className="mx-[1.62rem]">
              <Image
                className="rounded-[1rem]"
                src="/Adrian.svg"
                width={1450}
                height={1450}
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
                <p className="regbase mb-[2rem] text-slate dark:text-white">
                  I have had the pleasure of working with Austin as a Software
                  Developer and can confidently say that he is a valuable asset
                  to any team. He is highly skilled in ReactJS, NextJS,
                  Javascript, Material UI, Tailwind CSS, Redux, and GitHub, and
                  consistently delivers high-quality code.
                </p>
              </div>
              <div>
                <p className="boldbody mb-[.25rem] self-stretch text-black dark:text-white1">
                  — Adrian Hajdin
                </p>
                <p className="regbody self-stretch text-slate	dark:text-white">
                  Founder & CEO at JS Mastery
                </p>
              </div>
            </div>
          </div>
          <button onClick={next}>
            <div className="circlelg mt-[6rem] dark:border-darkbg dark:bg-darkbg2">
              <div className="shrink-0 ">
                <ArrowRight
                  className="stroke-black dark:stroke-white"
                  width={20}
                  height={20}
                  alt="Arrow Right"
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
