import styled from "@emotion/styled";
import { LargeBtn } from "./DefaultButton";

interface StartBtnProps {
  backgroundColor: "green" | "white";
}

const StartBtn = styled(LargeBtn)<StartBtnProps>`
  font-family: Josefin Sans, sans-serif;
  margin-top: 9.8vh;
  ${props =>
    props.backgroundColor === "green"
      ? `
      background-color: ${props.theme.colors.main};
      color: ${props.theme.colors.white};`
      : `
      background-color: ${props.theme.colors.white};
      color: ${props.theme.colors.main};
      border: 1px solid ${props.theme.colors.main}`}
`;

export default StartBtn;
