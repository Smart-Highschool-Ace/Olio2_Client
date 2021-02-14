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
  }
`;

export default GlobalStyle;