import React, { useState, useEffect } from "react";
import * as S from "./Style";
import path from "../../constants/path.json";

import { useRouter } from "next/router";

// 초록 : #e9f8f6;
// 파랑 : #7390c2;

const MainToggle: React.FC = () => {
  const [leftActive, setLeftActive] = useState(true);
  const [rightActive, setRightActive] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const returnLeftColor = () => {
    setLeftActive(!leftActive);
    if (id === "portfolios") router.push(path.MAIN_PROJECT_WITH_ALL_SKILL);
  };
  const returnRightColor = () => {
    setRightActive(!rightActive);
    if (id === `projects`) router.push(path.MAIN_PORTFOLIO);
  };

  useEffect(() => {
    if (id === "projects") {
      setLeftActive(false);
      setRightActive(true);
    }
  }, [id]);

  return (
    <S.Positioner>
      <S.LeftTitle active={leftActive}>Portfolios</S.LeftTitle>
      <S.CheckBoxWrapper>
        <S.CheckBox
          left={rightActive}
          id="checkbox"
          type="checkbox"
          onClick={() => {
            returnLeftColor();
            returnRightColor();
          }}
        />
        <S.CheckBoxLabel
          margin={leftActive}
          left={leftActive}
          htmlFor="checkbox"
        />
      </S.CheckBoxWrapper>
      <S.RightTitle active={rightActive}>Projects</S.RightTitle>
    </S.Positioner>
  );
};

export default MainToggle;
