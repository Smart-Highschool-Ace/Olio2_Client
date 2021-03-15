import * as S from "./styled";
import * as I from "../../../../Assets/index";

interface ModalTopProps {
  state: string;
}

const ModalTop: React.FC<ModalTopProps> = (props: ModalTopProps) => {
  if (props.state == "writing") {
    return (
      <div>
        <S.ModalLogo>
          <button id="cameraBtn">
            <I.Camera />
          </button>
        </S.ModalLogo>
        <S.ModalH2>
        <input id="modalH2" type="text" placeholder="프로젝트 이름" autoFocus />
        </S.ModalH2>
      </div>
    );
  } else {
    return (
      <>
        <S.ModalLogo>
          <I.ProjectLogo />
        </S.ModalLogo>
        <S.ModalH2>취준진담</S.ModalH2>
      </>
    );
  }
};

export default ModalTop;
