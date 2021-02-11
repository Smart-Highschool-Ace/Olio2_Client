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
  width: 1200px;
  height: 650px;
  background-color: white;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`;

export const ModalInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;

  span {
    flex: 1;
    font-size: 22px;
    font-weight: bold;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65%;
`;

export const ModalBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 25%;

  a {
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    margin-right: 30px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;

  span {
    font-size: 22px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 4rem;
  }
`;

export const ImageButton = styled.button`
  width: 140px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #5a948b;
  color: white;
  margin-right: 30px;
  font-size: 17px;
  font-weight: 400;
`;

export const CancelButton = styled.button`
  width: 140px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: white;
  margin-right: 30px;
  color: black;
  font-size: 17px;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;
