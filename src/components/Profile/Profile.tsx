import React from "react";
import * as S from "./Style";

const Profile: React.FC = () => {
  return (
    <S.Positioner>
      <S.ProfileContentWrapper>내 프로필</S.ProfileContentWrapper>
      <S.InfoContentWrapper>정보</S.InfoContentWrapper>
    </S.Positioner>
  );
};

export default Profile;
