import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, Children } from "react";
import { borderColor, height } from "styled-system";

import { useModalContext } from "Utils/Contexts/ModalContext";
import ModalInfo from "Utils/Models/ModalInfo";

interface ModalProps {
  info: ModalInfo;
}

const Modal = (props: ModalProps) => {
  const { info } = props;
  const { removeModal } = useModalContext();

  const buttonRef = useRef<HTMLButtonElement>();

  const clonedElement = info.element
    ? React.cloneElement(info.element, {
        modalId: info.id,
      })
    : undefined;

  useEffect(() => {
    if (!info.showOnlyBody && !info.withoutConfirm) {
      buttonRef.current.focus();
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

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
    <ModalBackground onClick={onClose}>
      <ModalBox onClick={onModalInnerClick} height={info.height}>
        {!info.showOnlyBody && (
          <ModalHeader>
            {info.title}
            <CloseIcon onClick={onClose} />
          </ModalHeader>
        )}
        {info.message && (
          <div style={{ whiteSpace: "pre-line" }}>{info.message}</div>
        )}
        {clonedElement}
        {!info.showOnlyBody && (
          <div>
            {info.closeAction && (
              <button onClick={onClose}>{info.closeLabel || "취소"}</button>
            )}
            {!info.withoutConfirm && (
              <button onClick={onConfirm} ref={buttonRef}>
                {info.confirmLabel || "확인"}
              </button>
            )}
          </div>
        )}
      </ModalBox>
    </ModalBackground>
  );
};

export default Modal;

interface ModalBoxProps {
  height: any;
}

const CloseIcon = styled.div`
  position: absolute !important;
  right: -10px;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  z-index: 1050;
`;

const ModalBox = styled.div<ModalBoxProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: ${(props) => (props.height ? "initial" : "70%")};
  overflow-y: scroll;
  border: 1px solid;
  border-radius: 7px;
  box-shadow: 4px 6px 20px 0 rgba(0, 0, 0, 0.09);
  transform: translate(-50%, -50%);
  ${borderColor}
  ${height}
`;

const ModalHeader = styled.div`
  position: relative;
  border-bottom: 1px solid;
  ${borderColor}
`;
