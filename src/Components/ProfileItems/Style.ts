import styled from "@emotion/styled";

export const InfoContentWrapper = styled.div`
  width: 69%;
  height: auto;
  margin-left: 6rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 400px;
`;

export const ContentTitle = styled.div`
  width: 82%;
  height: 30px;
  display: flex;
  align-items: flex-end;

  span {
    font-size: 22px;
    font-weight: bold;
    color: black;
    border-bottom: 1px solid rgba(213, 234, 206, 0.54);
    box-shadow: inset 0 -11px 0 rgba(213, 234, 206, 0.54);
  }
`;

export const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin: 2rem;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
`;

export const EtcContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 102px;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  margin: 1rem 2rem 0rem 2rem;
`;
