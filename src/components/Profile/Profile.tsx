import ProfileInfo from "components/ProfileInfo/ProfileInfo";
import ProfileItems from "components/ProfileItems/ProfileItems";
import React from "react";
import * as S from "./Style";

const MyProfileDummyData = [
  {
    name: "안채웅",
    std_no: "3109",
    school: "광주소프트웨어마이스터고등학교",
    introduce: "Frontend 개발",
    site: "notion/chae_woong",
    email: "s19011@gsm.hs.kr",
    profile_img:
      "https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/436/8142f53e51d2ec31bc0fa4bec241a919_crop.jpeg",
  },
];

const Profile: React.FC = () => {
  return (
    <S.Positioner>
      <ProfileInfo />
      <ProfileItems />
    </S.Positioner>
  );
};

export default Profile;
