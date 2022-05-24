import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import * as S from "./Style";
import Template from "../Template/Template";

const Avatar = dynamic(() => import("react-avatar-edit"), { ssr: false });

interface ModalProps {
  toggle: any;
  setProfile: React.Dispatch<React.SetStateAction<any>>;
}

const ProfileModal: React.FC<ModalProps> = props => {
  const [preview, setPreview] = useState(null);
  const { toggle, setProfile } = props;

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (onCropPreview: any) => {
    setPreview(onCropPreview);
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
    toggle();
  };

  const SaveImage = () => {
    if (preview === null) {
      alert("바꿀 사진을 선택해주세요");
    } else {
      alert("저장되었습니다!");
      setProfile(preview);
      ClosePopUp();
    }
  };

  return (
    <Template toggle={toggle} width={1200} height={650}>
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
            <Image src={preview} alt="Preview" width="auto" height="auto" />
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
