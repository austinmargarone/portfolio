import Image from "next/image";
import { title } from "process";
import React from "react";

type Props = { title: string; body: string; image: string };

const ServiceCard = (props: Props) => {
  return (
    <div className="flex h-[16.66em] w-[18rem] flex-col rounded-[0.625rem] bg-white1 px-[1.56rem] shadow-[0px_1px_20px_0px_rgba(224,236,255)] dark:bg-darkbg dark:shadow-[0px_1px_20px_0px_rgba(31,46,72)]">
      <div className="mb-[2.25rem] mt-[2.5rem] flex h-[3.875rem] w-[3.875rem] justify-center rounded-[0.625rem] bg-blue shadow-[18px_18px_26px_0px_rgba(2,82,205,0.28)]">
        <Image
          className="flex"
          src={props.image}
          width={24}
          height={24}
          alt="Service Image"
        />
      </div>
      <h1 className="mb-[.62rem] text-2xl	font-semibold	leading-[1.95rem] text-black">
        {props.title}
      </h1>
      <p className="text-sm font-normal leading-[1.35625rem] text-slate">
        {props.body}
      </p>
    </div>

    // Blue Card

    // className="flex h-[16.66em] w-[18rem] flex-col rounded-[0.625rem] bg-blue px-[1.56rem] shadow-[32px_32px_71px_0px_rgba(2,82,205,0.28)]"
  );
};

export default ServiceCard;
