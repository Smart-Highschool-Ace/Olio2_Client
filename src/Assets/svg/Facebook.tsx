import * as React from "react";

type FacebookProps = {
  width: number;
  height: number;
};

function Facebook({ width, height }: FacebookProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25z"
        fill="#5A948B"
      />
      <path
        d="M31.285 25.979h-4.46v16.343h-6.76V25.979h-3.214v-5.744h3.214V16.52c0-2.658 1.263-6.82 6.82-6.82l5.006.02v5.576h-3.633c-.596 0-1.433.297-1.433 1.565v3.38h5.05l-.59 5.739z"
        fill="#FAFAFA"
      />
    </svg>
  );
}

Facebook.defaultProps = {
  width: 50,
  height: 50,
};

export default Facebook;
