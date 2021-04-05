import React, { useState } from "react";
import { ProjectModal } from "Components";

const project = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      {/* visible은 모달이 보이는 지 안 보이는 지, state는 모달 상태(view, viewOnly, edit, writing, Choice(정보 입력 전 분야 선택 모달)) */}
      <button onClick={openModal}>modal</button>
      {/* {modalVisible && <ProjectModal visible={modalVisible} state="view" />} */}
      {/* {modalVisible && <ProjectModal visible={modalVisible} state="viewOnly" />} */}
      {/* {modalVisible && <ProjectModal visible={modalVisible} state="edit" />} */}
      {/* {modalVisible && <ProjectModal visible={modalVisible} state="writing" />} */}
      {modalVisible && <ProjectModal visible={modalVisible} state="Choice" />}
    </>
  );
};

export default project;
