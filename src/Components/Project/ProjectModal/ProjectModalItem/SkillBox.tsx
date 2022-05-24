import React from "react";
import * as S from "./styled";
import * as I from "../../../../Assets/index";

interface SkillBoxProps {
  state: string;
}

const SkillBox: React.FC<SkillBoxProps> = (props: SkillBoxProps) => {
  const { state } = props;

  return (
    <S.SkillBox className="skills">
      <div>사용기술</div>
      {
        {
          view: (
            <>
              <button type="button">#React</button>
              <button type="button">#Web</button>
              <button type="button">#Figma</button>
              <button type="button">#Typescript</button>
              <button type="button">#koa.js</button>
              <button type="button">#NextJS</button>
            </>
          ),
          viewOnly: (
            <>
              <button type="button">#React</button>
              <button type="button">#Web</button>
              <button type="button">#Figma</button>
              <button type="button">#Typescript</button>
              <button type="button">#koa.js</button>
              <button type="button">#NextJS</button>
            </>
          ),
          edit: (
            <>
              <input type="text" placeholder="# 태그 검색" />
              <button type="button">
                #React
                <I.X />
              </button>
              <button type="button">
                #Web
                <I.X />
              </button>
              <button type="button">
                #Figma
                <I.X />
              </button>
              <button type="button">
                #Typescript
                <I.X />
              </button>
              <button type="button">
                #koa.js
                <I.X />
              </button>
              <button type="button">
                #NextJS
                <I.X />
              </button>
            </>
          ),
          writing: (
            <>
              <input type="text" placeholder="# 태그 검색" />
              <button type="button">
                #React
                <I.X />
              </button>
            </>
          ),
        }[state]
      }
    </S.SkillBox>
  );
};

export default SkillBox;
