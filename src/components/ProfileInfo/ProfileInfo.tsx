import { Clip, Mail } from "assets";
import TechStack from "components/TechStack/TechStack";
import React, { PropsWithChildren } from "react";
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
  return ProfileData.map((data, idx) => (
    <S.ProfileContentWrapper key={idx}>
      <S.ProfileWrapper>
        <S.ProfileImageWrapper>
          <S.ProfileImage>
            <S.Profile src={data.profile_img} />
          </S.ProfileImage>
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
          <span style={{ lineHeight: "50px", fontSize: 17 }}>
            16 팔로워 20 팔로잉
          </span>
          <S.ProfileModify>프로필 수정</S.ProfileModify>
        </S.ProfileInputWrapper>
      </S.ProfileWrapper>
      <TechStack />
    </S.ProfileContentWrapper>
  ));
};

export default ProfileInfo;
