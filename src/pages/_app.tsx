import React from "react";
import { Modal } from "Components";
import GlobalStyle from "Styles/GlobalStyle";
import { Global, ThemeProvider } from "@emotion/react";
import { ModalProvider, ModalConsumer } from "Utils/Contexts/ModalContext";
import ModalInfo from "Utils/Models/ModalInfo";
import client from "lib/withApollo";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { NextComponentType } from "next";
import theme from "Styles/theme";

const renderModals = () => {
  return (
    <ModalConsumer>
      {state =>
        (state[0].modalList as ModalInfo[]).map(modal => (
          <Modal key={modal.id} info={modal} />
        ))
      }
    </ModalConsumer>
  );
};

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <Global styles={GlobalStyle} />
          {/* eslint-disable react/jsx-props-no-spreading */}
          <Component {...pageProps} />
          {renderModals()}
        </ModalProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
