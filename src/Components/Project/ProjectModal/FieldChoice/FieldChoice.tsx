import React, { useCallback } from "react";
import { useModalContext } from "Utils/Contexts/ModalContext";
import * as S from "./Styled";
import * as I from "../../../../Assets/index";
import ProjectModal from "../ProjectModal/ProjectModal";

interface FieldChoiceProps {
  state: string;
}

const FieldChoice: React.FC<FieldChoiceProps> = (props: FieldChoiceProps) => {
  const { addModal, removeModal } = useModalContext();
  const { state } = props;

  const handleClickRegisterToProjectModal = useCallback(() => {
    removeModal();

    addModal({
      title: "",
      element: <ProjectModal state={state} />,
      width: "1450px",
      height: "1000px",
    });
  }, []);

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
