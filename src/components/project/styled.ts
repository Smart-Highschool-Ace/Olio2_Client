import styled from "@emotion/styled";
import ProjectModalProps from "./ProjectModal";

interface ProjectModalProps {
  visible?: boolean;
  state?: string;
}

export const ModalWrapper = styled.div<ProjectModalProps>`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`;

export const ModalForm = styled.form`
  width: 100%;
  height: 100%;
`;

export const ModalInner = styled.div`
  width: 100%;
  height: 100%;
  color: black;
  input {
    outline: none;
    border: none;
  }
  button {
    cursor: pointer;
    outline: none;
  }
`;

export const ModalTop = styled.div`
  padding: 4% 4.5% 0;
  width: 100%;
  height: 17.6%;
  & > span {
    font-weight: 700;
    font-size: 40px;
  }
  #cameraBtn {
    background-color: #e7e7e7;
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
  button {
    float: right;
    border: solid 0px;
    outline: 0;
    font-size: 15px;
    background-color: white;
  }
  #red {
    color: #cd6152;
  }
  #modalH2 {
    font-size: 40px;
    font-weight: 700;
    padding-left: 15px;
    color: black;
  }
`;

export const ModalToExplanation = styled.div`
  font-size: 18px;
  color: #737373;
  display: flex;
  justify-content: space-between;
  margin-bottom: 17px;
  button {
    border: solid 1px #5a948b;
    color: #5a948b;
    padding: 3px 27px;
    border-radius: 20px;
  }
  div {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    position: relative;
    div {
      align-self: flex-start;
    }
    input {
      font-size: 12px;
      width: 10%;
      border: solid 1px #d0d0d0;
      border-radius: 5px;
      text-align: center;
      margin: 0 2px;
    }
  }
  div ::before {
    content: "참여기간";
    position: absolute;
    /* top: 0; */
    left: 37.5%;
    bottom: 74%;
    transform: translate(-50%, -50%);
  }
  svg {
    position: relative;
    top: -13px;
    margin: 0 7px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & > input {
    width: 70%;
  }
  & :last-child {
    /* font-size: 16px; */
  }
`;

export const ModalLogo = styled.div`
  display: inline-block;
  position: relative;
  top: 13px;
`;

export const ModalBox = styled.div`
  /* background-color: #000fff; */
  height: 100%;
  display: flex;
`;

export const ModalLeftBox = styled.div<ProjectModalProps>`
  width: 63%;
  height: 81.4%;
  margin-left: 4.5%;
  .modalImg {
    margin-top: 28px;
    outline: none;
    border: none;
    color: #828282;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 98%;
    height: 62%;
    overflow: hidden;
    border-radius: 10px;
    svg {
      /* margin-bottom: 10px; */
    }
  }
`;

export const participants = styled.div`
  & > div {
    font-size: 16px;
  }
  margin-top: 30px;
  .participantsGroup {
    display: flex;
    flex-flow: row wrap;
    margin-top: 12px;
  }
  .searchbar {
    font-size: 12px;
    div {
      width: 250px;
      padding: 2px 5px;
      border-radius: 10px;
      background-color: #e7e7e7;
      margin-bottom: 8px;
    }
    input {
      padding: 0px;
      border-radius: 0 10px 10px 0;
      background-color: #e7e7e7;
    }
    textarea {
      width: 250px;
      padding-left: 10px;
      border-radius: 10px;
      background-color: #e7e7e7;
      resize: none;
      border: none;
      outline: none;
    }
    button {
      margin-top: 15px;
      margin-left: 195px;
      padding: 3px 0 0 15px;
      background-color: white;
      border-radius: 8px;
      width: 55px;
      height: 25px;
    }
  }
  div button {
    background-color: white;
    display: flex;
    border: 1px solid #c4c4c4;
    border-radius: 50px;
    width: 205px;
    height: 55px;
    margin: 0 6.5px 12px;
    text-align: left;
    svg {
      margin: 6px 0;
    }
    div {
      font-size: 12px;
      width: 70%;
      span {
        color: #444444;
        position: relative;
        top: 7px;
        left: 5px;
      }
      div {
        position: relative;
        top: 7px;
        left: 5px;
      }
      div {
        svg {
          float: right;
          position: relative;
          left: 59px;
          top: -55px;
        }
      }
      svg {
        float: right;
        position: relative;
        left: 10px;
        top: -3px;
      }
    }
  }
`;

export const ModalRightBox = styled.div`
  textarea {
    border: none;
    outline: none;
    width: 100%;
    height: 75%;
    resize: none;
  }
  input {
    width: 100%;
  }
  width: 37%;
  height: 81.4%;
  /* background-color: #ffff00; */
  margin-right: 4.5%;
  * div {
    font-size: 16px;
    padding-bottom: 4.97px;
    border-bottom: 0.5px solid #7d7d7d;
    margin-bottom: 12.3px;
  }
  div {
    svg {
      margin: 12px 4px;
    }
  }
  .skills {
    div {
      display: flex;
      justify-content: space-between;
    }
    span {
      font-size: 16px;
    }
    button {
      background-color: #fff;
      height: 25px;
      svg {
        position: relative;
        top: -10px;
        width: 21px;
        height: 21px;
      }
    }
  }
  .result {
    button {
      border: none;
      border-radius: 10px;
      width: 80px;
      height: 80px;
    }
  }
  span {
    font-size: 14px;
    line-height: 17px;
  }
  .project {
    margin-top: 7.5%;
  }
  & > div {
    height: 25%;
  }
  & > button {
    margin: 13% 0 0 50%;
    background: #ffffff;
    border: 3px solid #000000;
    border-radius: 20px;
    padding: 5px 53px;
    svg {
      margin: 12px 7.3px;
    }
  }
`;

export const ButtonBox = styled.div<ProjectModalProps>`
  height: 8%;
  svg {
    position: absolute;
    width: 12px;
    height: 12px;
    top: -3px;
  }
  button :hover {
    width: 22px;
    height: 22px;
  }
  input {
    background-color: #dcdcdc;
    border-radius: 10px;
    margin: 12px 14.4px 25px 0;
    width: 177px;
    padding: 3px 0;
  }
  button {
    position: relative;
    background-color: white;
    color: #6c6c6c;
    border: 1px solid #6c6c6c;
    padding: 3px 8px;
    font-size: 12px;
    border-radius: 10px;
    margin: 3px 2.5px;
  }
`;
