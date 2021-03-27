import styled from "@emotion/styled";

export const Positioner = styled.div`
  width: 15.6vw;
  height: 25vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 200px;

  border: 1px solid;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    background-color: #000000;
    opacity: 0.5;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    animation-name: example;
    animation-duration: 0.25s;
    border-left: 8px solid #5a948b;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const NameWrapper = styled.div`
  width: 100%;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1vh;
`;

export const Name = styled.div`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
`;

export const Response = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-right: 0.3vw;
`;

export const Stars = styled.div`
  display: flex;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;

  text-align: center;

  color: #c4c4c4;

  span {
    margin-left: 0.1vw;
  }
`;

export const Views = styled.div`
  display: flex;
  align-items: center;

  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;

  text-align: center;

  color: #c4c4c4;
  span {
    margin-left: 0.1vw;
  }
`;

export const Desc = styled.div`
  display: flex;
  margin-right: auto;
  margin-top: 1vh;

  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-align: center;

  color: #666666;
`;
