import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    bodyWidth: string;

    colors: {
      main: string;
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
      small: string;
    };
  }
}
