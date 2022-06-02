import React from "react";
import { useHandleClickModalBtn } from "hook";
import { ModalStateType } from "Utils/GlobalTypes";
import * as S from "./Styled";
import * as I from "../../../../Assets/index";

const FieldChoice: React.FC<{ state: ModalStateType }> = props => {
  const { state } = props;

  const handleClickRegisterToProjectModal = useHandleClickModalBtn({
    modalName: "Project",
    state,
  });

  return (
    <S.ModalForm>
      <S.ModalInner>
        <I.FieldChoiceImage />
        <S.Main>
          <div>프로젝트 분야를 선택해주세요</div>
          <span>(중복선택 가능)</span>
        </S.Main>
        <S.FieldChoice>
          <div>
            <button type="button">WEB</button>
            <button type="button">ANDROID</button>
            <button type="button">IOS</button>
            <button type="button">AI</button>
            <button type="button">GAME</button>
            <button type="button">IOT</button>
          </div>
          <button
            type="submit"
            onClick={() => handleClickRegisterToProjectModal()}
          >
            다 음
          </button>
        </S.FieldChoice>
      </S.ModalInner>
    </S.ModalForm>
  );
};

export default FieldChoice;
