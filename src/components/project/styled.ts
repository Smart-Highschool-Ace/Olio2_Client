import styled from "@emotion/styled";
import ProjectModalProps from "./ProjectModal";
import { ProjectImg } from "../../assets/index";

interface ProjectModalProps {
  visible: boolean;
}

interface ProjectImg {
  img: string;
}

export const ModalOverlay = styled.div<ProjectModalProps>`
  display: ${(props) => (props.visible ? "block" : "none")};
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

export const ModalWrapper = styled.div<ProjectModalProps>`
  display: ${(props) => (props.visible ? "block" : "none")};
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

export const ModalInner = styled.div`
  width: 100%;
  height: 100%;
  color: black;
`;

export const ModalTop = styled.div`
  padding: 3% 3% 0;
  width: 100%;
  height: 18.6%;
  & > span {
    font-weight: 700;
    font-size: 40px;
  }
  button {
    float: right;
    border: solid 0px;
    background-color: #fff;
    outline: 0;
    font-size: 15px;
  }
  #red {
    color: #cd6152;
  }
  #modalH2 {
    font-size: 40px;
    font-weight: 700;
    color: black;
  }
  & :nth-of-type(2) {
    /* font-size: 18px; */
    color: #737373;
    display: flex;
    justify-content: space-between;
    margin-bottom: 17px;
  }
`;

export const ModalBox = styled.div`
  /* background-color: #000fff; */
  height: 100%;
  display: flex;
`;

export const ModalLeftBox = styled.div`
  width: 68%;
  height: 81.4%;
  /* background-color: #ff0000; */
  margin-left: 3%;
  .modalImg {
    width: 100%;
    height: 65%;
    background-color: black;
    display: block;
    border-radius: 10px;
  }
  & :nth-of-type(2) {
    color: ff;
  }
`;

export const ButtonBox = styled.div`
  button {
    outline: 0;
    background-color: #ffffff;
    color: #6c6c6c;
    border: 1px solid #6c6c6c;
    padding: 3px 8px;
    font-size: 12px;
    border-radius: 10px;
    margin: 12px 14.4px 25px 0;
  }
`;

export const participants = styled.div`
  & :first-of-type {
    margin: 16px 0 12px 0;
  }
  div {
    display: flex;
  }
`;

export const ModalRightBox = styled.div`
  width: 32%;
  height: 81.4%;
  /* background-color: #ffff00; */
  margin: 0 3% 0 0.8%;
`;
