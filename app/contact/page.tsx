import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <section className=""></section>

        <section className="contactinfo mx-auto flex flex-col gap-[2.25rem]">
          <div className="flex flex-col">
            <p className="regp md:regbase flex">My Socials</p>
            <div className="flex gap-[2.25rem] pl-[2.5rem] pt-[.88rem]">
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
          </div>
          <div>
            <p className="regp md:regbase">Phone Number</p>
            <div className="flex gap-[.82rem] pt-[.88rem]">
              <Image src="/Call.svg" width={24} height={24} alt="Phone" />
              <p className="boldp">1-585-545-1757</p>
            </div>
          </div>
          <div>
            <p className="regp md:regbase">Email Address</p>
            <div className="flex gap-[.82rem] pt-[.88rem]">
              <Image
                src="/Message.svg"
                width={24}
                height={24}
                alt="<Message>"
              />
              <p className="boldp">contact@fcvt.dev</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
