import Image from "next/image";
import React from "react";

type ImageType = { prop: string };

const SkillTile = ({ prop }: ImageType) => {
  return (
    <div className="group flex h-[3.3rem] w-[3.3rem] shrink-0 justify-center rounded-full bg-white1 hover:scale-125 hover:border hover:border-grey  hover:bg-white dark:bg-darkbg hover:dark:bg-darkbg2 md:h-[6.25rem] md:w-[6.25rem]">
      <div className="m-auto hidden shrink-0 md:flex">
        <Image
          className="justify-center	 grayscale group-hover:grayscale-0"
          src={prop}
          width={50}
          height={50}
          alt="Stack Image"
        />
      </div>
      <div className="m-auto flex shrink-0 md:hidden">
        <Image
          className="justify-center	 grayscale group-hover:grayscale-0"
          src={prop}
          width={25}
          height={25}
          alt="Stack Image"
        />
      </div>
    </div>
  );
};

export default SkillTile;
