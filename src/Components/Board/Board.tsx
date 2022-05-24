import React from "react";
import { PortfolioType, ProjectType } from "Utils/GlobalTypes";
import { BoardItem } from "Components";
import { useRouter } from "next/router";
import * as S from "./Style";

interface PortfolioProps {
  kind: PortfolioType[] | ProjectType[];
}

const Board: React.FC<PortfolioProps> = ({ kind }) => {
  const {
    query: { skills },
  } = useRouter();

  const router = useRouter();
  const { id } = router.query;

  const MappingReturnProject = projectKind =>
    projectKind.map((item, idx) =>
      skills === "all" ? (
        <BoardItem list={item} key={idx} />
      ) : (
        item.skill.includes(skills.toString()) && (
          <BoardItem list={item} key={idx} />
        )
      )
    );

  const MappingReturnPortfolio = (projectKind: PortfolioType[]) =>
    projectKind.map((item, idx) => <BoardItem list={item} key={idx} />);

  return (
    <S.Positioner>
      {id === "portfolios"
        ? MappingReturnPortfolio(kind)
        : MappingReturnProject(kind)}
    </S.Positioner>
  );
};

export default Board;
