import styled from "@emotion/styled";

interface Color {
  active: Boolean;
}

interface Left {
  left: Boolean;
}

interface Margin extends Left {
  margin: Boolean;
}

export const Positioner = styled.div`
  width: 20vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label<Margin>`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${(props) => (props.left ? "#5a948b" : "#7390c2")};
  display: flex;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;

    width: 18px;
    height: 18px;

    //margin: 0 3px;
    margin: ${(props) => (props.margin ? "0 3px" : "0 3px 0 21px")};
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
`;

export const CheckBox = styled.input<Left>`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:checked + ${CheckBoxLabel} {
    background: ${(props) => (props.left ? "#7390c2" : "#5a948b")};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;

      width: 18px;
      height: 18px;

      transition: 0.5s;
    }
  }
`;

export const LeftTitle = styled.span<Color>`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  text-align: center;

  color: ${(props) => (props.active ? "#5a948b" : "#a5a5a5")};
`;

export const RightTitle = styled.span<Color>`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  text-align: center;

  color: ${(props) => (props.active ? "#7390c2" : "#a5a5a5")};
`;
