import React from "react";

const Heading = () => {
  return (
    <>
      <section className="casehead mx-auto flex w-[21rem] flex-col sm:w-[41.125rem]">
        <h1 className="casetitle sm:projectstitlelg dark:text-white">
          <span className="sm:projectheaddinglg w-full">
            Recent Case Studies
          </span>
        </h1>
        <p className="sm:projectdescriptionlg smallreg flex pt-[1.25rem] text-center text-slate dark:text-white1 sm:px-[2rem] sm:pt-[1.8rem]">
          Dive into my recent success stories and discover how I have helped
          clients overcome challenges, innovate, and achieve their goals
        </p>
      </section>
    </>
  );
};

export default Heading;
