import React from "react";
import { Modal } from "Components";
import GlobalStyle from "Styles/GlobalStyle";
import { Global } from "@emotion/react";
import { ModalProvider, ModalConsumer } from "Utils/Contexts/ModalContext";
import ModalInfo from "Utils/Models/ModalInfo";
import client from "lib/withApollo";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { NextComponentType } from "next";

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
      <ModalProvider>
        <Global styles={GlobalStyle} />
        <Component {...pageProps} />
        {renderModals()}
      </ModalProvider>
    </ApolloProvider>
  );
};

export default App;
