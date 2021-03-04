import ProfileInfo from "Components/ProfileInfo/ProfileInfo";
import ProfileItems from "Components/ProfileItems/ProfileItems";
import React from "react";
import * as S from "./Style";

const MyProfileDummyData = [
  {
    name: "안채웅",
    std_no: "3109",
    school: "광주소프트웨어마이스터고등학교",
    introduce: "안녕하세요. Frontend 개발을 꿈꾸고있는 안채웅입니다.",
    site: "https://www.notion.so/chaewoong",
    email: "s19011@gsm.hs.kr",
    profile_img:
      "https://pbs.twimg.com/profile_images/549171896013438979/rqtU6Cvn_400x400.png",
  },
];

const Profile: React.FC = () => {
  return (
    <S.Positioner>
      <ProfileInfo ProfileData={MyProfileDummyData} />
      <ProfileItems/>
    </S.Positioner>
  );
};

export default Profile;
