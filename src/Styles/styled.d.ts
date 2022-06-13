import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    borderRadius: string;
    bodyWidth: string;

    colors: {
      main: string;
      green: string;
      blue: string;
      white: string;
      black: string;
    };

    fontSize: {
      h1: string;
      h2: string;
      large: string;
      medium: string;
      small: string;
    };

    buttonPadding: {
      large: string;
      medium: string;
      small: string;
    };
  }
}
