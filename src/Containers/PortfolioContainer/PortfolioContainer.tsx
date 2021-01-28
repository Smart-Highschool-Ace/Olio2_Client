import React from "react";
import * as S from "./Style";
import { Board } from "Components";

const portfolioList = [
  {
    id: "1",
    title: "3111 이대훈",
    image: "image1",
    views: 85,
    stars: 43,
    desc: "I love React Hooks..❤️",
  },
  {
    id: "2",
    title: "3308 김아련",
    image: "image1",
    views: 345,
    stars: 78,
    desc: "저는 기마련 입니다~",
  },
  {
    id: "3",
    title: "3219 진예원",
    image: "image1",
    views: 65,
    stars: 36,
    desc: "UI/UX 디자이너 진예원입니다!",
  },
  {
    id: "4",
    title: "3116 정현문",
    image: "image1",
    views: 345,
    stars: 32,
    desc: "상큼한 현문짱입니다.",
  },
  {
    id: "5",
    title: "3211 서 진",
    image: "image1",
    views: 1000,
    stars: 15,
    desc: "저는 서진입니다!!",
  },
  {
    id: "6",
    title: "3111 이대훈",
    image: "image1",
    views: 85,
    stars: 43,
    desc: "I love React Hooks..❤️",
  },
];

const PortfolioContainer: React.FC = () => {
  return (
    <S.Positioner>
      <S.Title>추천순</S.Title>
      <Board kind={portfolioList} />
    </S.Positioner>
  );
};

export default PortfolioContainer;
