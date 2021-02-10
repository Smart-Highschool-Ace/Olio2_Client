import { Modal } from "Components";
import type { AppProps } from "next/app";

import { ModalProvider, ModalConsumer } from "Utils/Contexts/ModalContext";
import ModalInfo from "Utils/Models/ModalInfo";

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
    <ModalProvider>
      <Component {...pageProps} />
      {renderModals()}
    </ModalProvider>
  );
}

export default MyApp;
