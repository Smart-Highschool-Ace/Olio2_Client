import styled from "@emotion/styled";

interface Size {
  height: number;
}

export const Positioner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const LeftMark = styled.div`
  position: absolute;
  z-index: -99;
  top: 397px;
  left: 0;
`;

export const RightMark = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-top-left-radius: 5px;
`;

export const Wrapper = styled.div`
  width: 50%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-family: Apple SD Gothic Neo;
  font-style: bold;
  font-size: 18px;
  color: #000000;

  margin-top: 15px;
`;

export const ProfileImage = styled.div`
  width: 133px;
  height: 133px;

  margin-top: 50px;

  border-radius: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: none;

  cursor: pointer;

  span {
    font-family: Apple SD Gothic Neo;
    font-weight: 600;
    font-size: 10px;

    color: #828282;
  }
`;

export const InputWrapper = styled.div`
  width: 250px;
  height: 320px;
  margin-top: 20px;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    padding: 1.5px;
    font-weight: bold;
  }

  select {
    height: 40px;
    background-color: #f7f7f7;
    outline: none;
    text-decoration: none;
    border: none;
  }
`;

export const InputName = styled.input<Size>`
  width: 100%;
  height: ${(p) => p.height}px;

  background: #f7f7f7;
  border: none;
  border-radius: 10px;
  outline: none;
  text-decoration: none;
  padding-left: 10px;

  font-family: Apple SD Gothic Neo;
  font-weight: 300;
  font-size: 15px;
  color: #000;

  text-align: left;
`;

export const Introduce = styled.textarea<Size>`
  width: 100%;
  height: ${(p) => p.height}px;

  background: #f7f7f7;
  border: none;
  border-radius: 10px;
  outline: none;
  text-decoration: none;
  padding-left: 10px;
  padding-top: 10px;

  font-family: Apple SD Gothic Neo;
  font-weight: 300;
  font-size: 15px;
  color: #000;

  text-align: left;
  resize: none;
`;

export const CompleteBtn = styled.div`
  width: 100px;
  height: 40px;
  position: absolute;

  top: 610px;
  left: 1000px;

  border-radius: 10px;

  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #5a948b;
  border: 3px solid #5a948b;
  outline: none;

  cursor: pointer;

  :hover {
    color: #ffffff;
    background: #5a948b;

    transition: all 0.7s;
  }
`;
