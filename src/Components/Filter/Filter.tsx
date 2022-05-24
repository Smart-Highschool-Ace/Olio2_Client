import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./Style";

const filterList = [
  {
    router: "all",
    title: "ALL",
  },
  {
    router: "web",
    title: "WEB",
  },
  {
    router: "android",
    title: "ANDROID",
  },
  {
    router: "ios",
    title: "IOS",
  },
  {
    router: "ai",
    title: "AI",
  },
  {
    router: "game",
    title: "GAME",
  },
  {
    router: "iot",
    title: "IOT",
  },
];

const Filter: React.FC = () => {
  const nextRouter = useRouter();

  const [currentRouter, setCurrentRouter] = useState("all");

  useEffect(() => {
    const {
      query: { skills },
    } = nextRouter;

    setCurrentRouter(skills as string);
  }, [nextRouter.query]);

  const mappingMenuList = filterList.map((data, idx) => (
    <Link href={`/main/projects?skills=${data.router}`}>
      <S.Navigation
        isActive={currentRouter === data.router}
        key={idx}
        style={{ textDecoration: "none" }}
        onClick={() => setCurrentRouter(data.router)}
      >
        {data.title}
      </S.Navigation>
    </Link>
  ));

  return (
    <S.Positioner>
      <S.Wrapper>
        <S.NavWrapper>{mappingMenuList}</S.NavWrapper>
      </S.Wrapper>
    </S.Positioner>
  );
};

export default Filter;
