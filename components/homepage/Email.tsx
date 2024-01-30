"use client";
import Image from "next/image";
import React from "react";

const Email = () => {
  function copyText(entryText: string) {
    navigator.clipboard.writeText(entryText);
  }
  return (
    <>
      <button
        onClick={() => copyText("austin@fcvt.dev")}
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
