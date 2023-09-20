import Image from "next/image";
import React from "react";

type Props = {};

const OtherCasesCard = (props: Props) => {
  return (
    <div className="p8shadow dark:p8shadowdark mt-[1.5rem] w-[429px] pb-[1.5rem]">
      <div>
        <Image
          className="rounded-t-[1.25rem]"
          src="/Jobit.svg"
          width={429}
          height={232}
          alt="Jobit"
        />
      </div>
      <div className="mx-[1.2rem] mt-[1.5rem]">
        <h4 className="boldp text-blue dark:text-blue1">Jobit</h4>
        <p className="regp mb-[.87rem] mt-[.4rem] text-slate dark:text-white1">
          Jobit, a web app made with React and JSearch API, links developers to
          millions of job openings. It offers easy job search by...
        </p>
        <button className="p8btn mx-[.rem] w-full dark:bg-blue1">
          <p className="p8btntext">See Case Study</p>
        </button>
      </div>
    </div>
  );
};

export default OtherCasesCard;
