import Image from "next/image";
import React from "react";

type Props = {};

const Design = (props: Props) => {
  return (
    <section className="w-full">
      <div className="relative left-0 h-[13.08294rem] w-full bg-blue pt-[.61rem] dark:bg-blue1 sm:h-[20rem] md:h-[28rem] lg:h-[38rem] xl:h-[47.9375rem]">
        <h4 className="smallbold md:ptitle2 flex justify-center uppercase text-white">
          High-Fidelity Figma Design
        </h4>
        <div className="relative left-0 h-[13.08294rem] w-full sm:h-[20rem] md:h-[28rem] lg:h-[38rem] xl:h-[47.9375rem]">
          <Image
            src="/Figma.svg"
            fill={true}
            className="object-cover"
            alt="Computer"
          />
        </div>
      </div>
    </section>
  );
};

export default Design;
