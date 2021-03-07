import React, { useState } from "react";
import * as S from "./Style";
import dynamic from "next/dynamic";
import Template from "../Template/Template";

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
    if (elem.target.files[0].size > 700000) {
      alert("이미지의 크기가 너무 큽니다");
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
    <Template toggle={props.toggle} width={1200} height={650}>
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
    </Template>
  );
};

export default ProfileModal;
