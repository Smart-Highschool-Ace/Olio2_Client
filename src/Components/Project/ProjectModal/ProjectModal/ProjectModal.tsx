import React, { useState, useCallback } from "react";
import * as S from "./styled";
import * as I from "../../../../Assets/index";
import * as C from "../ProjectModalItem";
import { useModalContext } from "Utils/Contexts/ModalContext";
import FieldChoice from "../FieldChoice/FieldChoice";

interface ProjectModalProps {
  visible?: boolean;
  state?: string;
}

const ProjectModal: React.FC<ProjectModalProps> = (
  props: ProjectModalProps
) => {
  const { addModal, removeModal } = useModalContext();

  const handleClickRegister = useCallback(() => {
    removeModal();

    addModal({
      title: "",
      element: <FieldChoice state={props.state} />,
      width: "1450px",
      height: "1000px",
    });
  }, []);

  return (
    <>
      <S.ModalForm>
        <S.ModalInner>
          <S.ModalTop>
            <C.ModalTop state={props.state} />
            <S.ResultBox>
              {
                {
                  view: (
                    <>
                      <button id="red">삭제</button>
                      <button>수정</button>
                    </>
                  ),
                  edit: <button>저장</button>,
                }[props.state]
              }
            </S.ResultBox>
            <C.ModalToExplanation state={props.state} />
            <hr />
          </S.ModalTop>
          <S.ModalBox>
            <S.ModalLeftBox>
              <S.ModalImg>
                <I.ProjectImg />
              </S.ModalImg>
              <C.Participants state={props.state} />
            </S.ModalLeftBox>
            <S.ModalRightBox>
              <C.ProjectBox state={props.state} />
              <C.ButtonBox state={props.state} />
              <C.ProjectResult state={props.state} />
              <C.GithubBtn state={props.state} />
              {
                {
                  writing: (
                    <S.BackBtn>
                      <button onClick={() => handleClickRegister()}>
                        이전
                      </button>
                      <button>저장</button>
                    </S.BackBtn>
                  ),
                }[props.state]
              }
            </S.ModalRightBox>
          </S.ModalBox>
        </S.ModalInner>
      </S.ModalForm>
    </>
  );
};

export default ProjectModal;
