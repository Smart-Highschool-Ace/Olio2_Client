import { css } from "@emotion/react";

const GlobalStyle = css`
  body {
    font-family: "Apple SD Gothic Neo", sans-serif;
  }

  button {
    cursor: pointer;
    outline: none;
    border: 0;
    font-weight: bold;
    border-radius: 5px;
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
