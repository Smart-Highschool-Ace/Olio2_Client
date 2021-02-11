import React from "react";
import * as S from "./Style";

interface ModalProps {
  toggle: any;
}

const ProfileModal: React.FC<ModalProps> = ({ toggle }) => {
  const ClosePopUp = () => {
    toggle();
  };

  return (
    <S.Positioner onClick={ClosePopUp}>
      <S.ModalWrapper onClick={(Event) => Event.stopPropagation()}>
        모달
      </S.ModalWrapper>
    </S.Positioner>
  );
};

export default ProfileModal;
