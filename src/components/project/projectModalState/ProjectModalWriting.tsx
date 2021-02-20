import * as I from "../../../Assets/index";
import * as S from "../styled";

interface ProjectModalProps {
  visible?: boolean;
}

const ProjectModal: React.FC<ProjectModalProps> = (
  props: ProjectModalProps
) => {
  return (
    <>
      <S.ModalForm action="#">
        <S.ModalInner visible={props.visible}>
          {/* <ProjectModalHashTag itemInfo={data} /> */}
          <S.ModalTop>
            <div>
              <S.ModalLogo>
                <button id="cameraBtn">
                  <I.Camera />
                </button>
              </S.ModalLogo>
              <input
                id="modalH2"
                type="text"
                placeholder="프로젝트 이름"
                autoFocus
              />
              <button type="submit">저장</button>
            </div>
            <S.ModalToExplanation>
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
            </S.ModalToExplanation>
            <hr />
          </S.ModalTop>
          <S.ModalBox>
            <S.ModalLeftBox>
              <button className="modalImg">
                <span>프로젝트 결과물 이미지</span>
              </button>
              <S.participants>
                <div>참여자</div>
                <div className="searchbar">
                  <div>
                    <I.Search />
                    <input type="text" placeholder="검색" />
                  </div>
                  <textarea placeholder="맡은 역할" />
                  <button>추가</button>
                </div>
                <div className="participantsGroup">
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
                </div>
              </S.participants>
            </S.ModalLeftBox>
            <S.ModalRightBox>
              <div className="project">
                <div>프로젝트 내용</div>
                <textarea placeholder="내용을 입력하세요." />
              </div>
              <S.ButtonBox className="skills">
                <div>
                  <span>사용기술</span>
                </div>
                <input type="text" placeholder="# 태그 검색" />
                <button>
                  #React
                  <I.X />
                </button>
              </S.ButtonBox>
              <div className="result">
                <div>프로젝트 결과물</div>
                <button className="addBtn">
                  <I.Plus />
                </button>
              </div>
              <div className="githubLogo">
                <div>
                  <I.GithubLogo />
                  Github 링크
                </div>
                <input type="URL" placeholder="링크를 입력해주세요." />
              </div>
              <S.BackBtn>이전</S.BackBtn>
            </S.ModalRightBox>
          </S.ModalBox>
        </S.ModalInner>
      </S.ModalForm>
    </>
  );
};

export default ProjectModal;
