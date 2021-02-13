import styled from "@emotion/styled";

export const Positioner = styled.div`
  position: absolute;
  border-bottom: 1px solid #d6d6d6;
  background-color: #ffffff;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 30;
  filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.25));
`;

export const ContentWrapper = styled.div`
  display: flex;
  margin: 0px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  padding-left: 3%;
  padding-right: 6%;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const AuthWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  div {
    font-size: 17px;
    font-weight: 100;
  }
`;
