import Image from "next/image";
import React from "react";
import { GitHubIcon2 } from "../svg";
import Link from "next/link";
import Email from "./Email";
import Phone from "./Phone";

const ContactInfo = () => {
  return (
    <>
      <section className="contactinfo mx-auto flex flex-col gap-[2.25rem] pl-[1.25rem] md:mx-0 lg:pl-0">
        <div className="flex flex-col">
          <p className="regp md:regbase flex dark:text-white">My Socials</p>
          <div className="flex gap-[2.25rem] pl-[2.5rem] pt-[.88rem] md:hidden">
            <Link
              href="https://www.linkedin.com/in/austin-margarone/"
              target="_blank"
            >
              <div className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <Image
                  src="/Social.svg"
                  width={24}
                  height={24}
                  alt="Social Link"
                />
              </div>
            </Link>
            <Link href="https://github.com/austinmargarone" target="_blank">
              <div className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <GitHubIcon2 width={24} height={24} alt="Github Link" />
              </div>
            </Link>
          </div>
          <div className="hidden  md:block">
            <div className="flex gap-[2.25rem] pt-[.88rem]">
              <Link
                href="https://www.linkedin.com/in/austin-margarone/"
                target="_blank"
              >
                <div className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                  <Image
                    src="/Social.svg"
                    width={30}
                    height={30}
                    alt="Social Link"
                  />
                </div>
              </Link>
              <Link href="https://github.com/austinmargarone" target="_blank">
                <div className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                  <GitHubIcon2 width={30} height={30} alt="Github Link" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p className="regp md:regbase dark:text-white">Phone Number</p>
          <div>
            <Phone />
          </div>
        </div>
        <div>
          <p className="regp md:regbase dark:text-white">Email Address</p>
          <div>
            <Email />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
