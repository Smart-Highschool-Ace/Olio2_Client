import React from "react";
import * as S from "./Style";
import { Board, Filter } from "Components";

const projectList = [
  {
    id: "1",
    title: "취준진단",
    image: "image1",
    views: 85,
    stars: 43,
    desc: "같이 프로젝트 하실분~",
    skill: ["android", "ios"],
  },
  {
    id: "2",
    title: "Olio",
    image: "image1",
    views: 345,
    stars: 78,
    desc: "드림북 대체 웹 서비스 올리오!",
    skill: ["web", "app"],
  },
  {
    id: "3",
    title: "Dotori",
    image: "image1",
    views: 65,
    stars: 36,
    desc: "GSM 기숙사 관리 웹 서비스",
    skill: ["web"],
  },
  {
    id: "4",
    title: "ONDO",
    image: "image1",
    views: 345,
    stars: 32,
    desc: "오늘 감정온도는 어떠신가요?",
    skill: ["web", "app"],
  },
  {
    id: "5",
    title: "MADI",
    image: "image1",
    views: 1000,
    stars: 15,
    desc: "GSM 통합 인증관리 서비스",
    skill: ["web"],
  },
  {
    id: "6",
    title: "GSM SPACE",
    image: "image1",
    views: 85,
    stars: 43,
    desc: "GSM 청원 게시판",
    skill: ["web"],
  },
  {
    id: "7",
    title: "Battleground",
    image: "image1",
    views: 83,
    stars: 23,
    desc: "배틀 그라운드",
    skill: ["game"],
  },
  {
    id: "8",
    title: "아이폰 부시기",
    image: "image1",
    views: 23,
    stars: 12,
    desc: "아이폰을 부숴봅시다!",
    skill: ["ios"],
  },
  {
    id: "9",
    title: "삼성 갤럭시 최고!",
    image: "image1",
    views: 932,
    stars: 128,
    desc: "이재용회장님 최고!",
    skill: ["android"],
  },
  {
    id: "10",
    title: "자율주행시스템",
    image: "image1",
    views: 993,
    stars: 500,
    desc: "테슬라를 능가할 자율주행 시스템",
    skill: ["ai"],
  },
];

const ProjectContainer: React.FC = () => {
  return (
    <S.Positioner>
      <Filter />
      <S.TitleWrapper>
        <S.Title>추천순</S.Title>
      </S.TitleWrapper>
      <Board kind={projectList} />
    </S.Positioner>
  );
};

export default ProjectContainer;
