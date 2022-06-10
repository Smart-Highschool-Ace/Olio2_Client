import styled from "@emotion/styled";

export const Positioner = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const MiniSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50vh;
`;

export const MiniTitle = styled.div`
  width: 140px;
  height: 40px;
  background: rgba(90, 148, 139, 0.27);
  border-radius: 30px;
  font-style: normal;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: 24px;

  text-align: center;
  padding-top: 1.1vh;
  color: ${({ theme }) => theme.colors.main};
`;

export const MiniSub = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.h2};
  line-height: 36px;
  color: #000000;
  margin-top: 2.3vh;
`;

export const MiniInfo = styled.div`
  font-style: normal;
  font-weight: 100;
  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: 24px;
  text-align: center;
  color: #000000;
  margin-top: 2.9vh;
`;

export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10.8vh;
`;

export const WS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h5 {
    font-style: normal;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.large};
    line-height: 24px;
    text-align: center;
    color: #000000;
    margin-top: 6.6vh;
  }
  p {
    font-style: normal;
    font-weight: 200;
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: 19px;
    text-align: center;
    color: #000000;
    margin-top: 1.7vh;
  }
`;

export const TS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 7.1vw;
  margin-right: 8.8vw;
  h5 {
    font-style: normal;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.large};
    line-height: 24px;

    text-align: center;
    color: #000000;
    margin-top: 6.6vh;
  }
  p {
    font-style: normal;
    font-weight: 200;
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: 19px;
    text-align: center;
    color: #000000;
    margin-top: 1.7vh;
  }
`;

export const SS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h5 {
    font-style: normal;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.large};
    line-height: 24px;

    text-align: center;
    color: #000000;
    margin-top: 6.6vh;
  }
  p {
    font-style: normal;
    font-weight: 200;
    font-size: ${({ theme }) => theme.fontSize.medium};
    line-height: 19px;
    text-align: center;
    color: ${({ theme }) => theme.colors.black};
    margin-top: 1.7vh;
  }
`;
