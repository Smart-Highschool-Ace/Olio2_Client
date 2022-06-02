import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./Style";
import path from "../../constants/path.json

const filterList = [
  {
    router: "all",
    title: "ALL",
    id: 0,
  },
  {
    router: "web",
    title: "WEB",
    id: 1,
  },
  {
    router: "android",
    title: "ANDROID",
    id: 2,
  },
  {
    router: "ios",
    title: "IOS",
    id: 3,
  },
  {
    router: "ai",
    title: "AI",
    id: 4,
  },
  {
    router: "game",
    title: "GAME",
    id: 5,
  },
  {
    router: "iot",
    title: "IOT",
    id: 6,
  },
] as const;

const Filter: React.FC = () => {
  const { query } = useRouter();
  const [currentRouter, setCurrentRouter] = useState("all");

  useEffect(() => {
    const skills = query?.skills || "all";

    setCurrentRouter(skills as string);
  }, [query]);

  const mappingMenuList = filterList.map((data, idx) => (
    <Link href={`${path.MAIN_PROJECT}?skills=${data.router}`}>
      <S.Navigation
        isActive={currentRouter === data.router}
        key={data.id}
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
