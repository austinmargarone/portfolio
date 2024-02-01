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
      className="flex content-center gap-[.1875rem]"
    >
      <Resume
        className="fill-slate dark:fill-white1"
        width={20}
        height={20}
        alt="Download"
      />
      <p className="text-[1rem] font-semibold not-italic text-slate dark:text-white1">
        Resume
      </p>
    </button>
  );
};

export default Download;
