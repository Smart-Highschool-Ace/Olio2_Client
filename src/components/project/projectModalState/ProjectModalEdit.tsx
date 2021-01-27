import * as S from "../styled";
import * as I from "../../../assets/index";

interface ProjectModalProps {
  visible?: boolean;
  state?: string;
}

const ProjectModalEdit: React.FC<ProjectModalProps> = (
  props: ProjectModalProps
) => {
  return (
    <>
      <S.ModalOverlay visible={props.visible}>
        <S.ModalWrapper visible={props.visible} tabIndex={-1}>
          <S.ModalForm>
            <S.ModalInner>
              <S.ModalTop>
                <div>
                  <S.ModalLogo>
                    <I.ProjectLogo />
                  </S.ModalLogo>
                  <span id="modalH2">취준진담</span>
                  {
                    {
                      view: (
                        <>
                          <button id="red">삭제</button>
                          <button>수정</button>
                        </>
                      ),
                      edit: <button>저장</button>,
                    }[props.state]
                  }
                </div>
                <S.ModalToExplanation>
                  <span>3개교 마이스터고등학교 커뮤니티 앱 서비스</span>
                  <span>2020.11.23 ~ 2020.11.25</span>
                </S.ModalToExplanation>
                <hr />
              </S.ModalTop>
              <S.ModalBox>
                <S.ModalLeftBox>
                  <S.ButtonBox>
                    <button>#React</button>
                    <button>#Web</button>
                    <button>#Figma</button>
                    <button>#Typescript</button>
                    <button>#koa.js</button>
                    <button>#NextJS</button>
                  </S.ButtonBox>
                  <div className="modalImg">
                    <I.ProjectImg />
                  </div>
                  <S.participants>
                    <div>참여자</div>
                    <div className="participantsGroup">
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
                    </div>
                  </S.participants>
                </S.ModalLeftBox>
                <S.ModalRightBox>
                  <div className="project">
                    <div>프로젝트 내용</div>
                    <span>
                      {" "}
                      학교에서 포트폴리오를 원래 책 형식으로 관리했었는데
                      취업처에 포트폴리오를 돌리거나 학생들이 보기에 불편하다는
                      것을 느꼈습니다. 그렇기 때문에 포트폴리오 관리를 웹으로
                      한다면 좀 더 편리하게 관리 할 수 있을 것 같았기 때문에
                      개발을 하게 되었습니다.{" "}
                    </span>
                  </div>
                  <div className="skills">
                    <div>사용기술</div>
                    <I.Typescript />
                    <I.ReactImg />
                    <I.Koa />
                    <I.Next />
                    <I.Figma />
                  </div>
                  <div className="result">
                    <div>프로젝트 결과물</div>
                    <I.Result1 />
                    <I.Result2 />
                    <I.Result2 />
                  </div>
                  <button>
                    <I.Github />
                  </button>
                </S.ModalRightBox>
              </S.ModalBox>
            </S.ModalInner>
          </S.ModalForm>
        </S.ModalWrapper>
      </S.ModalOverlay>
    </>
  );
};

export default ProjectModalEdit;
