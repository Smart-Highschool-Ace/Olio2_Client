import styled from "@emotion/styled";

interface Color {
  focus: Boolean;
}

export const RegisterWrapper = styled.div`
  width: 58%;
  height: 55%;

  margin-top: 142px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 29px;

  color: #000;
`;

export const DoubleCheck = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #5a948b;
  background-color: #ffffff;
  border: 0.5px solid #5a948b;
  border-radius: 20px;

  width: 75px;
  padding: 2px;
  margin-left: auto;

  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;

  outline: none;
  cursor: pointer;

  :hover {
    color: #ffffff;
    background-color: #5a948b;
    transition: all 0.5s;
  }
`;

export const InputWrapper = styled.div<Color>`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${(props) => (props.focus ? "#5a948b" : "#C4C4C4")};

  margin-top: 40px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FormText = styled.span`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: thin;
  font-size: 16px;

  color: #5a948b;
`;

export const Input = styled.input`
  width: 100%;
  height: 34px;
  border: none;
  text-decoration: none;

  :focus {
    outline: none;
  }
`;

export const BottomLabel = styled.div`
  width: 100%;
  height: 52px;

  margin-top: 38px;

  display: flex;
  align-items: center;
`;

export const RegisterBtn = styled.button`
  width: 160px;
  height: 100%;

  border-radius: 10px;
  background-color: #ffffff;
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #5a948b;
  border: 2px solid #5a948b;
  outline: none;

  cursor: pointer;

  :hover {
    color: #ffffff;
    background: #5a948b;

    transition: all 0.7s;
  }
`;

export const Footer = styled.div`
  width: 90%;
  height: 10%;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.span`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #8e8e8e;

  cursor: pointer;
`;
