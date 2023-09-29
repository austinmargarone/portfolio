"use client";

import Image from "next/image";
import { GitHubIcon2 } from "./svg";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="mx-[1.5rem] flex flex-col justify-between gap-[1rem] border-t-[3px] border-white1 px-[1.5rem] py-[3rem] md:mx-auto md:mt-[3.25rem] md:max-w-[60rem] md:flex-row md:p-0 md:py-[3.5rem] xl:max-w-[80rem]">
      <div className="flex content-center justify-center md:pt-[2rem]">
        <h1 className="text-lg leading-[1.8rem] text-grey">
          © 2023 Austin All rights reserved.
        </h1>
      </div>
      <div className="flex content-center justify-center gap-[1.5rem]  md:pt-[2rem]">
        <Link
          href="https://www.linkedin.com/in/austin-margarone/"
          target="_blank"
        >
          <div>
            <Image src="/Social.svg" width={24} height={4} alt="Social Link" />
          </div>
        </Link>
        <Link href="https://github.com/austinmargarone" target="_blank">
          <div>
            <GitHubIcon2 width={24} height={24} alt="Github Link" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
