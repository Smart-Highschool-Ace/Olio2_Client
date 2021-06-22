import { Modal } from "Components";
import type { AppProps } from "next/app";
import GlobalStyle from "Styles/GlobalStyle";
import { Global } from "@emotion/react";
import { ModalProvider, ModalConsumer } from "Utils/Contexts/ModalContext";
import ModalInfo from "Utils/Models/ModalInfo";

import { ApolloProvider } from "@apollo/react-hooks";
import withApolloClient from "lib/withApollo";

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

function App({ Component, pageProps, apollo }) {
  return (
    <ModalProvider>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
      {renderModals()}
    </ModalProvider>
  );
}

App.getInitialProps = async ({ ctx, Component }) => {
  const pageProps = await Component.getInitialProps?.(ctx);

  return pageProps;
};

export default App;
