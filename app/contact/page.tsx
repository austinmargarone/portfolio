import ContactForm from "@/components/contact/ContactForm";
import ContactHeading from "@/components/contact/ContactHeading";
import ContactInfo from "@/components/contact/ContactInfo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact | Full Stack Developer | NextJS | React",
  description:
    "Contact me for any inquiries or to discuss a project. I specialize in building NextJS and React web applications.",
  keywords:
    "Full Stack Developer, NextJS, React, TypeScript, TailwindCSS, GraphQl, MongoDB, NodeJS, Web Development, Frontend",
  openGraph: {
    images: [
      {
        url: `https://austinmargarone.com/meta.png`,
        width: 1200,
        height: 630,
        alt: "Full Stack Developer",
      },
    ],
  },
};

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
