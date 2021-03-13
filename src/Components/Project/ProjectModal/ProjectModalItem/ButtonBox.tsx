import * as S from "./styled";
import * as I from "../../../../Assets/index";

interface ButtonBoxProps {
  state: string;
}

const ButtonBox: React.FC<ButtonBoxProps> = (props: ButtonBoxProps) => {
  return (
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
          writing: (
            <>
              <div>
                <span>사용기술</span>
              </div>
              <input type="text" placeholder="# 태그 검색" />
              <button>
                #React
                <I.X />
              </button>
            </>
          ),
        }[props.state]
      }
    </S.ButtonBox>
  );
};

export default ButtonBox;
