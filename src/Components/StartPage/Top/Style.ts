import styled from "@emotion/styled";

export const Positioner = styled.main`
  max-width: 1080px;
  margin: 150px auto 0;
  display: flex;
`;

export const StartSvg = styled.div`
  margin: 20% 0 0;
  height: 40%;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const SMH = styled.h1`
  font-family: Josefin Sans, sans-serif;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h1};
  color: ${({ theme }) => theme.colors.black};
`;

export const SMYP = styled.h1`
  font-family: Josefin Sans, sans-serif;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h1};
  color: ${({ theme }) => theme.colors.black};
`;

export const Highlight = styled.span`
  background: linear-gradient(
    to bottom,
    rgba(109, 173, 168, 1),
    rgba(226, 234, 206, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Info = styled.span`
  font-weight: 100;
  font-size: ${({ theme }) => theme.fontSize.h2};
  color: ${({ theme }) => theme.colors.black};
`;
