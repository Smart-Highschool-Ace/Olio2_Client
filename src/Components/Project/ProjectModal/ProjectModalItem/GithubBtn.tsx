import React from "react";
import * as I from "../../../../Assets/index";
import * as S from "./styled";

interface GithubBtnProps {
  state: string;
}

const GithubBtn: React.FC<GithubBtnProps> = (props: GithubBtnProps) => {
  const { state } = props;
  if (state === "view" || state === "viewOnly") {
    return (
      <S.GithubBtn>
        <button type="button" className="githubBtn">
          <I.githubImg />
        </button>
      </S.GithubBtn>
    );
  }
  if (state === "writing") {
    return (
      <div>
        <div>
          <I.GithubLogo />
          Github 링크
        </div>
        <input type="URL" placeholder="링크를 입력해주세요." />
      </div>
    );
  }
  return (
    <span className="githubLogo">
      <div>
        <I.GithubLogo />
        Github 링크
      </div>
      <input type="URL" placeholder="링크를 입력해주세요." />
    </span>
  );
};

export default GithubBtn;
