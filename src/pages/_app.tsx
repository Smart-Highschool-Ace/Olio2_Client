import { Modal } from "Components";
import type { AppProps } from "next/app";
import GlobalStyle from "Styles/GlobalStyle";
import { Global } from "@emotion/react";
import { ModalProvider, ModalConsumer } from "Utils/Contexts/ModalContext";
import ModalInfo from "Utils/Models/ModalInfo";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "apollo-link-context";

const httpLink = new HttpLink({ uri: process.env.REACT_APP_API_URL });

const authLink = setContext(async (req, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    ...headers,
    headers: {
      Authorization: token && `Bearer ${token}`,
    },
  };
});

const link = authLink.concat(httpLink as any);

const client = new ApolloClient({
  link: link as any,
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
