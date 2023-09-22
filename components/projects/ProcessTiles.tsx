import React from "react";

const ProcessTiles = ({
  ProcessImage,
  title,
}: {
  title: string;
  ProcessImage: any;
}) => {
  return (
    <div>
      <div className="p6gap md:p6gaplg">
        <div className="flex md:hidden">
          <div className="flex h-[4.72869rem] w-[4.72869rem]  rounded-full bg-white1 dark:bg-darkbg">
            <ProcessImage
              className="m-auto"
              width={38}
              height={38}
              alt="Stack Image"
            />
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex h-[6.25rem] w-[6.25rem] justify-center rounded-full bg-white1 dark:bg-darkbg">
            <ProcessImage
              className="m-auto"
              width={50}
              height={50}
              alt="Stack Image"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="smallbold md:boldp mt-[.88rem] flex justify-center dark:text-white">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ProcessTiles;
