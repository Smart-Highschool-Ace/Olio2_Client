import React, { useState } from "react";
import { Camera, GreenMark, LightGreenMark, Logo } from "Assets";
import * as S from "./Style";

const InfoModal: React.FC = () => {
  return (
    <S.Positioner>
      <S.LeftMark>
        <LightGreenMark />
      </S.LeftMark>
      <S.Wrapper>
        <Logo />
        <S.Title>기본 정보를 입력하세요.</S.Title>

        <S.ProfileImage>
          <Camera />
          <span>프로필 사진 추가</span>
        </S.ProfileImage>

        <S.InputWrapper>
          <S.InputBox>
            <label>이름</label>
            <S.InputName
              height={40}
              type="text"
              placeholder="이름을 입력하세요"
              maxLength={7}
              autoComplete="false"
            />
          </S.InputBox>

          <S.InputBox>
            <label>학교</label>
            <select id="school" name="school">
              <option value="dsm">대덕소프트웨어마이스터고등학교</option>
              <option value="dgsm">대구소프트웨어마이스터고등학교</option>
              <option value="gsm">광주소프트웨어마이스터고등학교</option>
              <option value="bssm">부산소프트웨어마이스터고등학교</option>
            </select>
          </S.InputBox>

          <S.InputBox>
            <label>한줄 소개 (70자)</label>
            <S.Introduce
              height={130}
              maxLength={70}
              placeholder="내용을 입력하세요"
            />
          </S.InputBox>
        </S.InputWrapper>
      </S.Wrapper>
      <S.RightMark>
        <GreenMark />
      </S.RightMark>
      <S.CompleteBtn>완료</S.CompleteBtn>
    </S.Positioner>
  );
};

export default InfoModal;
