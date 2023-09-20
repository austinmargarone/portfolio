import Image from "next/image";
import React from "react";

type Props = {};

const ProcessTiles = (props: Props) => {
  return (
    <div>
      <div className="p6gap md:p6gaplg">
        <div className="flex md:hidden">
          <div className="flex h-[4.72869rem] w-[4.72869rem] justify-center rounded-full bg-white1 dark:bg-darkbg">
            <Image src="/react.svg" width={38} height={38} alt="Stack Image" />
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex h-[6.25rem] w-[6.25rem] justify-center rounded-full bg-white1 dark:bg-darkbg">
            <Image src="/react.svg" width={50} height={50} alt="Stack Image" />
          </div>
        </div>
      </div>
      <div>
        <p className="smallbold md:boldp mt-[.88rem] flex justify-center dark:text-white">
          Definition
        </p>
      </div>
    </div>
  );
};

export default ProcessTiles;
