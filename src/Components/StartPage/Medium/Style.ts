import styled from "@emotion/styled";

export const Positioner = styled.article`
  max-width: 1080px;
  margin: 30vh auto 0;
  text-align: center;
`;

export const TitleWrapper = styled.div`
  margin: 0 auto;
  width: 140px;
  height: 40px;
  background: rgba(90, 148, 139, 0.27);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Sub = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.main};
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h2};
  margin: 2.3vh 0;
`;

export const Info = styled.div`
  font-weight: 100;
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: center;
`;

export const About = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10.8vh;
`;

export const SituationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SituationHeader = styled.h5`
  font-weight: 600;
  margin: 2.5vh 0;
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const SituationExplanation = styled.p`
  font-weight: 200;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
