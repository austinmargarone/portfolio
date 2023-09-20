import Image from "next/image";
import React from "react";

type Props = {};

const Design = (props: Props) => {
  return (
    <section className="w-full">
      <div className="bg-blue px-[8.56rem] py-[.61rem]">
        <h4 className="smallbold flex justify-center uppercase text-white">
          High-Fidelity Figma Design
        </h4>
        <div className="h-[13.08294rem] w-full">
          {/* <Image src="/Figma.svg" fill={true} alt="Computer" /> */}
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Design;
