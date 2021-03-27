import * as S from "./styled";
import * as I from "../../../../Assets/index";

interface ProjectModalProps {
  state: string;
}

const ModalToExplanation: React.FC<ProjectModalProps> = (
  props: ProjectModalProps
) => {
  return (
    <S.ModalToExplanation>
      {
        {
          view: (
            <>
              <span>3개교 마이스터고등학교 커뮤니티 앱 서비스</span>
              <span>
                <button>IOS</button>
                <span>2020.11.23 ~ 2020.11.25</span>
              </span>
            </>
          ),
          viewOnly: (
            <>
              <span>3개교 마이스터고등학교 커뮤니티 앱 서비스</span>
              <span>
                <button>IOS</button>
                <span>2020.11.23 ~ 2020.11.25</span>
              </span>
            </>
          ),
          edit: (
            <>
              <S.Explanation>
                3개교 마이스터고등학교 커뮤니티 앱 서비스
              </S.Explanation>
              <div>
                <div>
                  <span>참여기간</span>
                  <button>
                    진행중
                    <I.Check />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="시작년도"
                  maxLength={4}
                  pattern="[0-9]{4}"
                  title={"숫자를 입력해주세요"}
                />
                <input
                  type="text"
                  placeholder="월"
                  maxLength={2}
                  pattern="[0-9]{2}"
                  title={"숫자를 입력해주세요"}
                />
                <input
                  type="text"
                  placeholder="일"
                  maxLength={2}
                  pattern="[0-9]{2}"
                  title={"숫자를 입력해주세요"}
                />
                <I.Line />
                <input
                  type="text"
                  placeholder="종료년도"
                  maxLength={4}
                  pattern="[0-9]{4}"
                  title={"숫자를 입력해주세요"}
                />
                <input
                  type="text"
                  placeholder="월"
                  maxLength={2}
                  pattern="[0-9]{2}"
                  title={"숫자를 입력해주세요"}
                />
                <input
                  type="text"
                  placeholder="일"
                  maxLength={2}
                  pattern="[0-9]{2}"
                  title={"숫자를 입력해주세요"}
                />
              </div>
            </>
          ),
          writing: (
            <>
              <input type="text" placeholder="프로젝트 소개를 입력하세요." />
              <div>
                <div>
                  <span>참여기간</span>
                  <button>
                    진행중
                    <I.Check />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="시작년도"
                  maxLength={4}
                  pattern="[0-9]{4}"
                />
                <input
                  type="text"
                  placeholder="월"
                  maxLength={2}
                  pattern="[0-9]{2}"
                />
                <input
                  type="text"
                  placeholder="일"
                  maxLength={2}
                  pattern="[0-9]{2}"
                />
                <I.Line />
                <input
                  type="text"
                  placeholder="종료년도"
                  maxLength={4}
                  pattern="[0-9]{4}"
                />
                <input
                  type="text"
                  placeholder="월"
                  maxLength={2}
                  pattern="[0-9]{2}"
                />
                <input
                  type="text"
                  placeholder="일"
                  maxLength={2}
                  pattern="[0-9]{2}"
                />
              </div>
            </>
          ),
        }[props.state]
      }
    </S.ModalToExplanation>
  );
};

export default ModalToExplanation;
