import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@/components/svg";
import React from "react";
type Props = {
  title: string;
  name: string;
  content: string;
  _id: string;
  image: string;
};

export default async function About(props: Props) {
  // const [testimonials, setTestimonials] = useState(testimonials[0]);
  // const handleClick = (index: string) => {
  //   setTestimonials(testimonials[index]);
  // };
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
              src={props.image}
              width={328}
              height={328}
              alt={props.name}
            />
          </div>
          <div></div>
          <div className="flex gap-[1rem]">
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
              {props.content}
            </p>
          </div>
          <div>
            <p className="boldbody self-stretch text-black dark:text-white1">
              {props.name}
            </p>
            <p className="regbody self-stretch text-slate	dark:text-white">
              {props.title}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[4rem] hidden sm:block">
        <div className="flex">
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
          <div className="flex ">
            <div className="mx-[1.62rem]">
              <Image
                className="rounded-[1rem]"
                src={props.image}
                width={1450}
                height={1450}
                alt={props.name}
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
                  {props.content}
                </p>
              </div>
              <div>
                <p className="boldbody mb-[.25rem] self-stretch text-black dark:text-white1">
                  {props.name}
                </p>
                <p className="regbody self-stretch text-slate	dark:text-white">
                  {props.title}
                </p>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
}
