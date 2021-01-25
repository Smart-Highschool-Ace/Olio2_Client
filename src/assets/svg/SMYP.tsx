import * as React from "react";

type SMYPProps = {
    width: number;
    height: number;
};

const SMYP = ({width, height}: SMYPProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 558 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.4 12.1c-1.4-.767-2.833-1.4-4.3-1.9-1.433-.5-2.783-.75-4.05-.75-1.567 0-2.8.317-3.7.95-.9.633-1.35 1.583-1.35 2.85 0 .867.333 1.65 1 2.35.7.667 1.583 1.267 2.65 1.8 1.1.533 2.233 1.017 3.4 1.45a22.855 22.855 0 014.15 2.05c1.333.8 2.433 1.917 3.3 3.35.867 1.4 1.3 3.267 1.3 5.6 0 1.867-.483 3.6-1.45 5.2s-2.383 2.9-4.25 3.9c-1.867.967-4.167 1.45-6.9 1.45-2.1 0-4.25-.317-6.45-.95-2.167-.633-4.217-1.633-6.15-3l3.2-5.65c1.267.933 2.717 1.7 4.35 2.3 1.633.6 3.1.9 4.4.9.867 0 1.733-.117 2.6-.35.9-.267 1.633-.7 2.2-1.3.6-.6.9-1.433.9-2.5 0-1.1-.533-2.05-1.6-2.85-1.033-.833-2.283-1.533-3.75-2.1a50.163 50.163 0 01-3.5-1.5A19.609 19.609 0 016 21.35a10.296 10.296 0 01-2.55-3.05c-.633-1.233-.95-2.733-.95-4.5 0-2.133.467-3.983 1.4-5.55.967-1.567 2.317-2.8 4.05-3.7 1.733-.933 3.733-1.45 6-1.55 2.967 0 5.367.35 7.2 1.05 1.867.7 3.533 1.533 5 2.5L23.4 12.1zM31.75 40V.55h6.85V21.6c.767-1.333 1.85-2.417 3.25-3.25 1.4-.833 3.1-1.25 5.1-1.25 2.067 0 3.784.617 5.15 1.85 1.4 1.2 2.117 2.767 2.15 4.7V40h-7V26.25c-.033-.967-.3-1.733-.8-2.3-.466-.6-1.266-.9-2.4-.9-1.633 0-2.933.767-3.9 2.3-.933 1.5-1.4 3.417-1.4 5.75V40h-7zm27.988-11.2c0-2.233.517-4.233 1.55-6 1.067-1.767 2.55-3.15 4.45-4.15 1.9-1.033 4.083-1.55 6.55-1.55 2.5 0 4.667.517 6.5 1.55 1.833 1 3.233 2.383 4.2 4.15 1 1.767 1.5 3.767 1.5 6s-.5 4.25-1.5 6.05c-.967 1.767-2.367 3.167-4.2 4.2-1.833 1.033-4.033 1.55-6.6 1.55-2.4 0-4.55-.467-6.45-1.4-1.867-.933-3.333-2.283-4.4-4.05-1.067-1.767-1.6-3.883-1.6-6.35zm7.05.05c0 1.733.5 3.183 1.5 4.35 1 1.133 2.267 1.7 3.8 1.7 1.633 0 2.933-.567 3.9-1.7.967-1.167 1.45-2.617 1.45-4.35 0-1.733-.483-3.167-1.45-4.3-.967-1.167-2.267-1.75-3.9-1.75-1.533 0-2.8.583-3.8 1.75-1 1.133-1.5 2.567-1.5 4.3zm38.082-10.7l4.1 9.65 3.6-9.65h6.8l-9.85 23.15-7-14.5-6.4 14.5-9.95-23.15h6.8l4.05 9.25 3.05-6.75-1.15-2.5h5.95zm41.189 0l.5 3.45c.834-1.433 1.9-2.55 3.2-3.35 1.334-.8 2.9-1.2 4.7-1.2 1.767 0 3.234.367 4.4 1.1 1.2.7 1.984 1.767 2.35 3.2.9-1.3 1.984-2.333 3.25-3.1 1.3-.8 2.65-1.2 4.05-1.2 2.167 0 3.884.617 5.15 1.85 1.3 1.2 1.967 2.767 2 4.7V40h-6.95V26.5c-.033-.967-.183-1.75-.45-2.35-.266-.633-.883-.983-1.85-1.05-1.133 0-2.1.4-2.9 1.2-.766.767-1.35 1.767-1.75 3-.366 1.2-.55 2.45-.55 3.75V40h-7V26.5c-.033-.967-.216-1.75-.55-2.35-.3-.633-.933-.983-1.9-1.05-1.1 0-2.033.4-2.8 1.2-.733.767-1.3 1.75-1.7 2.95-.366 1.2-.55 2.433-.55 3.7V40h-7V18.15h6.35zm47.564 22.45c-2.666 0-4.933-.5-6.8-1.5-1.833-1-3.233-2.383-4.2-4.15-.966-1.767-1.45-3.8-1.45-6.1 0-2.2.567-4.183 1.7-5.95 1.134-1.767 2.65-3.167 4.55-4.2 1.9-1.067 4.017-1.6 6.35-1.6 3.134 0 5.7.917 7.7 2.75 2.034 1.8 3.35 4.417 3.95 7.85l-16 5.1c1.067 1.233 2.517 1.85 4.35 1.85.767 0 1.5-.133 2.2-.4.734-.267 1.45-.617 2.15-1.05l3.1 5.2a17.557 17.557 0 01-3.8 1.6c-1.333.4-2.6.6-3.8.6zm-5.55-12.15v.45l9.6-3.25a5.238 5.238 0 00-1.45-2.15c-.666-.633-1.666-.95-3-.95-1.566 0-2.816.533-3.75 1.6-.933 1.067-1.4 2.5-1.4 4.3zM228.52 50.5l5.25-11.65-10.1-20.7h7.85l5.75 12.9 5.8-12.9h6.3l-14.1 32.35h-6.75zm22.282-21.7c0-2.233.517-4.233 1.55-6 1.067-1.767 2.55-3.15 4.45-4.15 1.9-1.033 4.084-1.55 6.55-1.55 2.5 0 4.667.517 6.5 1.55 1.834 1 3.234 2.383 4.2 4.15 1 1.767 1.5 3.767 1.5 6s-.5 4.25-1.5 6.05c-.966 1.767-2.366 3.167-4.2 4.2-1.833 1.033-4.033 1.55-6.6 1.55-2.4 0-4.55-.467-6.45-1.4-1.866-.933-3.333-2.283-4.4-4.05-1.066-1.767-1.6-3.883-1.6-6.35zm7.05.05c0 1.733.5 3.183 1.5 4.35 1 1.133 2.267 1.7 3.8 1.7 1.634 0 2.934-.567 3.9-1.7.967-1.167 1.45-2.617 1.45-4.35 0-1.733-.483-3.167-1.45-4.3-.966-1.167-2.266-1.75-3.9-1.75-1.533 0-2.8.583-3.8 1.75-1 1.133-1.5 2.567-1.5 4.3zm30.265 12.2c-1.967 0-3.617-.6-4.95-1.8-1.334-1.233-2.034-2.817-2.1-4.75V18.15h7V31.9c.066.967.316 1.75.75 2.35.433.567 1.166.85 2.2.85 1.566 0 2.8-.75 3.7-2.25.9-1.533 1.35-3.467 1.35-5.8v-8.9h7V40h-6.35l-.5-3.5c-.734 1.367-1.784 2.467-3.15 3.3-1.367.833-3.017 1.25-4.95 1.25zm28.449-22.9l.55 5a9.836 9.836 0 012.6-3.25c1.1-.933 2.183-1.633 3.25-2.1 1.067-.5 1.883-.75 2.45-.75l-.35 7c-1.633-.2-3.033.067-4.2.8a7.516 7.516 0 00-2.7 2.9c-.633 1.2-.95 2.433-.95 3.7V40h-6.95V18.15h6.3zM359.334 3.2c4.566 0 8.066 1.133 10.5 3.4 2.433 2.233 3.65 5.233 3.65 9 0 1.5-.234 3.017-.7 4.55a11.545 11.545 0 01-2.15 4.1c-.967 1.233-2.284 2.233-3.95 3-1.634.733-3.65 1.1-6.05 1.1h-5.2V40h-7.25V3.2h11.15zm1.25 18.1c1.466 0 2.6-.317 3.4-.95.833-.667 1.416-1.433 1.75-2.3.333-.867.5-1.617.5-2.25 0-.367-.067-.85-.2-1.45-.1-.633-.334-1.267-.7-1.9-.367-.633-.934-1.167-1.7-1.6-.734-.433-1.734-.65-3-.65h-5.2v11.1h5.15zm16.537 7.5c0-2.233.516-4.233 1.55-6 1.066-1.767 2.55-3.15 4.45-4.15 1.9-1.033 4.083-1.55 6.55-1.55 2.5 0 4.666.517 6.5 1.55 1.833 1 3.233 2.383 4.2 4.15 1 1.767 1.5 3.767 1.5 6s-.5 4.25-1.5 6.05c-.967 1.767-2.367 3.167-4.2 4.2-1.834 1.033-4.034 1.55-6.6 1.55-2.4 0-4.55-.467-6.45-1.4-1.867-.933-3.334-2.283-4.4-4.05-1.067-1.767-1.6-3.883-1.6-6.35zm7.05.05c0 1.733.5 3.183 1.5 4.35 1 1.133 2.266 1.7 3.8 1.7 1.633 0 2.933-.567 3.9-1.7.966-1.167 1.45-2.617 1.45-4.35 0-1.733-.484-3.167-1.45-4.3-.967-1.167-2.267-1.75-3.9-1.75-1.534 0-2.8.583-3.8 1.75-1 1.133-1.5 2.567-1.5 4.3zm29.514-10.7l.55 5a9.836 9.836 0 012.6-3.25c1.1-.933 2.183-1.633 3.25-2.1 1.067-.5 1.883-.75 2.45-.75l-.35 7c-1.633-.2-3.033.067-4.2.8a7.516 7.516 0 00-2.7 2.9c-.633 1.2-.95 2.433-.95 3.7V40h-6.95V18.15h6.3zm16.258-9.6h7v9.5h5.3v5.45h-5.3V40h-7V23.5h-3.4v-5.45h3.4v-9.5zm18.778-5.35h23v7h-15.75v8.35h13.65v7h-13.65V40h-7.25V3.2z"
        fill="#000"
      />
      <path
        d="M475.851 28.8c0-2.233.517-4.233 1.55-6 1.067-1.767 2.55-3.15 4.45-4.15 1.9-1.033 4.084-1.55 6.55-1.55 2.5 0 4.667.517 6.5 1.55 1.834 1 3.234 2.383 4.2 4.15 1 1.767 1.5 3.767 1.5 6s-.5 4.25-1.5 6.05c-.966 1.767-2.366 3.167-4.2 4.2-1.833 1.033-4.033 1.55-6.6 1.55-2.4 0-4.55-.467-6.45-1.4-1.866-.933-3.333-2.283-4.4-4.05-1.066-1.767-1.6-3.883-1.6-6.35zm7.05.05c0 1.733.5 3.183 1.5 4.35 1 1.133 2.267 1.7 3.8 1.7 1.634 0 2.934-.567 3.9-1.7.967-1.167 1.45-2.617 1.45-4.35 0-1.733-.483-3.167-1.45-4.3-.966-1.167-2.266-1.75-3.9-1.75-1.533 0-2.8.583-3.8 1.75-1 1.133-1.5 2.567-1.5 4.3zM506.116.55h7V40h-7V.55zm14.209 17.6h7V40h-7V18.15zm-.15-7.75c0-1.033.4-1.883 1.2-2.55.833-.667 1.716-1 2.65-1 .933 0 1.783.333 2.55 1 .8.667 1.2 1.517 1.2 2.55s-.4 1.883-1.2 2.55c-.767.633-1.617.95-2.55.95-.934 0-1.817-.317-2.65-.95-.8-.667-1.2-1.517-1.2-2.55zm12.659 18.4c0-2.233.516-4.233 1.55-6 1.066-1.767 2.55-3.15 4.45-4.15 1.9-1.033 4.083-1.55 6.55-1.55 2.5 0 4.666.517 6.5 1.55 1.833 1 3.233 2.383 4.2 4.15 1 1.767 1.5 3.767 1.5 6s-.5 4.25-1.5 6.05c-.967 1.767-2.367 3.167-4.2 4.2-1.834 1.033-4.034 1.55-6.6 1.55-2.4 0-4.55-.467-6.45-1.4-1.867-.933-3.334-2.283-4.4-4.05-1.067-1.767-1.6-3.883-1.6-6.35zm7.05.05c0 1.733.5 3.183 1.5 4.35 1 1.133 2.266 1.7 3.8 1.7 1.633 0 2.933-.567 3.9-1.7.966-1.167 1.45-2.617 1.45-4.35 0-1.733-.484-3.167-1.45-4.3-.967-1.167-2.267-1.75-3.9-1.75-1.534 0-2.8.583-3.8 1.75-1 1.133-1.5 2.567-1.5 4.3z"
        fill="url(#prefix__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={279.5}
          y1={2}
          x2={279.5}
          y2={52}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6DADA8" />
          <stop offset={1} stopColor="#E2EACE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

SMYP.defaultProps = {
    width: 558,
    height: 51,
};

export default SMYP;
