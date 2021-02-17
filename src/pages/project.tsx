import React, { useState } from "react";
import { ProjectModal } from "../Components/index";

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
      {/* visible은 모달이 보이는 지 안 보이는 지, state는 모달 상태(view, viewOnly, edit, writing) */}
      <button onClick={openModal}>view</button>
      {/* {modalVisible && <ProjectModal visible={modalVisible} state="view" />} */}
      <button onClick={openModal}>viewOnly</button>
      {modalVisible && <ProjectModal visible={modalVisible} state="viewOnly" />}
      <button onClick={openModal}>edit</button>
      {/* {modalVisible && <ProjectModal visible={modalVisible} state="edit" />} */}
      <button onClick={openModal}>writing</button>
      {/* {modalVisible && <ProjectModal visible={modalVisible} state="writing" />} */}
    </>
  );
};

export default project;
