import { Camera, Clip, Mail } from "Assets";
import { ProfileModal, TechStack } from "Components";
import React, { useState } from "react";
import * as S from "./Style";

const StackDummyData = [
  {
    name: "React",
    icon:
      "data:image/png;base64,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",
    proficiency: 90,
    color: "#55C1D0",
  },
  {
    name: "Kotlin",
    icon:
      "https://blog.kakaocdn.net/dn/vY22B/btqzyimgz4J/fqE900XPQuSHF3JZKPnxPk/img.png",
    proficiency: 90,
    color: "#5A6A94",
  },
  {
    name: "node.js",
    icon:
      "data:image/png;base64,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",
    proficiency: 70,
    color: "#5A948B",
  },
  {
    name: "Figma",
    icon: "https://cdn.iconscout.com/icon/free/png-512/figma-682083.png",
    proficiency: 100,
    color: "#945A80",
  },
];

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

//@ts-ignore
const ProfileInfo: React.FC<ProfileInfoProps> = ({ ProfileData }) => {
  const [profile, setProfile] = useState(null);
  const [PopUp, setPopUp] = useState(false);

  const CheckPopUp = () => {
    setPopUp(!PopUp);
  };

  return ProfileData.map((data, idx) => (
    <S.ProfileContentWrapper key={idx}>
      <S.ProfileWrapper>
        <S.ContentWrapper>
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
        </S.ContentWrapper>
        <TechStack StackData={StackDummyData} />
      </S.ProfileWrapper>
    </S.ProfileContentWrapper>
  ));
};

export default ProfileInfo;
