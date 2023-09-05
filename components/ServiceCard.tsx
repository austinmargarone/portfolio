import Image from "next/image";
import React from "react";

type Props = {};

const ServiceCard = (props: Props) => {
  return (
    <div className="h-[16.56rem] w-[18rem] rounded-[0.625rem] bg-blue">
      <Image src="/Rectangle.svg" width={62} height={62} alt="Service Image" />
      <h1>Front-END Dev</h1>
      <p>
        Front-end dev includes creating the user interface and interactive
        elements of websites and apps.
      </p>
    </div>
  );
};

export default ServiceCard;
