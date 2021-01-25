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
      {modalVisible && (
        <ProjectModal visible={modalVisible}>Hello</ProjectModal>
      )}
    </>
  );
};

export default project;
