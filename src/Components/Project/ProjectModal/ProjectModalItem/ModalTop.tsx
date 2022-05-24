import React from "react";
import * as S from "./styled";
import * as I from "../../../../Assets/index";

interface ModalTopProps {
  state: string;
}

const ModalTop: React.FC<ModalTopProps> = (props: ModalTopProps) => {
  const { state } = props;

  if (state === "writing") {
    return (
      <div>
        <S.ModalLogo>
          <button type="button" id="cameraBtn">
            <I.Camera />
          </button>
        </S.ModalLogo>
        <S.ModalH2>
          <input id="modalH2" type="text" placeholder="프로젝트 이름" />
        </S.ModalH2>
      </div>
    );
  }
  return (
    <>
      <S.ModalLogo>
        <I.ProjectLogo />
      </S.ModalLogo>
      <S.ModalH2>취준진담</S.ModalH2>
    </>
  );
};

export default ModalTop;
