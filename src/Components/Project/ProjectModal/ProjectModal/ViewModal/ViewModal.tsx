import * as S from "./styled";
import * as I from "../../../../../Assets/index";
import {
  ProjectModalProps,
  useProjectViewQuery,
  useProjectDeleteQuery,
} from "./ViewModalContainer";
import { useModalContext } from "Utils/Contexts/ModalContext";

const projectId: number = 1;

const ProjectViewModal: React.FC<ProjectModalProps> = (
  props: ProjectModalProps
) => {
  const [loading, error, data] = useProjectViewQuery(projectId);

  const useOnClickDelete = (projectId: number) => {
    const [loading, error] = useProjectDeleteQuery(projectId);
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>error! {error}</h1>;
    if (!loading) {
      const { removeModal } = useModalContext();
      removeModal();
    }
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>error! {error}</h1>;

  return (
    <>
      <S.ModalForm>
        <S.ModalInner>
          <S.ModalTop>
            <S.ModalLogo>
              <I.ProjectLogo />
            </S.ModalLogo>
            <S.ModalH2>{data.project.name}</S.ModalH2>
            <S.ResultBox>
              {
                {
                  view: (
                    <>
                      <button
                        id="red"
                        onClick={() => useOnClickDelete(projectId)}
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
              <span>{data.project.introduction}</span>
              <span>
                {data.project.ProjectField.map((field, index: number) => (
                  <button key={index}>{field.name}</button>
                ))}
                <span>
                  {data.project.start_at} ~ {data.project.end_at}
                </span>
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
                {data.project.ProjectMember.map((memberList, index: number) => (
                  <button key={index}>
                    <img
                      key={index + 1}
                      src={memberList.member.profile_image}
                    />
                    <div key={index + 2}>
                      <div key={index + 3}>{memberList.member.name}</div>
                      <span key={index + 4}>{memberList.member.role}</span>
                      <I.Arrow />
                    </div>
                  </button>
                ))}
              </S.Participants>
            </S.ModalLeftBox>
            <S.ModalRightBox>
              <div>
                <div>프로젝트 내용</div>
                <span>{data.description}</span>
              </div>
              <S.SkillBox className="skills">
                <div>사용기술</div>
                {data.project.ProjectSkill.map((skillList, index: number) => (
                  <button key={index}>#{skillList.skill.name}</button>
                ))}
              </S.SkillBox>
              <S.ProjectResult>
                <div>프로젝트 결과물</div>
                {data.project.ProjectImage.map((imgList, index: number) => (
                  <img key={index} src={imgList.image} />
                ))}
                <I.Result1 />
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
