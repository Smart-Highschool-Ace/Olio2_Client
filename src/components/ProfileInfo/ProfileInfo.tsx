import React from "react";
import * as S from "./Style";

type MyProfile = {
  name: string;
  std_no: string;
  school: string;
  introduce: string;
  site: string;
  email: string;
  profile_img: string;
};

interface ProfileInfoProps {
  ProfileData: MyProfile[];
}

const ProfileInfo: React.FC = () => {
  return (
    <S.ProfileContentWrapper>
      <div>내 프로필</div>
    </S.ProfileContentWrapper>
  );
};

export default ProfileInfo;
