import styled from "@emotion/styled";

export const Positioner = styled.section`
  height: 100vh;
  margin: 15vh auto 0;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  max-width: 1080px;
`;

export const StartSvg = styled.div`
  width: 50%;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const RightWrapper = styled.div`
  margin: auto 0;
`;

export const Title = styled.div`
  font-weight: 100;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const Highlight = styled.span`
  font-family: Josefin Sans, sans-serif;
  font-weight: bold;
  font-size: 80px;
  background: linear-gradient(
    to bottom,
    rgba(90, 148, 139, 1),
    rgba(226, 234, 206, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
