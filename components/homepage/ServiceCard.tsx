import React from "react";

const ServiceCard = ({
  ServiceImage,
  title,
  body,
}: {
  title: string;
  body: string;
  ServiceImage: any;
}) => {
  return (
    <div className=" hover:shadow-[32px_32px_71px_0px_rgba(2,82,205,0.28)] md:transition-all md:hover:translate-y-12">
      <div className="flex h-[16.66em] w-[18rem] flex-col rounded-[0.625rem] bg-white1 px-[1.56rem] shadow-[0px_1px_20px_0px_rgba(224,236,255)] hover:bg-blue dark:bg-darkbg dark:shadow-[0px_1px_20px_0px_rgba(31,46,72)]">
        <div className="mb-[2.25rem] mt-[2.5rem] flex h-[3.875rem] w-[3.875rem] justify-center rounded-[0.625rem] bg-blue shadow-[18px_18px_26px_0px_rgba(2,82,205,0.28)] dark:bg-blue1">
          <div className="m-auto flex shrink-0">
            <ServiceImage width={25} height={25} alt="Stack Image" />
          </div>
        </div>
        <h1 className="mb-[.62rem] text-2xl	font-semibold	leading-[1.95rem] text-black dark:text-white">
          {title}
        </h1>
        <p className="text-sm font-normal leading-[1.35625rem] text-slate dark:text-white1">
          {body}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
