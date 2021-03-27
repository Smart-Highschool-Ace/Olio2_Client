import styled from "@emotion/styled";

interface isActive {
  isActive: Boolean;
}

export const Positioner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 2vh;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-right: 3%;
  display: flex;
  justify-content: center;
`;

export const NavWrapper = styled.div`
  width: 60vw;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.div<isActive>`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #3d3d3d;

  padding: 8px 22px;
  border-radius: 20px;
  text-decoration: none;
  cursor: pointer;

  ${(p) =>
    p.isActive &&
    `color: #ffffff;
    background-color: #3d3d3d;`}

  :hover {
    color: #ffffff;
    background-color: #3d3d3d;
    transition: all 0.5s;
  }
`;
