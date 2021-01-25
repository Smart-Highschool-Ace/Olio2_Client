import * as React from "react";

type Olio_Page2Props = {
    width: number;
    height: number;
};

const Olio_Page2 = ({width, height}: Olio_Page2Props) => {
  return (
    <svg
      width={140}
      height={40}
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={140} height={40} rx={20} fill="#5A948B" fillOpacity={0.27} />
      <path
        d="M54.02 26.4c3.68 0 6.38-2.34 6.38-6.88v-.44c0-4.64-2.6-6.84-6.28-6.84s-6.38 2.32-6.38 6.86v.46c0 4.6 2.6 6.84 6.28 6.84zm.06-2.16c-2.34 0-3.34-1.64-3.34-4.7v-.7c0-2.72 1.1-4.46 3.28-4.46 2.44.02 3.4 1.7 3.4 4.72v.68c0 2.72-1.12 4.46-3.34 4.46zm8.441 1.94h8.48V24h-5.64V12.46h-2.84v13.72zm10.49 0h2.86V12.46h-2.86v13.72zm11.36.22c3.68 0 6.38-2.34 6.38-6.88v-.44c0-4.64-2.6-6.84-6.28-6.84s-6.38 2.32-6.38 6.86v.46c0 4.6 2.6 6.84 6.28 6.84zm.06-2.16c-2.34 0-3.34-1.64-3.34-4.7v-.7c0-2.72 1.1-4.46 3.28-4.46 2.44.02 3.4 1.7 3.4 4.72v.68c0 2.72-1.12 4.46-3.34 4.46z"
        fill="#5A948B"
        fillOpacity={0.77}
      />
    </svg>
  );
};

Olio_Page2.defaultProps = {
    width: 140,
    height: 40,
};

export default Olio_Page2;