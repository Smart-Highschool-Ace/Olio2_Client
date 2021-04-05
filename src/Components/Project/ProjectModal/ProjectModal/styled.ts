import styled from "@emotion/styled";

export const ModalForm = styled.form`
  width: 100%;
  height: 100%;
`;

export const ModalInner = styled.div`
  display: block;
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
`;

export const ResultBox = styled.span`
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
`;

export const ModalBox = styled.div`
  /* background-color: #000fff; */
  height: 100%;
  display: flex;
`;

export const ModalLeftBox = styled.div`
  width: 63%;
  height: 86%;
  margin-left: 4.5%;
`;

export const ModalImg = styled.div`
  color: #828282;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 98%;
  height: 52%;
  overflow: hidden;
  border-radius: 10px;
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
  .skills {
    button {
      background-color: #fff;
      position: relative;
      svg {
        position: absolute;
        top: -3px;
        left: none;
        right: -3px;
      }
    }
    div {
      display: flex;
      justify-content: space-between;
    }
    span {
      font-size: 16px;
    }
  }
  span {
    font-size: 14px;
    line-height: 17px;
  }
  & > div {
    height: 21%;
  }
`;

export const BackBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    color: #5a948b;
    border: 2px solid #5a948b;
    border-radius: 10px;
    width: 100px;
    height: 50px;
    background-color: white;
    margin-right: 20px;
  }
`;
