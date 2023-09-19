import ContactForm from "@/components/contact/ContactForm";
import ContactHeading from "@/components/contact/ContactHeading";
import ContactInfo from "@/components/contact/ContactInfo";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <section>
          <ContactHeading />
        </section>
        <section className="flex flex-col">
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
