import React from "react";
import { Resume } from "./svg";

const Download: React.FC = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = `${window.location.origin}/AustinsResume.pdf`;
    link.download = "AustinsResume.pdf";

    // Append the link to the document and trigger the download
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={downloadResume}
      className="flex w-[10rem] content-center justify-center gap-[.1875rem] rounded-[.33rem] bg-blue p-[.25rem] dark:bg-blue1 sm:w-[15rem] sm:p-[.5rem]"
    >
      <Resume
        className="my-auto fill-white"
        width={20}
        height={20}
        alt="Download"
      />
      <p className="boldbody sm:boldp text-white1 underline">Resume</p>
    </button>
  );
};

export default Download;
