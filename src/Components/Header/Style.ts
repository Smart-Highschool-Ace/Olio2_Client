import styled from "@emotion/styled";

export const Positioner = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0;
  left: 0;
  height: 85px;
  width: 100%;
  filter: drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.08));
  z-index: 99;
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1080px;
  height: 100%;
`;

export const Logo = styled.h1`
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const SearchWrapper = styled.div`
  width: 55%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid;
  cursor: pointer;
`;

export const SearchButton = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
`;

export const SearchBar = styled.input`
  width: 95%;
  height: 100%;
  border: none;
  text-decoration: none;
`;

export const LoginButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: 100;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
`;
