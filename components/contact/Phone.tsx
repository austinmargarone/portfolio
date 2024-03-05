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
    toast("Phone Number copied to clipboard!", {
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
