import { Camera, Clip, Mail } from "assets";
import ProfileModal from "components/ProfileModal/ProfileModal";
import TechStack from "components/TechStack/TechStack";
import React, { PropsWithChildren, useState } from "react";
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

const ProfileInfo = ({ ProfileData }: PropsWithChildren<ProfileInfoProps>) => {
  const [profile, setProfile] = useState(null);
  const [PopUp, setPopUp] = useState(false);

  const CheckPopUp = () => {
    setPopUp(!PopUp);
  };

  return ProfileData.map((data, idx) => (
    <S.ProfileContentWrapper key={idx}>
      <S.ProfileWrapper>
        <S.ProfileImageWrapper>
          <S.ProfileImage>
            <S.Profile src={profile} alt="프로필 사진" />
          </S.ProfileImage>
          <S.EditImage onClick={CheckPopUp}>
            {PopUp ? (
              <ProfileModal toggle={CheckPopUp} setProfile={setProfile} />
            ) : null}
            <Camera />
          </S.EditImage>
        </S.ProfileImageWrapper>
        <S.ProfileInputWrapper>
          <S.NameTitle>
            {data.std_no} {data.name}
          </S.NameTitle>
          <span style={{ color: "#878787", lineHeight: "50px" }}>
            {data.school}
          </span>
          <span style={{ lineHeight: "50px", fontSize: 17, color: "black" }}>
            {data.introduce}
          </span>
          <S.linkWrapper>
            <Clip />
            <a href={data.site}>{data.site}</a>
          </S.linkWrapper>
          <S.linkWrapper>
            <Mail />
            <span>{data.email}</span>
          </S.linkWrapper>
          <S.ProfileModify>프로필 수정</S.ProfileModify>
        </S.ProfileInputWrapper>
      </S.ProfileWrapper>
      <TechStack />
    </S.ProfileContentWrapper>
  ));
};

export default ProfileInfo;
