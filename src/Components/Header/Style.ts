import styled from "@emotion/styled";

export const Positioner = styled.div`
  border-bottom: 1px solid #d6d6d6;
  background-color: #ffffff;
  top: 0px;
  left: 0px;
  width: 100%;
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

  cursor: pointer;
`;

export const SearchWrapper = styled.div`
  width: 580px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid;

  cursor: pointer;
`;

export const SearchButton = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchBar = styled.input`
  width: 95%;
  height: 100%;
  border: none;
  text-decoration: none;

  :focus {
    outline: none;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  button {
    font-size: 17px;
    font-weight: 100;
    cursor: pointer;
  }
`;
