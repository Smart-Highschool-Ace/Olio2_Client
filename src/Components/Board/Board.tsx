import React from "react";
import { PortfolioType, ProjectType } from "Utils/GlobalTypes";
import BoardItem from "Components/BoardItem/BoardItem";
import { useRouter } from "next/router";
import PositionerStyle from "./Style";

type BoardObjectType = PortfolioType | ProjectType;

const Board: React.FC<{ kind: BoardObjectType[] }> = ({ kind }) => {
  const {
    query: { skills },
  } = useRouter();

  const MappingReturnBoardList = (boardKind: BoardObjectType[]) =>
    boardKind.map(item => {
      if ("skill" in item) {
        if (!item.skill.includes(skills.toString())) {
          return <></>;
        }
      }
      return <BoardItem list={item} key={item.id} />;
    });

  return <PositionerStyle>{MappingReturnBoardList(kind)}</PositionerStyle>;
};

export default Board;
