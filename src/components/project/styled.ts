import styled from "@emotion/styled";
import ProjectModalProps from "./ProjectModal";

interface ProjectModalProps {
  visible?: boolean;
  state?: string;
}

export const ModalForm = styled.form`
  width: 100%;
  height: 100%;
`;

export const ModalInner = styled.div<ProjectModalProps>`
  display: ${(props) => (props.visible ? "block" : "none")};
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
  padding: 3.4% 4.5% 0;
  margin-bottom: 30px;
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
    color: #8c8c8c;
  }
  #red {
    color: #cd6152;
    margin-left: 7px;
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
  span {
    button {
      position: relative;
      top: -35px;
      border: solid 1px #5a948b;
      color: #5a948b;
      padding: 3px 30px;
      border-radius: 20px;
    }
    span {
      position: relative;
      right: -75px;
    }
  }
  div {
    height: 50px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    position: relative;
    button {
      align-self: flex-start;
    }
    div {
      /* align-self: flex-start; */
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
  div svg {
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
  height: 86%;
  margin-left: 4.5%;
  .modalImg {
    outline: none;
    border: none;
    color: #828282;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 98%;
    height: 52%;
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
    margin-top: 20px;
  }
  .searchbar {
    margin-top: 12px;
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
    height: 55%;
    resize: none;
  }
  input {
    width: 100%;
    height: 40px;
  }
  width: 37%;
  height: 82.4%;
  margin-right: 4.5%;
  * div {
    font-size: 16px;
    padding-bottom: 4.97px;
    border-bottom: 0.5px solid #7d7d7d;
    margin-bottom: 12.3px;
  }
  div {
    svg {
      margin: 12px;
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
    }
  }
  .result {
    button {
      position: relative;
      top: -30px;
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
  & > div {
    height: 21%;
  }
  .githubBtn {
    margin: 50px 0 0 40%;
    background: #ffffff;
    border: 3px solid #000000;
    border-radius: 20px;
    padding: 5px 53px;
    svg {
      margin: 12px 7.3px;
    }
  }
  .githubLogo {
    margin-bottom: 0;
    svg {
      margin: 0 3px;
    }
  }
`;

export const ButtonBox = styled.div<ProjectModalProps>`
  height: 8%;
  /* display: flex;
  flex-direction: column;
  div {
    margin-top: 10px;
    border: none;
  } */
  svg {
    position: absolute;
    width: 12px;
    height: 12px;
    left: 44px;
    top: -16px;
  }
  button :hover {
    width: 20px;
    height: 20px;
  }
  input {
    background-color: #dcdcdc;
    border-radius: 10px;
    width: 100%;
    padding: 8px 0 8px 20px;
  }
  button {
    position: relative;
    background-color: white;
    color: #6c6c6c;
    border: 1px solid #6c6c6c;
    padding: 3px 8px;
    font-size: 12px;
    border-radius: 10px;
    margin: 10px 2px;
  }
`;

export const BackBtn = styled.button`
  color: #5a948b;
  border: 2px solid #5a948b;
  border-radius: 10px;
  padding: 8px 30px;
  background-color: white;
  margin-left: 80%;
`;
