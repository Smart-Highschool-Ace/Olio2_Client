import styled from "@emotion/styled";

export const InfoContentWrapper = styled.div`
  width: 69%;
  height: auto;
  margin-left: 9rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  min-height: 400px;
  overflow: visible;
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
  grid-template-columns: 550px 550px;
  grid-template-rows: 100px 100px;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin: 2rem;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 100px;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
`;

export const EtcContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1138px;
  height: 102px;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  margin: 2rem 1rem 0rem 1rem;
`;
