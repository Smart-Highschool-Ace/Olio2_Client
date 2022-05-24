import * as React from "react";

type TSProps = {
  width: number;
  height: number;
};

function TS({ width, height }: TSProps) {
  return (
    <svg
      width={205}
      height={185}
      viewBox="0 0 205 185"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={98} cy={95} r={90} fill="#5A948B" fillOpacity={0.13} />
      <circle cx={98} cy={95} r={79.5} stroke="#5A948B" strokeDasharray="5 5" />
      <circle
        cx={98}
        cy={95}
        r={69}
        fill="#fff"
        stroke="url(#prefix__paint0_linear)"
        strokeWidth={2}
      />
      <circle cx={173} cy={5} r={5} fill="#5A948B" />
      <circle cx={6} cy={159} r={6} fill="#5A948B" fillOpacity={0.42} />
      <circle cx={201} cy={57} r={4} fill="#5A948B" fillOpacity={0.68} />
      <g clipPath="url(#prefix__clip0)" fill="#5A948B">
        <path d="M102.324 83.368h15.318a.733.733 0 000-1.467h-15.318a.734.734 0 000 1.467zM118.375 87.305a.733.733 0 00-.733-.733h-15.318a.734.734 0 100 1.467h15.318a.733.733 0 00.733-.734zM109.113 91.243h-6.789a.734.734 0 000 1.467h6.789a.733.733 0 000-1.467z" />
        <path d="M119.239 74.692H93.164c-5.088-3.307-11.913-2.729-16.348 1.706-5.089 5.089-5.089 13.368 0 18.457.13.13.262.254.396.378v7.581a3.764 3.764 0 003.76 3.76h14.15l-1.01 4.355h-1.199a4.836 4.836 0 00-4.83 4.83c0 .917.745 1.663 1.662 1.663h20.721c.917 0 1.663-.746 1.663-1.663a4.836 4.836 0 00-4.831-4.83h-1.199l-1.009-4.355h14.149a3.764 3.764 0 003.761-3.76V78.452a3.765 3.765 0 00-3.761-3.76zm-33.209-.648c9.667 0 15.106 11.184 9.106 18.762-4.325 5.463-12.403 5.891-17.282 1.011-7.294-7.293-2.053-19.773 8.176-19.773zm10.26 23.86l2.032-2.032.01-.01a.156.156 0 01.112-.046c.03 0 .074.008.112.046l6.086 6.086a1.61 1.61 0 01-2.276 2.276l-6.086-6.085a.16.16 0 010-.226l.009-.009zm-.52-1.556l-1.008-1.009c.332-.298.669-.632.995-.995l1.009 1.009-.996.995zm-9.74 2.327c2.697 0 5.359-.832 7.58-2.413l1.243 1.244c-.19.567-.062 1.22.39 1.67l.916.917H78.68V96.4a12.973 12.973 0 007.352 2.275zm-7.35 4.139v-1.254h18.947l3.546 3.547h-20.2a2.296 2.296 0 01-2.294-2.293zm31.982 12.945a.195.195 0 01-.195.195H89.745a.195.195 0 01-.195-.195 3.367 3.367 0 013.363-3.363h14.385a3.367 3.367 0 013.364 3.363zm-6.069-4.83h-8.974l1.008-4.355h6.957l1.009 4.355zm14.646-5.822h-13.416a3.082 3.082 0 00.352-3.547h4.793a.733.733 0 100-1.467h-6.106l-5.268-5.268a1.616 1.616 0 00-1.671-.39l-1.243-1.242c3.68-5.155 3.123-12.265-1.407-16.795-.082-.081-.165-.16-.248-.239h24.214a2.295 2.295 0 012.293 2.293v21.641h-7.403a.734.734 0 000 1.468h7.403v1.253a2.295 2.295 0 01-2.293 2.293z" />
        <path d="M86.045 96.008a10.376 10.376 0 0010.381-10.382 10.376 10.376 0 00-10.381-10.381c-5.228 0-9.502 3.838-10.262 8.804a.734.734 0 001.45.222c.649-4.237 4.3-7.559 8.812-7.559a8.91 8.91 0 018.914 8.915c0 2.15-.758 4.181-2.144 5.795a2.966 2.966 0 00-1.436-1.315c-.754-.332-1.987-.55-2.963-.68l-.003-.756a3.992 3.992 0 001.549-2.533 1.251 1.251 0 00.736-1.148 434.29 434.29 0 01-.005-2.12v-1.094c0-.826-.591-1.517-1.373-1.672a1.708 1.708 0 00-1.664-1.332h-3.231a3.089 3.089 0 00-3.085 3.085v3.146c0 .502.299.936.728 1.132a4.002 4.002 0 001.478 2.478l.003.835c-.974.139-2.206.367-2.957.705-.584.263-1.048.7-1.347 1.239a8.843 8.843 0 01-1.982-4.229.733.733 0 10-1.446.252 10.317 10.317 0 002.887 5.552 10.319 10.319 0 007.34 3.041zm-1.62-15.769h3.231c.131 0 .238.107.238.238 0 .585.476 1.061 1.062 1.061h.033c.13 0 .237.107.237.238v.289l-.739-.07a3.794 3.794 0 00-2.321.54c-.362.221-.779.339-1.203.339h-2.156v-1.017a1.62 1.62 0 011.618-1.618zm-1.618 4.57v-.468h2.155c.696 0 1.377-.192 1.97-.555a2.319 2.319 0 011.418-.33l.877.083c0 .386.001.873.003 1.266a.896.896 0 00-.685.817 2.532 2.532 0 01-2.528 2.38 2.54 2.54 0 01-2.533-2.378.902.902 0 00-.677-.816zm3.21 4.66c.32 0 .632-.038.932-.11l.001.291c0 .163.035.32.095.463a1.981 1.981 0 01-1.06.309h-.007a1.98 1.98 0 01-1.052-.3c.06-.144.092-.3.091-.464l-.001-.317c.32.083.656.128 1 .128zm-4.822 2.021c.439-.197 1.316-.404 2.389-.564.64.617 1.491.963 2.394.963h.01a3.438 3.438 0 002.406-.984c1.074.152 1.953.35 2.394.545.48.21.794.608.88 1.093a8.847 8.847 0 01-5.623 1.998 8.847 8.847 0 01-5.667-2.033 1.45 1.45 0 01.817-1.018z" />
      </g>
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={98}
          y1={25}
          x2={98}
          y2={165}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5A948B" stopOpacity={0.8} />
          <stop offset={1} stopColor="#0FA890" stopOpacity={0.24} />
        </linearGradient>
        <clipPath id="prefix__clip0">
          <path fill="#fff" transform="translate(73 70)" d="M0 0h50v50H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

TS.defaultProps = {
  width: 205,
  height: 185,
};

export default TS;
