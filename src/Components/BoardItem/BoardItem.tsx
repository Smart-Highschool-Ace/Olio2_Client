import React from "react";
import { PortfolioType } from "Utils/GlobalTypes";
import { Views, Star } from "Assets";
import * as S from "./Style";

interface BoardItemProps {
  list: PortfolioType;
}

const BoardItem: React.FC<BoardItemProps> = ({ list }) => {
  return (
    <S.Positioner onClick={() => alert(`${list.title} Clicked!`)}>
      <S.Thumbnail />
      <S.NameWrapper>
        <S.Name>{list.title}</S.Name>
        <S.Response>
          <S.Stars>
            <Star />
            <span>{list.stars}</span>
          </S.Stars>
          <S.Views>
            <Views />
            <span>{list.views}</span>
          </S.Views>
        </S.Response>
      </S.NameWrapper>
      <S.Desc>{list.desc}</S.Desc>
    </S.Positioner>
  );
};

export default BoardItem;
