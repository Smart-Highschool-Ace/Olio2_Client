import * as S from "../styled";
import * as I from "../../../Assets/index";

interface ProjectModalProps {
  visible?: boolean;
  state?: string;
}

const ProjectModal: React.FC<ProjectModalProps> = (
  props: ProjectModalProps
) => {
  return (
    <>
      <S.ModalOverlay visible={props.visible}>
        <S.ModalWrapper visible={props.visible} tabIndex={-1}>
          <S.ModalForm action="#">
            <S.ModalInner>
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
                  <input
                    type="text"
                    placeholder="프로젝트 소개를 입력하세요."
                  />
                  <div>
                    <span></span>
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
                  <S.ButtonBox state={props.state}>
                    <input type="text" placeholder="# 태그 검색" />
                    <button>
                      #React
                      <I.X />
                    </button>
                  </S.ButtonBox>
                  <button className="modalImg">
                    <I.Camera />
                    <span>프로젝트 결과물에 대한 사진을 첨부해주세요.</span>
                  </button>
                  <S.participants>
                    <div>참여자</div>
                    <div className="participantsGroup">
                      <div className="searchbar">
                        <div>
                          <I.Search />
                          <input type="text" placeholder="검색" />
                        </div>
                        <textarea placeholder="맡은 역할" />
                        <button>추가</button>
                      </div>
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
                  <div className="skills">
                    <div>
                      <span>사용기술</span>
                      <button>
                        <I.Camera />
                      </button>
                    </div>
                    <textarea placeholder="내용을 입력하세요." />
                  </div>
                  <div className="result">
                    <div>프로젝트 결과물</div>
                    <button>
                      <I.Plus />
                    </button>
                  </div>
                  <div>
                    <div>Github 링크</div>
                    <input type="URL" placeholder="링크를 입력해주세요." />
                  </div>
                </S.ModalRightBox>
              </S.ModalBox>
            </S.ModalInner>
          </S.ModalForm>
        </S.ModalWrapper>
      </S.ModalOverlay>
    </>
  );
};

export default ProjectModal;
