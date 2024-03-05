"use client";
import Image from "next/image";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Email = () => {
  function copyText(entryText: string) {
    navigator.clipboard.writeText(entryText);
  }

  const notify = () =>
    toast("Email copied to clipboard!", {
      position: "top-center",
      autoClose: 4200,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "#FFFFFF",
        color: "#151E2C",
        borderRadius: "10px",
        border: "2px solid #151E2C",
        boxShadow: "0px 0px 10px 0px #151E2C",
      },
    });

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
