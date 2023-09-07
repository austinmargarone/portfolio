"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useThemeState from "@/store/themeStore";

const Navbar = () => {
  const { theme, toggleTheme } = useThemeState();

  return (
    <main className="mb-[1.31rem] flex justify-between pt-[1.31rem] md:mb-[4.75rem] md:pt-[2.25rem]">
      <div className="ml-[1.5rem] flex h-[1.875rem] w-[1.875rem] shrink-0 gap-[0.52081rem] rounded-[468.75rem] bg-gradient-to-r from-[#0252cd54] from-20% to-blue p-[0.52rem] md:ml-[5rem] md:h-[2.8125rem] md:w-[2.8125rem] md:gap-[0.78125rem] md:p-[0.78125rem]">
        <p className="flex h-[0.83331rem] w-[0.83331rem] shrink-0 flex-col items-center justify-center text-white md:h-[1.25rem] md:w-[1.25rem]">
          A
        </p>
      </div>
      <div className="mr-[1.5rem] flex md:mr-[5.31rem] md:hidden">
        <Image src="/Nav.svg" alt="Nav" width={24} height={24} />
      </div>
      <div className="mr-[1.5rem] hidden items-center md:mr-[5.31rem] md:block">
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
            <button className="flex content-center gap-[.1875rem]">
              <Image
                src="/Download.svg"
                width={20}
                height={20}
                alt="Download"
              />

              <Link href="/resume">Resume</Link>
            </button>
          </li>
          <li>
            <Image src="/Line.svg" width={2} height={0} alt="Divider" />
          </li>
          <li>
            <button onClick={toggleTheme}>
              {theme === "dark" ? (
                <Image
                  src="/Union.svg"
                  width={20}
                  height={20}
                  alt="Light Mode"
                />
              ) : (
                <Image src="/Moon.svg" width={20} height={20} alt="Dark Mode" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Navbar;
