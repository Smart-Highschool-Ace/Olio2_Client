import React, { useState } from "react";
import { ProjectModal } from "../components/index";

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
      <button onClick={openModal}>Open Modal</button>
      {/* visible은 모달이 보이는 지 안 보이는 지, state는 모달 상태(view, viewOnly, edit, writing) */}
      {modalVisible && <ProjectModal visible={modalVisible} state="view" />}
    </>
  );
};

export default project;
