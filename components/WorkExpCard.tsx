import Image from "next/image";
import React from "react";

type Props = {};

const WorkExpCard = (props: Props) => {
  return (
    <div>
      <div>
        <Image
          src="/Rectangle.svg"
          width={62}
          height={62}
          alt="Service Image"
        />
      </div>
      <div>
        <h4>Slack</h4>
        <p>Sr. UI Design - 4 Years Experince</p>
      </div>
    </div>
  );
};

export default WorkExpCard;
