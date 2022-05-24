import React from "react";

interface ProjectBoxProps {
  state: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = (props: ProjectBoxProps) => {
  const { state } = props;

  return (
    <>
      {
        {
          writing: (
            <div className="project">
              <div>프로젝트 내용</div>
              <textarea placeholder="내용을 입력하세요." />
            </div>
          ),
          edit: (
            <div>
              <div>프로젝트 내용</div>
              <span>
                {" "}
                학교에서 포트폴리오를 원래 책 형식으로 관리했었는데 취업처에
                포트폴리오를 돌리거나 학생들이 보기에 불편하다는 것을
                느꼈습니다. 그렇기 때문에 포트폴리오 관리를 웹으로 한다면 좀 더
                편리하게 관리 할 수 있을 것 같았기 때문에 개발을 하게
                되었습니다.{" "}
              </span>
            </div>
          ),
          view: (
            <div>
              <div>프로젝트 내용</div>
              <span>
                {" "}
                학교에서 포트폴리오를 원래 책 형식으로 관리했었는데 취업처에
                포트폴리오를 돌리거나 학생들이 보기에 불편하다는 것을
                느꼈습니다. 그렇기 때문에 포트폴리오 관리를 웹으로 한다면 좀 더
                편리하게 관리 할 수 있을 것 같았기 때문에 개발을 하게
                되었습니다.{" "}
              </span>
            </div>
          ),
          viewOnly: (
            <div>
              <div>프로젝트 내용</div>
              <span>
                {" "}
                학교에서 포트폴리오를 원래 책 형식으로 관리했었는데 취업처에
                포트폴리오를 돌리거나 학생들이 보기에 불편하다는 것을
                느꼈습니다. 그렇기 때문에 포트폴리오 관리를 웹으로 한다면 좀 더
                편리하게 관리 할 수 있을 것 같았기 때문에 개발을 하게
                되었습니다.{" "}
              </span>
            </div>
          ),
        }[state]
      }
    </>
  );
};

export default ProjectBox;
