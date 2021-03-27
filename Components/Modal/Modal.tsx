import React, { useCallback, useEffect, useRef } from "react";
import * as S from "./Style";

import { useModalContext } from "Utils/Contexts/ModalContext";
import ModalInfo from "Utils/Models/ModalInfo";

interface ModalProps {
  info: ModalInfo;
}

const Modal = (props: ModalProps) => {
  const { info } = props;
  const { removeModal } = useModalContext();

  const clonedElement = info.element
    ? React.cloneElement(info.element, {
        modalId: info.id,
      })
    : undefined;

  const onConfirm = useCallback(() => {
    if (info.confirmAction) {
      info.confirmAction();
    }
    removeModal(info.id);
  }, [info, removeModal]);
  const onClose = useCallback(() => {
    if (info.closeAction) {
      info.closeAction();
    }
    removeModal(info.id);
  }, [info, removeModal]);

  const onModalInnerClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <S.ModalBackground onClick={onClose}>
      <S.ModalBox
        onClick={onModalInnerClick}
        width={info.width}
        height={info.height}
      >
        {clonedElement}
      </S.ModalBox>
    </S.ModalBackground>
  );
};

export default Modal;
