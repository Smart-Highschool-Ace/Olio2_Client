import styled from "@emotion/styled";

export const ProfileContentWrapper = styled.div`
  width: 31%;
  height: 100%;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 120%;
`;

export const ProfileImageWrapper = styled.div`
  width: 100%;
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ProfileImage = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 213px;
  border: 4px solid #5a948b;
`;

export const ProfileInputWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5%;
  margin-left: 40%;

  span {
    font-size: 19px;
    font-weight: normal;
  }
`;

export const linkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    font-size: 16px;
    line-height: 50px;
    padding-left: 10px;
    color: #000000;

    :hover {
      color: #0366d6;
    }
  }

  span {
    font-size: 16px;
    padding-left: 10px;
    color: #000000;
  }
`;

export const NameTitle = styled.div`
  font-weight: bold;
  font-size: 28px;
  color: #000000;
`;

export const Profile = styled.img`
  width: 392px;
  height: 392px;
  border-radius: 408px;
`;

export const ProfileModify = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  width: 320px;
  height: 54px;
  background: #ffffff;
  border: 1px solid #929292;
  border-radius: 5px;

  font-size: 16px;
  font-weight: normal;
  color: #929292;
`;
