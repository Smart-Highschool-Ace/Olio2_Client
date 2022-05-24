import * as React from "react";

function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      /* eslint-disable react/jsx-props-no-spreading */
      {...props}
    >
      <g stroke="#8D8D8D">
        <path d="M4.667 8.667l2 2L11.334 6" strokeLinecap="round" />
        <path
          clipRule="evenodd"
          d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"
        />
      </g>
    </svg>
  );
}

export default Check;
