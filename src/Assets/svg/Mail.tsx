import * as React from "react";

function Mail() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 5h20v14H2z"
      />
      <path d="M2 5l10 9 10-9M2 19l7-8" stroke="#333" />
      <path clipRule="evenodd" d="M22 19l-7-8 7 8z" stroke="#333" />
    </svg>
  );
}

export default Mail;
