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
	grid-auto-rows: minmax(105px, auto);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  margin: 1rem 5rem 3rem 0.7rem;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
`;

export const AddWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(213, 234, 206, 0.54);
  height: 105px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 38px;
  color: #5A948B;
`;

export const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 18px;
    color: #000000;
    font-weight: 600;
  }

  div {
    color: #9A9A9A;
    font-weight: 600;
    font-size: 14px;
  }
`;

export const EtcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  height: 105px;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  margin: 1rem 5rem 0rem 0.7rem;
  padding-left: 35px;

  div {
    font-size: 14px;
    color: #959595;
  }

  span {
    font-size: 18px;
    font-weight: 600;
    color: #504F4F;
  }
`

export const EtcContent = styled.div`
  margin-bottom: 3rem;
  width: 100%;
  height: 100%;
`;
