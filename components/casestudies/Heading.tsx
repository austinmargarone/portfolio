import React from "react";

const Heading = () => {
  return (
    <>
      <section className="casehead mx-auto flex w-[21rem] flex-col md:w-[41.125rem]">
        <h1 className="casetitle md:projectstitlelg dark:text-white">
          <span className="underline-magic md:projectheaddinglg w-full">
            {" "}
            My Portfolio{" "}
          </span>
        </h1>
        <p className="md:projectdescriptionlg smallreg flex pt-[1.25rem] text-center text-slate dark:text-white1 md:px-[2rem] md:pt-[1.8rem]">
          Dive into my recent success stories and discover how I have helped
          clients overcome challenges, innovate, and achieve their goals
        </p>
      </section>
    </>
  );
};

export default Heading;
