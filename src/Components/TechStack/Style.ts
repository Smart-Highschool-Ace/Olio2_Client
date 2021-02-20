import styled from "@emotion/styled";

export const StackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 47%;
  margin-left: 70px;
  overflow: auto;
`;

export const TitleWrapper = styled.div`
  width: 82%;
  height: 30px;
  margin-bottom: 40px;
  margin-left: 70px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  span {
    font-size: 22px;
    font-weight: bold;
    color: black;
    border-bottom: 1px solid rgba(213, 234, 206, 0.54);
    box-shadow: inset 0 -11px 0 rgba(213, 234, 206, 0.54);
  }

  div {
    cursor: pointer;
    font-weight: bold;
  }
`;

export const StackContent = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  span {
    font-weight: 600;
    font-size: 17px;
    color: #000000;
    margin-bottom: 5px;
  }

  input {
    ::placeholder {
      font-weight: 600;
      font-size: 17px;
      color: #9a9a9a;
    }

    margin-bottom: 5px;
    font-weight: 600;
    font-size: 17px;
    color: #000000;
    border: 0;
    width: 70%;
  }
`;

export const InputWrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 5px;
`;
