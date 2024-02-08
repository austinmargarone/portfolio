"use client";
import Image from "next/image";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Email = () => {
  function copyText(entryText: string) {
    navigator.clipboard.writeText(entryText);
  }

  const notify = () => toast("Phone Number copied to clipboard!");

  return (
    <>
      <ToastContainer />
      <button
        onClick={() => {
          copyText("15855015690");
          notify();
        }}
        className="flex items-center gap-[.82rem] pt-[.88rem]"
      >
        <Image src="/Call.svg" width={30} height={30} alt="Phone" />
        <p className="boldp md:boldbase text-grey">1-585-501-5690</p>
      </button>
    </>
  );
};

export default Email;
