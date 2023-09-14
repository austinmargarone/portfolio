import Contact from "@/components/Contact";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <header className="casehead mx-auto flex w-[24.5625rem] flex-col ">
          <h1 className="casetitle">
            Recent <span className="underline-magic w-full">Case</span>
            <span className="underline-magic w-full">Studies</span>
          </h1>
          <p className="smallreg flex text-center text-slate">
            Dive into my recent success stories and discover how I have helped
            clients overcome challenges, innovate, and achieve their goals
          </p>
        </header>
        <main></main>
        <section>
          <Contact />
        </section>
      </div>
    </>
  );
};

export default page;
