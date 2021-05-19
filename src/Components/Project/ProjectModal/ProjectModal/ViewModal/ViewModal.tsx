import * as S from "./styled";
import * as I from "../../../../../Assets/index";
import {
  ProjectModalProps,
  useProjectViewQuery,
  useProjectDeleteQuery,
} from "./ViewModalContainer";

const projectId: number = 1;

const ProjectViewModal: React.FC<ProjectModalProps> = (
  props: ProjectModalProps
) => {
  const [loading, error, data] = useProjectViewQuery(projectId);

  console.log(loading, error, data);
  return (
    <>
      <S.ModalForm>
        <S.ModalInner>
          <S.ModalTop>
            <S.ModalLogo>
              <I.ProjectLogo />
            </S.ModalLogo>
            <S.ModalH2>취준진담</S.ModalH2>
            <S.ResultBox>
              {
                {
                  view: (
                    <>
                      <button
                        id="red"
                        onClick={() => useProjectDeleteQuery(projectId)}
                      >
                        삭제
                      </button>
                      <button>수정</button>
                    </>
                  ),
                }[props.state]
              }
            </S.ResultBox>
            <S.ModalToExplanation>
              <span>3개교 마이스터고등학교 커뮤니티 앱 서비스</span>
              <span>
                <button>IOS</button>
                <span>2020.11.23 ~ 2020.11.25</span>
              </span>
            </S.ModalToExplanation>
            <hr />
          </S.ModalTop>
          <S.ModalBox>
            <S.ModalLeftBox>
              <S.ModalImg>
                <I.ProjectImg />
              </S.ModalImg>
              <S.ParticipantAdd>
                <div>참여자</div>
              </S.ParticipantAdd>
              <S.Participants>
                <button>
                  <I.Profile3218 />
                  <div>
                    <div>3218 진예원</div>
                    <span>기획 및 UI/UX 디자인</span>
                    <I.Arrow />
                  </div>
                </button>
                <button>
                  <I.Profile3308 />
                  <div>
                    <div>3308 김아련</div>
                    <span>앱 프론트 개발</span>
                    <I.Arrow />
                  </div>
                </button>
                <button>
                  <I.Profile3111 />
                  <div>
                    <div>3111 이대훈</div>
                    <span>앱 프론트 개발</span>
                    <I.Arrow />
                  </div>
                </button>
                <button>
                  <I.Profile3218 />
                  <div>
                    <div>3218 진예원</div>
                    <span>기획 및 UI/UX 디자인</span>
                    <I.Arrow />
                  </div>
                </button>
                <button>
                  <I.Profile3218 />
                  <div>
                    <div>3218 진예원</div>
                    <span>기획 및 UI/UX 디자인</span>
                    <I.Arrow />
                  </div>
                </button>
              </S.Participants>
            </S.ModalLeftBox>
            <S.ModalRightBox>
              <div>
                <div>프로젝트 내용</div>
                <span>
                  {" "}
                  학교에서 포트폴리오를 원래 책 형식으로 관리했었는데 취업처에
                  포트폴리오를 돌리거나 학생들이 보기에 불편하다는 것을
                  느꼈습니다. 그렇기 때문에 포트폴리오 관리를 웹으로 한다면 좀
                  더 편리하게 관리 할 수 있을 것 같았기 때문에 개발을 하게
                  되었습니다.{" "}
                </span>
              </div>
              <S.SkillBox className="skills">
                <div>사용기술</div>
                <>
                  <button>#React</button>
                  <button>#Web</button>
                  <button>#Figma</button>
                  <button>#Typescript</button>
                  <button>#koa.js</button>
                  <button>#NextJS</button>
                </>
              </S.SkillBox>
              <S.ProjectResult>
                <div>프로젝트 결과물</div>
                <>
                  <I.Result1 />
                  <I.Result2 />
                  <I.Result2 />
                </>
              </S.ProjectResult>
              <S.GithubBtn>
                <button className="githubBtn">
                  <I.githubImg />
                </button>
              </S.GithubBtn>
            </S.ModalRightBox>
          </S.ModalBox>
        </S.ModalInner>
      </S.ModalForm>
    </>
  );
};

export default ProjectViewModal;
