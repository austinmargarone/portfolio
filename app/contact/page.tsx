import ContactForm from "@/components/contact/ContactForm";
import ContactHeading from "@/components/contact/ContactHeading";
import ContactInfo from "@/components/contact/ContactInfo";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mx-auto overflow-x-hidden md:max-w-[50rem] lg:max-w-[65rem] xl:max-w-[75rem]">
        <section>
          <ContactHeading />
        </section>
        <section className="mx-auto flex flex-col lg:flex-row-reverse">
          <div className="flex">
            <ContactForm />
          </div>
          <div className="flex">
            <ContactInfo />
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
