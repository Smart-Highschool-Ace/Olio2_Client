import * as S from "../styled";
import * as I from "../../../Assets/index";

interface ProjectModalProps {
  visible?: boolean;
  state?: string;
}

const ProjectModalEdit: React.FC<ProjectModalProps> = (
  props: ProjectModalProps
) => {
  return (
    <>
      <S.ModalForm>
        <S.ModalInner visible={props.visible}>
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
              {
                {
                  view: (
                    <>
                      <span>3개교 마이스터고등학교 커뮤니티 앱 서비스</span>
                      <span>
                        <button className="field">IOS</button>
                        <span>2020.11.23 ~ 2020.11.25</span>
                      </span>
                    </>
                  ),
                  viewOnly: (
                    <>
                      <span>3개교 마이스터고등학교 커뮤니티 앱 서비스</span>
                      <span>
                        <button className="field">IOS</button>
                        <span>2020.11.23 ~ 2020.11.25</span>
                      </span>
                    </>
                  ),
                  edit: (
                    <>
                      <span>3개교 마이스터고등학교 커뮤니티 앱 서비스</span>
                      <div>
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
                        <button>
                          진행중
                          <I.Check />
                        </button>
                      </div>
                    </>
                  ),
                }[props.state]
              }
            </S.ModalToExplanation>
            <hr />
          </S.ModalTop>
          <S.ModalBox>
            <S.ModalLeftBox>
              <div className="modalImg">
                <I.ProjectImg />
              </div>
              <S.participants>
                <div>참여자</div>
                {
                  {
                    edit: (
                      <div className="searchbar">
                        <div>
                          <I.Search />
                          <input type="text" placeholder="검색" />
                        </div>
                        <textarea placeholder="맡은 역할" />
                        <button>추가</button>
                      </div>
                    ),
                  }[props.state]
                }
                <div className="participantsGroup">
                  {
                    {
                      view: (
                        <>
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
                        </>
                      ),
                      viewOnly: (
                        <>
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
                        </>
                      ),
                      edit: (
                        <>
                          <button>
                            <I.Profile3218 />
                            <div>
                              <div>3218 진예원</div>
                              <span>기획 및 UI/UX 디자인</span>
                              <div>
                                <I.X />
                              </div>
                            </div>
                          </button>
                          <button>
                            <I.Profile3218 />
                            <div>
                              <div>3218 진예원</div>
                              <span>기획 및 UI/UX 디자인</span>
                              <div>
                                <I.X />
                              </div>
                            </div>
                          </button>
                          <button>
                            <I.Profile3218 />
                            <div>
                              <div>3218 진예원</div>
                              <span>기획 및 UI/UX 디자인</span>
                              <div>
                                <I.X />
                              </div>
                            </div>
                          </button>
                          <button>
                            <I.Profile3218 />
                            <div>
                              <div>3218 진예원</div>
                              <span>기획 및 UI/UX 디자인</span>
                              <div>
                                <I.X />
                              </div>
                            </div>
                          </button>
                          <button>
                            <I.Profile3218 />
                            <div>
                              <div>3218 진예원</div>
                              <span>기획 및 UI/UX 디자인</span>
                              <div>
                                <I.X />
                              </div>
                            </div>
                          </button>
                        </>
                      ),
                    }[props.state]
                  }
                </div>
              </S.participants>
            </S.ModalLeftBox>
            <S.ModalRightBox>
              <div className="project">
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
              <S.ButtonBox className="skills">
                <div>사용기술</div>
                {
                  {
                    view: (
                      <>
                        <button>#React</button>
                        <button>#Web</button>
                        <button>#Figma</button>
                        <button>#Typescript</button>
                        <button>#koa.js</button>
                        <button>#NextJS</button>
                      </>
                    ),
                    viewOnly: (
                      <>
                        <button>#React</button>
                        <button>#Web</button>
                        <button>#Figma</button>
                        <button>#Typescript</button>
                        <button>#koa.js</button>
                        <button>#NextJS</button>
                      </>
                    ),
                    edit: (
                      <>
                        <input type="text" placeholder="# 태그 검색" />
                        <button>
                          #React
                          <I.X />
                        </button>
                        <button>
                          #Web
                          <I.X />
                        </button>
                        <button>
                          #Figma
                          <I.X />
                        </button>
                        <button>
                          #Typescript
                          <I.X />
                        </button>
                        <button>
                          #koa.js
                          <I.X />
                        </button>
                        <button>
                          #NextJS
                          <I.X />
                        </button>
                      </>
                    ),
                  }[props.state]
                }
              </S.ButtonBox>
              <div className="result">
                <div>프로젝트 결과물</div>
                {
                  {
                    view: (
                      <>
                        <I.Result1 />
                        <I.Result2 />
                        <I.Result2 />
                      </>
                    ),
                    viewOnly: (
                      <>
                        <I.Result1 />
                        <I.Result2 />
                        <I.Result2 />
                      </>
                    ),
                    edit: (
                      <>
                        <I.Result1 />
                        <I.Result2 />
                        <I.Result2 />
                        <button>
                          <I.Plus />
                        </button>
                      </>
                    ),
                  }[props.state]
                }
              </div>
              {
                {
                  view: (
                    <>
                      <button className="githubBtn">
                        <I.Github />
                      </button>
                    </>
                  ),
                  viewOnly: (
                    <>
                      <button className="githubBtn">
                        <I.Github />
                      </button>
                    </>
                  ),
                  edit: (
                    <div className="githubLogo">
                      <div>
                        <I.GithubLogo />
                        Github 링크
                      </div>
                      <input type="URL" placeholder="링크를 입력해주세요." />
                    </div>
                  ),
                }[props.state]
              }
            </S.ModalRightBox>
          </S.ModalBox>
        </S.ModalInner>
      </S.ModalForm>
    </>
  );
};

export default ProjectModalEdit;
