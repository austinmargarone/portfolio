import React from "react";
import Image from "next/image";
type Props = {
  imageUrl: string;
};

const SkillTile = (props: Props) => {
  return (
    // Change bg to fill when implemented
    <div className="flex h-[3.3rem] w-[3.3rem] shrink-0 justify-center rounded-full bg-white1 dark:bg-darkbg md:h-[6.25rem] md:w-[6.25rem]">
      <div className="hidden shrink-0 md:flex">
        <Image src={props.imageUrl} width={50} height={50} alt="Stack Image" />
      </div>
      <div className="flex shrink-0 md:hidden">
        <Image src={props.imageUrl} width={25} height={25} alt="Stack Image" />
      </div>
    </div>
  );
};

export default SkillTile;
