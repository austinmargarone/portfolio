import Image from "next/image";
import React from "react";

type Props = { title: string; body: string; image: string };

const WorkExpCard = (props: Props) => {
  return (
    <section className="expcard md:expcardlg flex h-[13.125rem] flex-col shadow-[-25px_47px_66px_0px_rgba(0,0,0,0.08)] hover:shadow-[-25px_47px_66px_0px_rgba(0,0,0,0.08)] dark:border-white1 dark:bg-grey dark:hover:shadow-[-25px_47px_66px_0px_rgba(224,236,255)] md:h-[7.625rem] md:w-[37.9375rem] md:flex-row md:shadow-none md:hover:translate-x-6">
      <div className="ml-[2.25rem] mt-[2.25rem] flex h-[3.625rem] w-[3.625rem] shrink md:m-[2rem]">
        <Image src={props.image} width={62} height={62} alt="Service Image" />
      </div>
      <div className="mb-[2.25rem] ml-[2.25rem] flex flex-col md:my-[1.87rem] md:ml-0">
        <h4 className="mb-[.56rem] mt-[1.13rem] font-bold dark:text-white md:mt-0">
          {props.title}
        </h4>
        <p className="dark:text-white1">{props.body}</p>
      </div>
    </section>
  );
};

export default WorkExpCard;
