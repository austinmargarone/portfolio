import Image from "next/image";
import React from "react";

type Props = {};

const Design = (props: Props) => {
  return (
    <section className="w-full">
      <div className="bg-blue px-[8.56rem] py-[.61rem] dark:bg-blue1">
        <h4 className="smallbold md:ptitle2 flex w-full justify-center uppercase text-white">
          High-Fidelity Figma Design
        </h4>
      </div>
      <div>
        <Image
          src="/Figma.svg"
          width={393}
          height={209}
          className="h-[209px] w-full grow object-contain md:h-[767px]"
          alt="Computer"
        />
      </div>
    </section>
  );
};

export default Design;
