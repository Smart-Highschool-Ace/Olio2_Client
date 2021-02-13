import styled from "@emotion/styled";

interface StyleProps {
  width: number;
  height: number;
}

export const Positioner = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
  outline: 0;
`;

export const ModalWrapper = styled.div<StyleProps>`
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  background-color: white;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`;
