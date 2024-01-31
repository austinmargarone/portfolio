import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="flex">
      {/* Mobile */}
      <div className="contact relative mx-auto mb-[3rem] flex h-[19.4375rem] w-[20rem] xs:w-[21rem] sm:hidden">
        <div>
          <div className="absolute shrink-0">
            <Image
              src="/Group.svg"
              width={362}
              height={362}
              alt="Background Mobile"
            />
          </div>
        </div>
        <div className="absolute">
          <h4 className="contacttext mx-[1rem] mb-[1rem] mt-[4.87rem]">
            Have a project in mind that requires technical expertise?
          </h4>
          <Link href="/contact">
            <button className="contactbtn mx-auto dark:bg-blue1">
              <p className="contactbtntext">Get in Touch with Me</p>
              <Image src="/Arrow1.svg" width={14} height={0} alt="Ellipse" />
            </button>
          </Link>
        </div>
      </div>
      {/* MD */}
      <div className="mx-auto hidden w-[33.3rem] sm:block md:hidden md:max-w-[60rem] xl:max-w-[80rem]">
        <div className="contact relative flex h-[330px] shrink-0">
          <Image
            src="/Group1.svg"
            className="rounded-[1.25rem] object-cover"
            fill={true}
            alt="Background Desktop"
          />
          <div className="absolute mx-auto flex w-full flex-col justify-between px-[4rem]">
            <h4 className=" contactcompfit ml-[1rem] mt-[2.5rem] w-[26rem] text-left">
              Have a project in mind that requires technical expertise?
            </h4>
            <div className=" mx-auto mt-[2.5rem] flex">
              <Link href="/contact">
                <button className="contactbtnlg flex dark:bg-blue1">
                  <p className="boldbody text-white">Get In Touch With Me</p>
                  <Image
                    src="/Arrow1.svg"
                    width={16}
                    height={0}
                    alt="Ellipse"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="mx-auto hidden w-full md:block md:min-w-[52rem] md:max-w-[60rem] xl:max-w-[80rem]">
        <div className="contact relative flex h-[330px] shrink-0">
          <Image
            src="/Group1.svg"
            className="rounded-[1.25rem] object-cover"
            fill={true}
            alt="Background Desktop"
          />
          <div className="absolute flex w-full justify-between px-[4rem] ">
            <h4 className=" lg:contactcomp contactcompfit mt-[5.19rem] w-[32.5rem] text-left">
              Have a project in mind that requires technical expertise?
            </h4>
            <div className=" mt-[10.69rem] flex">
              <Link href="/contact">
                <button className="contactbtnlg flex hover:shadow-lg dark:bg-blue1">
                  <p className="boldbody text-white">Get In Touch With Me</p>
                  <Image
                    src="/Arrow1.svg"
                    width={16}
                    height={0}
                    alt="Ellipse"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
