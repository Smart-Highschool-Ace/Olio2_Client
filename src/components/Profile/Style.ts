import styled from "@emotion/styled";

export const Positioner = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - 85px);
  margin-top: 85px;
  display: flex;
  flex-direction: row;
`;

export const ProfileContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
`;

export const InfoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100%;
`;
