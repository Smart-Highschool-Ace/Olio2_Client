import React from "react";
import * as I from "../../../../Assets/index";
import * as S from "./styled";

interface GithubBtnProps {
  state: "view" | "viewOnly" | "writing";
}

const GithubBtn: React.FC<GithubBtnProps> = ({ state }: GithubBtnProps) => {
  if (state === "view" || state === "viewOnly") {
    return (
      <S.GithubBtn>
        <button type="button" className="githubBtn">
          <I.githubImg />
        </button>
      </S.GithubBtn>
    );
  }

  const template = (
    <>
      <div>
        <I.GithubLogo />
        Github 링크
      </div>
      <input type="URL" placeholder="링크를 입력해주세요." />
    </>
  );
  return state === "writing" ? (
    <div>{template}</div>
  ) : (
    <span className="githubLogo">{template}</span>
  );
};

export default GithubBtn;
