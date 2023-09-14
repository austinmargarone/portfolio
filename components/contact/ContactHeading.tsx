import React from "react";

const ContactHeading = () => {
  return (
    <>
      <section className="casehead form mx-auto flex w-[21rem] flex-col md:w-[41.125rem]">
        <h1 className="casetitle md:projectstitlelg dark:text-white">
          <span className="underline-magic md:projectheaddinglg w-full">
            Get in Touch
          </span>
        </h1>
        <p className="md:projectdescriptionlg smallreg flex pt-[1.25rem] text-center text-slate dark:text-white1 md:px-[2rem] md:pt-[1.8rem]">
          Contact me to collaborate on Your Next Project
        </p>
      </section>
    </>
  );
};

export default ContactHeading;
