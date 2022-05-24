import React from "react";
import * as S from "./styled";
import * as I from "../../../../Assets/index";

interface ProjectResultProps {
  state: string;
}

const ProjectResult: React.FC<ProjectResultProps> = (
  props: ProjectResultProps
) => {
  const { state } = props;

  return (
    <S.ProjectResult>
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
              <button type="button">
                <I.Plus />
              </button>
            </>
          ),
          writing: (
            <button type="button" className="addBtn">
              <I.Plus />
            </button>
          ),
        }[state]
      }
    </S.ProjectResult>
  );
};

export default ProjectResult;
