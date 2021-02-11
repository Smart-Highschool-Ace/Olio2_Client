import styled from "@emotion/styled";

export const Positioner = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: auto;
  outline: 0;
`;

export const ModalWrapper = styled.div`
  display: block;
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 73%;
  height: 853px;
  background-color: white;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`;
