import React, { useState } from "react";
import * as S from "./Style";
import { Slider, Progress } from "rsuite";
import { BlockPicker } from "react-color";
import "rsuite/lib/styles/index.less";

type MyStack = {
  name: string;
  proficiency: number;
  color: string;
};

interface TechStackProps {
  StackData: MyStack[];
}

const { Line } = Progress;

const TechStack: React.FC<TechStackProps> = ({ StackData }) => {
  const [Stackvisible, setStackvisible] = useState(false);
  const [displayColorPicker, setdisplayColorPicker] = useState(false);

  const setStack = () => {
    setStackvisible(!Stackvisible);
  };

  const CloseStack = () => {
    setStackvisible(false);
  };

  const handleClick = () => {
    setdisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setdisplayColorPicker(false);
  };

  return (
    <>
      <S.TitleWrapper>
        <span>기술 스택</span>
        <div onClick={setStack}>추가 +</div>
      </S.TitleWrapper>
      <S.StackWrapper>
        {Stackvisible && (
          <S.StackContent>
            <S.ContentWrapper>
              <S.InputWrapper>
                <input type="text" placeholder="사용기술을 입력해주세요" />
                <button onClick={handleClick}>색상 선택</button>
              </S.InputWrapper>
              <Line
                percent={50}
                strokeColor="red"
                status="active"
                style={{ width: "80%" }}
              />
              {displayColorPicker && (
                <div
                  style={{
                    position: "relative",
                    zIndex: 30,
                    bottom: 30,
                    left: 300,
                  }}
                >
                  <BlockPicker />
                </div>
              )}
            </S.ContentWrapper>
          </S.StackContent>
        )}
        {StackData.map((data, idx) => (
          <S.StackContent key={idx}>
            <S.ContentWrapper>
              <span>{data.name}</span>
              <Line
                percent={data.proficiency}
                strokeColor={data.color}
                status="active"
                style={{ width: "80%" }}
              />
            </S.ContentWrapper>
          </S.StackContent>
        ))}
      </S.StackWrapper>
    </>
  );
};

export default TechStack;
