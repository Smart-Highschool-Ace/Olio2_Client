import { Modal } from "Components";
import type { AppProps } from "next/app";
import GlobalStyle from "Styles/GlobalStyle";
import { Global } from "@emotion/react";
import { ModalProvider, ModalConsumer } from "Utils/Contexts/ModalContext";
import ModalInfo from "Utils/Models/ModalInfo";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { setContext } from "apollo-link-context";

const authLink = setContext(async (req, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    ...headers,
    headers: {
      Authorization: token && `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  uri: "http://3.37.43.254/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
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

export default MyApp;
