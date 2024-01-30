"use client";
import Image from "next/image";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Email = () => {
  function copyText(entryText: string) {
    navigator.clipboard.writeText(entryText);
  }

  const notify = () => toast("Email copied to clipboard!");

  return (
    <>
      <ToastContainer />
      <button
        onClick={() => {
          copyText("austin@fcvt.dev");
          notify();
        }}
        className="herocopy md:herocopylg mb-[1.69rem] flex bg-white hover:shadow-lg dark:bg-darkbg2 md:mb-0 md:w-fit"
      >
        <p className="herocopytext text-slate dark:text-white1">
          austin@margarone.dev
        </p>
        <Image
          className="shrink-0"
          src="/Frame.svg"
          width={16}
          height={16}
          alt="Copy"
        />
      </button>
    </>
  );
};

export default Email;
