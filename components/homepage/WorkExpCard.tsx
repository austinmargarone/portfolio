import Image from "next/image";
import React from "react";

type Props = {};

const WorkExpCard = (props: Props) => {
  return (
    <section className="expcard expcardlg flex h-[13.125rem] w-[21.56rem] flex-col dark:border-darkbg2 dark:bg-darkbg2 md:h-[7.625rem] md:w-[37.9375rem] md:flex-row">
      <div className="ml-[2.25rem] mt-[2.25rem] flex h-[3.625rem] w-[3.625rem] shrink md:m-[2rem]">
        <Image src="/Slack.svg" width={62} height={62} alt="Service Image" />
      </div>
      <div className="mb-[2.25rem] ml-[2.25rem] flex flex-col md:my-[1.87rem] md:ml-0">
        <h4 className="mb-[.56rem] mt-[1.13rem] dark:text-white md:mt-0">
          Slack
        </h4>
        <p className="dark:text-white1">Sr. UI Design - 4 Years Experince</p>
      </div>
    </section>
  );
};

export default WorkExpCard;
