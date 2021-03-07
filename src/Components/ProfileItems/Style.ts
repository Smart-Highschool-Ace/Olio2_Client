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
  height: auto;
  overflow: visible;
  min-height: 400px;
`;

export const ContentTitle = styled.div`
  width: 82%;
  height: 30px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;

  span {
    font-size: 24px;
    font-weight: bold;
    color: black;
    border-bottom: 1px solid rgba(213, 234, 206, 0.54);
    box-shadow: inset 0 -11px 0 rgba(213, 234, 206, 0.54);
  }
`;

export const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, minmax(105px, auto));
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  margin: 1rem 5rem 3rem 0.7rem;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
`;

export const EtcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 102px;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  margin: 1rem 5rem 0rem 0.7rem;
`

export const EtcContent = styled.div`
  margin-bottom: 3rem;
  width: 100%;
  height: 100%;
`;
