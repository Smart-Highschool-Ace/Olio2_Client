import * as S from "./styled";
import * as I from "../../../../Assets/index";

interface SkillBoxProps {
  state: string;
}

const SkillBox: React.FC<SkillBoxProps> = (props: SkillBoxProps) => {
  return (
    <S.SkillBox className="skills">
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
          writing: (
            <>
              <input type="text" placeholder="# 태그 검색" />
              <button>
                #React
                <I.X />
              </button>
            </>
          ),
        }[props.state]
      }
    </S.SkillBox>
  );
};

export default SkillBox;
