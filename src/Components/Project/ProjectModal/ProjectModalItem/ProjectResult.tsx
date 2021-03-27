import * as S from "./styled";
import * as I from "../../../../Assets/index";

interface ProjectResultProps {
  state: string;
}

const ProjectResult: React.FC<ProjectResultProps> = (
  props: ProjectResultProps
) => {
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
              <button>
                <I.Plus />
              </button>
            </>
          ),
          writing: (
              <button className="addBtn">
                <I.Plus />
              </button>
          ),
        }[props.state]
      }
    </S.ProjectResult>
  );
};

export default ProjectResult;
