import { Theme } from "@emotion/react";

function pxToRem(px: number): string {
  return `${px / 16}rem`;
}

const theme: Theme = {
  borderRadius: "5px",
  bodyWidth: "1080px",

  colors: {
    main: "#5A948B",
    green: "#e9f8f6",
    blue: "#7390c2",
    white: "#ffffff",
    black: "#3D3D3D",
  },

  fontSize: {
    h1: pxToRem(50),
    h2: pxToRem(30),
    large: pxToRem(20),
    medium: pxToRem(15),
    small: pxToRem(10),
  },

  buttonPadding: {
    large: pxToRem(20) + " " + pxToRem(60),
    medium: pxToRem(15) + " " + pxToRem(45),
    small: pxToRem(10) + " " + pxToRem(30),
  },
};

export default theme;
