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
          copyText("austin@margarone.dev");
          notify();
        }}
        className="flex items-center gap-[.82rem] pt-[.88rem]"
      >
        <Image src="/Message.svg" width={30} height={30} alt="<Message>" />
        <p className="boldp md:boldbase text-grey"> austin@margarone.dev</p>
      </button>
    </>
  );
};

export default Email;
