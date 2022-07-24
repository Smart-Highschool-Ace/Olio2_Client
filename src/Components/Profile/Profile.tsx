import ProfileInfo from "Components/ProfileInfo/ProfileInfo";
import ProfileItems from "Components/ProfileItems/ProfileItems";
import React from "react";
import Positioner from "./Style";

const MyProfileDummyData = [
  {
    id: 1,
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

const ProjectDummyData = [
  {
    project_id: 1,
    name: "ONDO",
    icon: "https://cdn.discordapp.com/attachments/757847456489668659/818410920094990356/2c14918aadd67cf1.png",
    description: "감정온도 일기장",
  },
  {
    project_id: 2,
    name: "Beansil Web",
    icon: "https://cdn.discordapp.com/attachments/757847456489668659/818410916999725076/f820b1bb78c2919f.png",
    description: "빈실 동아리를 소개하는 웹 페이지",
  },
  {
    project_id: 3,
    name: "DOTORI",
    icon: "https://media.discordapp.net/attachments/757847456489668659/818410913739964416/b70f35fef0db50ae.png",
    description: "기숙사 관리 웹 서비스",
  },
  {
    project_id: 4,
    name: "olio",
    icon: "https://cdn.discordapp.com/attachments/757847456489668659/818410921604939786/4823f246d82ec8c9.png",
    description: "포트폴리오 관리 웹사이트",
  },
  {
    project_id: 5,
    name: "SLAT",
    icon: "https://cdn.discordapp.com/attachments/757847456489668659/818410918492504085/9f0d2771a011c69e.png",
    description: "학교생활 시간표 알림 앱 서비스",
  },
];

const AwardDummyData = [
  {
    name: "한전KDN 2019 빛가람 에너지밸리 소프트웨어 경진대회 장려상",
    organization: "한전KDN",
    date: "2019.07",
  },
  {
    name: "JA korea 창업 놀이터 온라인 전시 우수상",
    organization: "JA korea",
    date: "2019.07",
  },
  {
    name: "교내 알고리즘 대회 최우수상",
    organization: "광주 소프트웨어 마이스터고등학교",
    date: "2019.07",
  },
];

const CertificateDummyData = [
  {
    name: "TOEIC - 750",
    organization: "YBM",
    date: "2019.07",
  },
  {
    name: "TOEIC - 750",
    organization: "YBM",
    date: "2019.07",
  },
  {
    name: "TOEIC - 750",
    organization: "YBM",
    date: "2019.07",
  },
];

const Profile: React.FC = () => {
  return (
    <Positioner>
      <ProfileInfo ProfileData={MyProfileDummyData} />
      <ProfileItems
        ProjectDummyData={ProjectDummyData}
        AwardDummyData={AwardDummyData}
        CertificateDummyData={CertificateDummyData}
      />
    </Positioner>
  );
};

export default Profile;
