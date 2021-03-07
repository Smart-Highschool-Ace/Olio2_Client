import React from "react";
import * as S from "./Style";

const ProfileItems = () => {
  return (
    <S.InfoContentWrapper>
    <S.ContentWrapper>
    <S.ContentTitle>
      <span>프로젝트</span>
    </S.ContentTitle>
    <S.ProjectContent>
      <S.ProjectWrapper>콘텐트</S.ProjectWrapper>
      <S.ProjectWrapper>콘텐트</S.ProjectWrapper>
      <S.ProjectWrapper>콘텐트</S.ProjectWrapper>
      <S.ProjectWrapper>콘텐트</S.ProjectWrapper>
      <S.ProjectWrapper>콘텐트</S.ProjectWrapper>
      <S.ProjectWrapper>콘텐트</S.ProjectWrapper>
    </S.ProjectContent>
    </S.ContentWrapper>
    <S.ContentWrapper>
    <S.ContentTitle>
      <span>수상경력</span>
    </S.ContentTitle>
    <S.EtcContent>
      <S.EtcWrapper>수상경력 소개</S.EtcWrapper>
      <S.EtcWrapper>수상경력 소개</S.EtcWrapper>
      <S.EtcWrapper>수상경력 소개</S.EtcWrapper>
    </S.EtcContent>
    </S.ContentWrapper>
    <S.ContentWrapper>
    <S.ContentTitle>
      <span>자격증</span>
    </S.ContentTitle>
      <S.EtcWrapper>자격증 소개</S.EtcWrapper>
      <S.EtcWrapper>자격증 소개</S.EtcWrapper>
      <S.EtcWrapper>자격증 소개</S.EtcWrapper>
    </S.ContentWrapper>
    </S.InfoContentWrapper>
  );
};

export default ProfileItems;

