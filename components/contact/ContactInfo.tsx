import Image from "next/image";
import React from "react";

const ContactInfo = () => {
  return (
    <>
      <section className="contactinfo mx-auto flex flex-col gap-[2.25rem] md:mx-0">
        <div className="flex flex-col">
          <p className="regp md:regbase flex">My Socials</p>
          <div className="flex gap-[2.25rem] pl-[2.5rem] pt-[.88rem] md:hidden">
            <div>
              <Image
                src="/Social.svg"
                width={24}
                height={24}
                alt="Social Link"
              />
            </div>
            <div>
              <Image
                src="/GitHub.svg"
                width={24}
                height={24}
                alt="Github Link"
              />
            </div>
          </div>
          <div className="hidden  md:block">
            <div className="flex gap-[2.25rem] pl-[2.5rem] pt-[.88rem]">
              <div>
                <Image
                  src="/Social.svg"
                  width={30}
                  height={30}
                  alt="Social Link"
                />
              </div>
              <div>
                <Image
                  src="/GitHub.svg"
                  width={30}
                  height={30}
                  alt="Github Link"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="regp md:regbase">Phone Number</p>
          <div className="flex gap-[.82rem] pt-[.88rem]">
            <div className="flex md:hidden">
              <Image src="/Call.svg" width={24} height={24} alt="Phone" />
            </div>
            <div className="hidden md:block">
              <Image src="/Call.svg" width={30} height={30} alt="Phone" />
            </div>
            <p className="boldp md:boldbase text-grey">1-585-545-1757</p>
          </div>
        </div>
        <div>
          <p className="regp md:regbase">Email Address</p>
          <div className="flex gap-[.82rem] pt-[.88rem]">
            <div className="flex md:hidden">
              <Image
                src="/Message.svg"
                width={24}
                height={24}
                alt="<Message>"
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/Message.svg"
                width={30}
                height={30}
                alt="<Message>"
              />
            </div>
            <p className="boldp md:boldbase text-grey">contact@fcvt.dev</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
