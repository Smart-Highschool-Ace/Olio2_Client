import styled from "@emotion/styled";

export const ModalForm = styled.form`
  width: 100%;
  height: 100%;
`;

export const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
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
  svg {
    margin-bottom: 39px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 65px;
  div {
    font-size: 25px;
    font-weight: 600;
  }
  span {
    font-size: 22px;
    font-weight: 600;
    color: #727272;
  }
`;

export const FieldChoice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    width: 757px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 120px;
  }
  button {
    background-color: white;
  }
  div button {
    border: none;
  }
  & > button {
    border: 2px solid #5a948b;
    border-radius: 10px;
    padding: 13px 58px;
    color: #5a948b;
    font-size: 18px;
    font-weight: 700;
  }
`;
