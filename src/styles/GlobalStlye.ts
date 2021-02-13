import { css } from "@emotion/react";

const GlobalStyle = css`
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  button {
    cursor: pointer;
    outline: none;
    border: 0;
  }

  ::-webkit-scrollbar {
    width: 13px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5a948b;
    border-radius: 10px;
  }
`;

export default GlobalStyle;
