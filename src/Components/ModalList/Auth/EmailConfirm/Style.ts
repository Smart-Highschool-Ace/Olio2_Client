import styled from "@emotion/styled";

export const Positioner = styled.div`
  width: 47%;
  height: 70%;

  margin-top: 120px;

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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;

  width: 100%;
  height: 100%;

  .complete {
    display: flex;
    align-items: center;
    margin-top: auto;
  }
`;

export const Resend = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #5a948b;
  background-color: #ffffff;
  border: 0.5px solid #5a948b;
  border-radius: 20px;

  width: 80px;
  padding: 3px;
  margin-left: auto;

  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;

  outline: none;
  cursor: pointer;

  :hover {
    color: #ffffff;
    background-color: #5a948b;
    transition: all 0.5s;
  }
`;

export const Message = styled.div`
  width: 100%;
  height: 114px;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 95px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 30px;

  h4 {
    color: #6a6a6a;
  }
`;

export const PinContainer = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
`;

export const Pin = styled.div`
  width: 50px;
  height: 60px;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const PinInput = styled.input`
  width: 100%;
  height: 100%;

  background: #ececec;
  border-radius: 8px;
  text-align: center;
  outline: none;
  text-decoration: none;
  border: none;

  font-size: 24px;
`;

export const CompleteBtn = styled.button`
  width: 100px;
  height: 40px;

  border-radius: 10px;
  background-color: #ffffff;
  margin-left: auto !important;

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
