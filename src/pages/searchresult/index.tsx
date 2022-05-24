import React from "react";
import styled from "@emotion/styled";
import { Header } from "Components";

const Positioner = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 85%;
  height: 70vh;
  margin-top: 8vh;
`;

const Title = styled.div`
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;

  color: #000000;
`;

const Total = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #b6b6b6;

  span {
    margin-left: 2px;
  }
`;

const ResultWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 5em;
  justify-items: center;

  cursor: pointer;
`;

const index: React.FC = () => {
  return (
    <Positioner>
      <Header />
      <Wrapper>
        <Title>검색 결과</Title>
        <Total>
          <span>총 (1)건</span>
        </Total>
        <ResultWrapper />
      </Wrapper>
    </Positioner>
  );
};

export default index;
