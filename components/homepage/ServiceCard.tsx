import Image from "next/image";
import React from "react";

type Props = {};

const ServiceCard = (props: Props) => {
  return (
    <div className="flex h-[16.66em] w-[18rem] flex-col rounded-[0.625rem] bg-blue px-[1.56rem] shadow-[32px_32px_71px_0px_rgba(2,82,205,0.28)]">
      <div className="mb-[2.25rem] mt-[2.5rem] flex">
        <Image
          className="rounded-[0.625rem] bg-white"
          src="/Rectangle.svg"
          width={62}
          height={62}
          alt="Service Image"
        />
      </div>
      <h1 className="mb-[.62rem] text-2xl	font-semibold	leading-[1.95rem] text-white">
        Front-End Dev
      </h1>
      <p className="text-sm font-normal leading-[1.35625rem] text-white">
        Front-end dev includes creating the user interface and interactive
        elements of websites and apps.
      </p>
    </div>
  );
};

export default ServiceCard;
