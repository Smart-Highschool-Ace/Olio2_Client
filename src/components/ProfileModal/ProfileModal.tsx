import React, { useState } from "react";
import * as S from "./Style";
import dynamic from "next/dynamic";

const Avatar = dynamic(() => import("react-avatar-edit"), { ssr: false });

interface ModalProps {
  toggle: any;
  setProfile: React.Dispatch<React.SetStateAction<any>>;
}

const ProfileModal: React.FC<ModalProps> = (props) => {
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (preview: any) => {
    setPreview(preview);
    console.log(preview);
  };

  const onBeforeFileLoad = (elem: any) => {
    if (elem.target.files[0].size > 500000) {
      alert("File is too big!");
      elem.target.value = "";
    } else {
      console.log(typeof elem.target.files[0]);
    }
  };

  const ClosePopUp = () => {
    props.toggle();
  };

  const SaveImage = () => {
    if (preview === null) {
      alert("바꿀 사진을 선택해주세요");
    } else {
      alert("저장되었습니다!");
      props.setProfile(preview);
      ClosePopUp();
    }
  };

  return (
    <S.Positioner onClick={ClosePopUp}>
      <S.ModalWrapper onClick={(Event) => Event.stopPropagation()}>
        <S.ModalInner>
          <S.ModalHeader>
            <span>Edit Media</span>
            <span>Preview</span>
          </S.ModalHeader>
          <S.ModalContent>
            <S.ImageWrapper>
              <Avatar
                width={500}
                height={450}
                onCrop={onCrop}
                onClose={onClose}
                onBeforeFileLoad={onBeforeFileLoad}
              />
            </S.ImageWrapper>
            <S.ImageWrapper>
              <img src={preview} alt="Preview" />
            </S.ImageWrapper>
          </S.ModalContent>
          <S.ModalBottom>
            <S.CancelButton onClick={ClosePopUp}>취소</S.CancelButton>
            <S.ImageButton onClick={SaveImage}>저장하기</S.ImageButton>
          </S.ModalBottom>
        </S.ModalInner>
      </S.ModalWrapper>
    </S.Positioner>
  );
};

export default ProfileModal;
