import React from "react";
import * as S from "./Style";
import { PortfolioType, ProjectType } from "Utils/GlobalTypes";
import { BoardItem } from "Components";
import { useRouter } from "next/router";

interface PortfolioProps {
  kind: PortfolioType[] | ProjectType[];
}

const Board: React.FC<PortfolioProps> = ({ kind }) => {
  const {
    query: { skills },
  } = useRouter();

  const router = useRouter();
  const { id } = router.query;

  const MappingReturnProject = (kind) =>
    kind.map((item, idx) =>
      skills === "all" ? (
        <BoardItem list={item} key={idx} />
      ) : (
        item.skill.includes(skills.toString()) && (
          <BoardItem list={item} key={idx} />
        )
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
