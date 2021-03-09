import React from "react";
import * as S from "./Style";
import { PortfolioType } from "Utils/GlobalTypes";
import { BoardItem } from "Components";
import { useRouter } from "next/router";

interface PortfolioProps {
  kind: PortfolioType[];
}

const Board: React.FC<PortfolioProps> = ({ kind }) => {
  const {
    query: { skill },
  } = useRouter();

  const router = useRouter();
  const { id } = router.query;

  const MappingReturnProject = (kind: PortfolioType[]) =>
    kind.map((item, idx) =>
      skill === "all" ? (
        <BoardItem list={item} key={idx} />
      ) : (
        item.skill.includes(skill) && <BoardItem list={item} key={idx} />
      )
    );

  const MappingReturnPortfolio = (kind: PortfolioType[]) =>
    kind.map((item, idx) => <BoardItem list={item} key={idx} />);

  return (
    <S.Positioner>
      {id === "portfolios"
        ? MappingReturnPortfolio(kind)
        : MappingReturnProject(kind)}
    </S.Positioner>
  );
};

export default Board;
