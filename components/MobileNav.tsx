import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Resume } from "./svg";
import useThemeState from "@/store/themeStore";

const MobileNav = () => {
  const { theme, toggleTheme } = useThemeState();

  return (
    <div>
      <nav className="fixed right-0 top-0 z-10 w-full bg-white1 dark:bg-darkbg">
        <div className="mx-auto flex justify-between px-4 ">
          <div>
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
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
