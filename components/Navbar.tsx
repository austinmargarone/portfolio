"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useThemeState from "@/store/themeStore";
import { Resume, Nav, Moon, Union } from "@/components/svg";

const Navbar = () => {
  const { theme, toggleTheme } = useThemeState();

  const toggleMenu = () => {
    setExpanded(!expanded);
  };
  const [expanded, setExpanded] = useState(false);
  return (
    <main className="bg-white1 dark:bg-darkbg">
      <div className="mx-auto flex justify-between py-[1.31rem] md:pt-[2.25rem] xl:max-w-[120rem]">
        <div className="ml-[1.5rem] flex h-[1.875rem] w-[1.875rem] shrink-0 gap-[0.52081rem] rounded-[468.75rem] bg-gradient-to-r from-[#0252cd54] from-20% to-blue p-[0.52rem] md:ml-[5rem] md:h-[2.8125rem] md:w-[2.8125rem] md:gap-[0.78125rem] md:p-[0.78125rem]">
          <p className="flex h-[0.83331rem] w-[0.83331rem] shrink-0 flex-col items-center justify-center text-white md:h-[1.25rem] md:w-[1.25rem]">
            A
          </p>
        </div>
        {/* Mobile Nav */}
        <button className="flex md:hidden" onClick={toggleTheme}>
          {theme === "dark" ? (
            <Union
              className="dark:fill-blue1"
              width={20}
              height={20}
              alt="Light Mode"
            />
          ) : (
            <Moon
              className="fill-blue"
              width={20}
              height={20}
              alt="Dark Mode"
            />
          )}
        </button>
        {/* Hamburg */}
        <div className="flex md:hidden" onClick={toggleMenu}>
          <div className="mr-[1.2rem]">
            <Nav
              className="fill-blue dark:fill-blue1"
              alt="Nav"
              width={24}
              height={24}
            />
          </div>
        </div>
        {/*  Open Menu */}
        {expanded && (
          <div className="flex md:hidden">
            <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-darkbg dark:bg-grey ">
              <div className="m-5 flex h-3/4 flex-col gap-5 rounded-[.33rem] bg-white1 dark:bg-darkbg2">
                <header className="flex w-full flex-row justify-between border-b border-blue dark:border-blue1">
                  <div className="ml-7 mt-4 font-bold text-blue dark:text-blue1">
                    My Portfolio
                  </div>
                  <button className="my-auto" onClick={toggleTheme}>
                    {theme === "dark" ? (
                      <Union
                        className="dark:fill-blue1"
                        width={20}
                        height={20}
                        alt="Light Mode"
                      />
                    ) : (
                      <Moon
                        className="fill-blue"
                        width={20}
                        height={20}
                        alt="Dark Mode"
                      />
                    )}
                  </button>
                  <div className="mr-7 mt-4">
                    <button onClick={toggleMenu}>
                      <Nav
                        className="fill-blue dark:fill-blue1"
                        alt="Nav"
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>
                </header>
                <div className="mx-auto">
                  <ul className="flex flex-col gap-[2.25rem] text-black sm:gap-[3.5rem]">
                    <li>
                      <button
                        onClick={toggleMenu}
                        className="w-[10rem] rounded-[.33rem] bg-blue p-[.25rem] dark:bg-blue1 sm:w-[15rem] sm:p-[.5rem]"
                      >
                        <Link
                          className="boldbody sm:boldp text-white1 underline"
                          href="/"
                        >
                          Home
                        </Link>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={toggleMenu}
                        className="w-[10rem] rounded-[.33rem] bg-blue p-[.25rem] dark:bg-blue1 sm:w-[15rem] sm:p-[.5rem]"
                      >
                        <Link
                          className="boldbody sm:boldp text-white1 underline"
                          href="/casestudies"
                        >
                          Case Studies
                        </Link>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={toggleMenu}
                        className="w-[10rem] rounded-[.33rem] bg-blue p-[.25rem] dark:bg-blue1 sm:w-[15rem] sm:p-[.5rem]"
                      >
                        <Link
                          className="boldbody sm:boldp text-white1 underline"
                          href="/contact"
                        >
                          Contact
                        </Link>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={toggleMenu}
                        className="flex w-[10rem] content-center justify-center gap-[.1875rem] rounded-[.33rem] bg-blue p-[.25rem] dark:bg-blue1 sm:w-[15rem] sm:p-[.5rem]"
                      >
                        <Resume
                          className="my-auto fill-white"
                          width={20}
                          height={20}
                          alt="Download"
                        />

                        <Link
                          className="boldbody sm:boldp text-white1 underline"
                          href="/resume"
                        >
                          Resume
                        </Link>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Mobile Nav End */}
        <div className="mr-[1.5rem] hidden items-center md:mr-[5.31rem] md:block">
          <ul className="flex gap-[2.25rem] dark:text-white1">
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
                <Resume
                  className="fill-black dark:fill-white"
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
                  <Image
                    src="/Moon.svg"
                    width={20}
                    height={20}
                    alt="Dark Mode"
                  />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
