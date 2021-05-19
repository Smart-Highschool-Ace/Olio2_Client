import * as S from "./styled";
import * as I from "../../../../../Assets/index";
import { ProjectModalProps, handler } from "./EditModalContainer";

const projectId: number = 1;

const ProjectEditModal: React.FC<ProjectModalProps> = (
  props: ProjectModalProps
) => {
  const handleClickRegister = handler();

  return (
    <>
      <S.ModalForm>
        <S.ModalInner>
          <S.ModalTop>
            <div>
              <S.ModalLogo>
                <button id="cameraBtn">
                  <I.Camera />
                </button>
              </S.ModalLogo>
              <S.ModalH2>
                <input
                  id="modalH2"
                  type="text"
                  placeholder="프로젝트 이름"
                  autoFocus
                />
              </S.ModalH2>
            </div>
            <S.ModalToExplanation>
              <input type="text" placeholder="프로젝트 소개를 입력하세요." />
              <div>
                <div>
                  <span>참여기간</span>
                  <S.OngoingBtn>
                    진행중
                    <I.Check />
                  </S.OngoingBtn>
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
                <S.SearchBar>
                  <div>
                    <I.Search />
                    <input type="text" placeholder="검색" />
                  </div>
                  <textarea placeholder="맡은 역할" />
                  <button id="addBtn">추가</button>
                </S.SearchBar>
              </S.ParticipantAdd>
            </S.ModalLeftBox>
            <S.ModalRightBox>
              <div className="project">
                <div>프로젝트 내용</div>
                <textarea placeholder="내용을 입력하세요." />
              </div>
              <S.SkillBox className="skills">
                <div>사용기술</div>
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
              </S.SkillBox>
              <S.ProjectResult>
                <div>프로젝트 결과물</div>
                <>
                  <I.Result1 />
                  <I.Result2 />
                  <I.Result2 />
                  <button>
                    <I.Plus />
                  </button>
                </>
              </S.ProjectResult>
              <div>
                <div>
                  <I.GithubLogo />
                  Github 링크
                </div>
                <input type="URL" placeholder="링크를 입력해주세요." />
              </div>
              {
                {
                  writing: (
                    <S.BackBtn>
                      <button
                        onClick={() => {
                          handleClickRegister(props);
                        }}
                      >
                        이전
                      </button>
                      <button>저장</button>
                    </S.BackBtn>
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

export default ProjectEditModal;
