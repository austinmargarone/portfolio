"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <main className="my-[1.31rem] flex justify-between md:mb-[4.75rem] md:mt-[2.25rem]">
      <div className="ml-[1.5rem] flex h-[1.875rem] w-[1.875rem] shrink-0 gap-[0.52081rem] rounded-[468.75rem] bg-gradient-to-r from-blue to-blue1 p-[0.52rem] md:ml-[5rem] md:h-[2.8125rem] md:w-[2.8125rem] md:gap-[0.78125rem] md:p-[0.78125rem]">
        <h1 className="md:h-[1.25rem]] flex h-[0.83331rem] w-[0.83331rem] shrink-0 flex-col items-center justify-center text-white md:w-[1.25rem]">
          A
        </h1>
      </div>
      <div className="mr-[1.5rem] flex md:mr-[5.31rem] md:hidden">
        <Image src="/Nav.svg" alt="Nav" width={24} height={24} />
      </div>
      <div className="mr-[1.5rem] flex items-center md:mr-[5.31rem]">
        <ul className="flex gap-[2.25rem]">
          <li>
            <button>
              <Link href="/">Home</Link>
            </button>
          </li>
          <li>
            <button>
              <Link href="/casestudies">Case Studies</Link>
            </button>
          </li>
          <li>
            <button>
              <Link href="/contact">Contact</Link>
            </button>
          </li>
          <li>
            <button>
              <Link href="/resume">Resume</Link>
            </button>
          </li>
          <li>
            <Image src="/Line.svg" width={2} height={0} alt="Divider" />
          </li>
          <li>
            <button>
              <Image src="/Union.svg" width={20} height={20} alt="Dark Mode" />
            </button>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Navbar;
