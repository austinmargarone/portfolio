import React from "react";
import Image from "next/image";
type Props = {};

const SkillTile = (props: Props) => {
  return (
    // Change bg to fill when implemented
    <div className="flex h-[3.18744rem] w-[3.18744rem] shrink-0 justify-center rounded-full bg-white1 dark:bg-darkbg md:h-[5.82625rem] md:w-[5.82625rem]">
      <div className="hidden shrink-0 md:flex">
        <Image src="/react.svg" width={50} height={50} alt="Stack Image" />
      </div>
      <div className="flex shrink-0 md:hidden">
        <Image src="/react.svg" width={25} height={25} alt="Stack Image" />
      </div>
    </div>
  );
};

export default SkillTile;
