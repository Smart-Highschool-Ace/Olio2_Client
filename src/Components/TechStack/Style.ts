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
  width: 100%;
  height: 30px;
  margin-bottom: 50px;
  margin-left: 70px;
  span {
    font-size: 23px;
    font-weight: bold;
    color: black;
    border-bottom: 1px solid rgba(213, 234, 206, 0.54);
    box-shadow: inset 0 -11px 0 rgba(213, 234, 206, 0.54);
  }
`;

export const StackContent = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;
