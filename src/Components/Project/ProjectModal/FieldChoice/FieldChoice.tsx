import React, { useState, useCallback } from "react";
import * as S from "./Styled";
import * as I from "../../../../Assets/index";
import ProjectModal from "../ProjectModal/ProjectModal";
import { useModalContext } from "Utils/Contexts/ModalContext";

interface FieldChoiceProps {
  state: string;
}

const FieldChoice: React.FC<FieldChoiceProps> = (props: FieldChoiceProps) => {
  const { addModal, removeModal } = useModalContext();

  const handleClickRegisterToProjectModal = useCallback(() => {
    removeModal();

    addModal({
      title: "",
      element: <ProjectModal state={props.state} />,
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
            <button>WEB</button>
            <button>ANDROID</button>
            <button>IOS</button>
            <button>AI</button>
            <button>GAME</button>
            <button>IOT</button>
          </div>
          <button onClick={() => handleClickRegisterToProjectModal()}>
            다 음
          </button>
        </S.FieldChoice>
      </S.ModalInner>
    </S.ModalForm>
  );
};

export default FieldChoice;
