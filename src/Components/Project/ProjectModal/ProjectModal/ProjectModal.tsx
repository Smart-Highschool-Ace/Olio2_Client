import React, { useCallback } from "react";
import { useModalContext } from "Utils/Contexts/ModalContext";
import * as S from "./styled";
import * as I from "../../../../Assets/index";
import * as C from "../ProjectModalItem";
import FieldChoice from "../FieldChoice/FieldChoice";

interface ProjectModalProps {
  state: string;
}

const ProjectModal: React.FC<ProjectModalProps> = (
  props: ProjectModalProps
) => {
  const { addModal, removeModal } = useModalContext();
  const { state } = props;

  const handleClickRegister = useCallback(() => {
    removeModal();

    addModal({
      title: "",
      element: <FieldChoice state={state} />,
      width: "1450px",
      height: "1000px",
    });
  }, []);

  return (
    <S.ModalForm>
      <S.ModalInner>
        <S.ModalTop>
          <C.ModalTop state={state} />
          <S.ResultBox>
            {
              {
                view: (
                  <>
                    <button type="button" id="red">
                      삭제
                    </button>
                    <button type="button">수정</button>
                  </>
                ),
                edit: <button type="submit">저장</button>,
              }[props.state]
            }
          </S.ResultBox>
          <C.ModalToExplanation state={state} />
          <hr />
        </S.ModalTop>
        <S.ModalBox>
          <S.ModalLeftBox>
            <S.ModalImg>
              <I.ProjectImg />
            </S.ModalImg>
            <C.Participants state={state} />
          </S.ModalLeftBox>
          <S.ModalRightBox>
            <C.ProjectBox state={state} />
            <C.ButtonBox state={state} />
            <C.ProjectResult state={state} />
            <C.GithubBtn state={state} />
            {
              {
                writing: (
                  <S.BackBtn>
                    <button type="button" onClick={() => handleClickRegister()}>
                      이전
                    </button>
                    <button type="submit">저장</button>
                  </S.BackBtn>
                ),
              }[state]
            }
          </S.ModalRightBox>
        </S.ModalBox>
      </S.ModalInner>
    </S.ModalForm>
  );
};

export default ProjectModal;
