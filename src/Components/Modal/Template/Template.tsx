import React from "react";
import * as S from "./Style";

interface ModalTemplateProps {
  toggle: any;
  width: number;
  height: number;
}

const Template: React.FC<ModalTemplateProps> = ({
  children,
  toggle,
  width,
  height,
}) => {
  const ClosePopUp = () => {
    toggle();
  };

  return (
    <S.Positioner onClick={ClosePopUp}>
      <S.ModalWrapper
        onClick={e => e.stopPropagation()}
        width={width}
        height={height}
      >
        {children}
      </S.ModalWrapper>
    </S.Positioner>
  );
};

export default Template;
