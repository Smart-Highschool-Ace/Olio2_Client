import * as S from "./styled";
import * as I from "../../../../Assets/index";

interface GithubBtnProps {
  state: string;
}

const GithubBtn: React.FC<GithubBtnProps> = (props: GithubBtnProps) => {
  if (props.state == "view" || props.state == "viewOnly") {
    return (
      <>
        <button className="githubBtn">
          <I.Github />
        </button>
      </>
    );
  } else if (props.state == "writing") {
    return (
      <div>
        <div>
          <I.GithubLogo />
          Github 링크
        </div>
        <input type="URL" placeholder="링크를 입력해주세요." />
      </div>
    );
  } else {
    return (
      <span className="githubLogo">
        <div>
          <I.GithubLogo />
          Github 링크
        </div>
        <input type="URL" placeholder="링크를 입력해주세요." />
      </span>
    );
  }
};

export default GithubBtn;
