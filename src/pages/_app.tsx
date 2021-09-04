import { Modal } from "Components";
import GlobalStyle from "Styles/GlobalStyle";
import { Global } from "@emotion/react";
import { ModalProvider, ModalConsumer } from "Utils/Contexts/ModalContext";
import ModalInfo from "Utils/Models/ModalInfo";
import client from "lib/withApollo";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { ApolloProvider } from "@apollo/client";

const renderModals = () => {
  return (
    <ModalConsumer>
      {(state) =>
        (state[0].modalList as ModalInfo[]).map((modal) => (
          <Modal key={modal.id} info={modal} />
        ))
      }
    </ModalConsumer>
  );
};

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <Global styles={GlobalStyle} />
        <Component {...pageProps} />
        {renderModals()}
      </ModalProvider>
    </ApolloProvider>
  );
}

export default App;
