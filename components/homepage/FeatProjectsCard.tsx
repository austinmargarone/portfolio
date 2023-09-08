import React from "react";
import Image from "next/image";

type Props = {};

const FeatProjectsCard = (props: Props) => {
  return (
    <div className="bg-slate">
      <div>
        <h3>Morrent - A Car Rental Application</h3>
        <button>ReactJS, Next.js</button>
        <button>Nodejs, MongoDB</button>
        <div>
          <button>See Detail Project</button>
          <Image src="/Arrow.svg" width={35} height={0} alt="Arrow" />
        </div>
      </div>
      <div>
        <div>
          <Image src="/Display.svg" width={325} height={155} alt="Arrow" />
        </div>
      </div>
    </div>
  );
};

export default FeatProjectsCard;
