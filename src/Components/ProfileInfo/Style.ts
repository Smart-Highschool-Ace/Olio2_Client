import styled from "@emotion/styled";

export const ProfileContentWrapper = styled.div`
  width: 31%;
  height: auto;
`;



export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100%;
  margin-left: 5rem;
`;

export const ProfileImageWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const ProfileImage = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 213px;
  border: 4px solid #5a948b;
`;

export const ProfileInputWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5%;
  padding-left: 25px;

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
  height: 80px;
  background: #ffffff;
  border: 1px solid #929292;
  border-radius: 5px;

  font-size: 16px;
  font-weight: normal;
  color: #929292;
`;

export const EditImage = styled.div`
  position: relative;
  width: 62px;
  height: 62px;
  top: 75%;
  right: 14%;
  background-color: #e3e3e3;
  border-radius: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
`;
