import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  tech: string;
  tech1: string;
  link: string;
  bg: string;
  featuredImage: string;
};

const FeatProjectsCard = (props: Props) => {
  const bgColor = `bg-${props.bg}`;
  return (
    <div
      className={`${bgColor} mx-auto flex h-[32.125rem] w-full flex-col rounded-[1rem] hover:scale-105 xs:max-w-[21.5rem] ss:max-w-[25rem] sm:max-w-[40rem] md:h-[27.75rem] md:w-full md:max-w-[60rem] md:flex-row xl:max-w-[80rem]`}
    >
      <div className="ml-[1.5rem] flex flex-col md:ml-[6.75rem] ">
        <h3 className="projecttitle md:projecttitlelg mr-[1.63rem] mt-[2.5rem] w-[80%] text-left text-white md:mt-[4.06rem] md:w-[20rem] xl:mt-[6.06rem] xl:w-[28.25rem]">
          {props.title}
        </h3>
        <div className="my-[1.88rem] flex gap-[1.25rem] md:mb-[3.13rem] md:mt-[1.44rem]">
          <button className="projectbutton flex bg-yellow">
            <p className="smallreg font-bold text-black">{props.tech}</p>
          </button>
          <button className="projectbutton bg-yellow">
            <p className="smallreg font-bold text-black">{props.tech1}</p>
          </button>
        </div>
        <div className="flex">
          <Link href={props.link}>
            <button className="boldbody mr-[.52rem] text-white">
              See Project Detail
            </button>
          </Link>
          <Image
            className="shrink-0 stroke-1"
            src="/Arrow.svg"
            width={35}
            height={0}
            alt="Arrow"
          />
        </div>
      </div>
      <div className="mx-auto mt-[1.49rem] flex flex-col overflow-hidden md:ml-[2.27rem] md:mt-[7rem] xl:mt-[3.88rem]">
        <div className="relative left-9 hidden md:flex">
          <Image
            src={props.featuredImage}
            width={701}
            height={330}
            alt="Computer & phone"
          />
        </div>
        <div className="flex md:hidden">
          <Image
            src={props.featuredImage}
            width={325}
            height={155}
            alt="Computer & phone"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatProjectsCard;
