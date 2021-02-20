import React, { useState } from "react";
import * as S from "./Styled";
import * as I from "../../../Assets/index";
import ProjectModalWriting from "./ProjectModalWriting";
import Template from "../../Modal/Template/Template";

interface FieldChoiceProps {
  visible: boolean;
  toggle?: any;
}

const FieldChoice: React.FC<FieldChoiceProps> = (props: FieldChoiceProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <S.ModalForm>
        <S.ModalInner visible={props.visible}>
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
            <button onClick={openModal}>다 음</button>
            {modalVisible && (
              <Template toggle={props.toggle} width={1450} height={1050}>
                <ProjectModalWriting visible={modalVisible} />
              </Template>
            )}
          </S.FieldChoice>
        </S.ModalInner>
      </S.ModalForm>
    </>
  );
};

export default FieldChoice;
