import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Projects(cases: any) {
  return (
    <div className="p8shadow dark:p8shadowdark sm:[365px] mt-[1.5rem] w-[325px] pb-[1.5rem] lg:w-[429px]">
      <div className="flex lg:hidden">
        <Image
          className="h-[106px] w-[365px] rounded-t-[1.25rem]"
          src={cases.image}
          width={365}
          height={186}
          alt={cases.title}
        />
      </div>
      <div className="hidden lg:block">
        <Image
          className="mt-[.33rem] h-[232px] w-[429px] rounded-t-[1.25rem]"
          src={cases.image}
          width={429}
          height={232}
          alt={cases.title}
        />
      </div>
      <div className="mt-[1.5rem]">
        <h4 className="boldp ml-[1rem] text-blue dark:text-blue1">
          {cases.title}
        </h4>
        <p className="regp mb-[.87rem] ml-[1rem] mt-[.4rem] text-slate dark:text-white1">
          {cases.description}
        </p>
        <Link href={cases.case_study}>
          <button className="p8btn mx-auto dark:bg-blue1">
            <p className="p8btntext">See Case Study</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
