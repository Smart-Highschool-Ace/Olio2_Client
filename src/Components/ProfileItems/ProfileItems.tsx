import React from "react";
import Image from "next/image";
import * as S from "./Style";

type MyProject = {
  project_id: number;
  name: string;
  icon: string;
  description: string;
};

type MyAward = {
  name: string;
  organization: string;
  date: string;
};

type MyCertificate = {
  name: string;
  organization: string;
  date: string;
};

interface ProfileItemProps {
  ProjectDummyData: MyProject[];
  AwardDummyData: MyAward[];
  CertificateDummyData: MyCertificate[];
}

const ProfileItems: React.FC<ProfileItemProps> = (props: ProfileItemProps) => {
  const { AwardDummyData, ProjectDummyData, CertificateDummyData } = props;

  return (
    <S.InfoContentWrapper>
      <S.ContentWrapper>
        <S.ContentTitle>
          <span>프로젝트</span>
        </S.ContentTitle>
        <S.ProjectContent>
          {ProjectDummyData.map(data => (
            <S.ProjectWrapper key={data.project_id}>
              <Image src={data.icon} width="auto" height="auto" />
              <S.ProjectTitle>
                <span>{data.name}</span>
                <div>{data.description}</div>
              </S.ProjectTitle>
            </S.ProjectWrapper>
          ))}
          <S.AddWrapper>+</S.AddWrapper>
        </S.ProjectContent>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.ContentTitle>
          <span>수상경력</span>
        </S.ContentTitle>
        <S.EtcContent>
          {AwardDummyData.map(data => (
            <S.EtcWrapper key={data.name}>
              <span>{data.name}</span>
              <div>{data.organization}</div>
              <div>{data.date}</div>
            </S.EtcWrapper>
          ))}
          <S.AddWrapper style={{ margin: "1rem 5rem 0rem 0.7rem" }}>
            +
          </S.AddWrapper>
        </S.EtcContent>
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.ContentTitle>
          <span>자격증</span>
        </S.ContentTitle>
        <S.EtcContent>
          {CertificateDummyData.map(data => (
            <S.EtcWrapper key={data.name}>
              <span>{data.name}</span>
              <div>{data.organization}</div>
              <div>{data.date}</div>
            </S.EtcWrapper>
          ))}
          <S.AddWrapper style={{ margin: "1rem 5rem 0rem 0.7rem" }}>
            +
          </S.AddWrapper>
        </S.EtcContent>
      </S.ContentWrapper>
    </S.InfoContentWrapper>
  );
};

export default ProfileItems;
