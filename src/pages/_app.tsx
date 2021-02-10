import type { AppProps } from "next/app";
import { Fragment } from "react";
import GlobalStyle from "styles/GlobalStlye";
import { Global } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
