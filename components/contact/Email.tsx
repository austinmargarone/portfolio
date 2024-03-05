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
