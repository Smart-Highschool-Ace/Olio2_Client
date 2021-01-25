import * as React from "react";

type Vector7Props = {
    width: number;
    height: number;
};

const Vector7 = ({width, height}: Vector7Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 610 1461"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M315.468 398.274C250.66 93.56 484.82 5.794 610 0v1461c-105.845-30.46-340.638-102.9-433.048-148.98C61.44 1254.41-19.069 1154.6 3.933 916.725c23.003-237.871 392.544-137.558 311.535-518.451z"
        fill="#5A948B"
        fillOpacity={0.13}
      />
    </svg>
  );
};

Vector7.defaultProps = {
    width: 610,
    height: 1461,
}

export default Vector7;