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
  const [backcolor, setColor] = useState("");

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
    <S.Positioner>
      <S.TitleWrapper>
        <span>사용기술</span>
        <div onClick={setStack}>추가 +</div>
      </S.TitleWrapper>
      <S.StackWrapper onClick={handleClose}>
        {Stackvisible && (
          <S.StackContent>
            <S.ContentWrapper onClick={(e) => e.stopPropagation()}>
              <S.InputWrapper>
                <input type="text" placeholder="사용기술을 입력해주세요" />
                <button onClick={handleClick}>색상 선택</button>
              </S.InputWrapper>
              <Line
                percent={50}
                strokeColor={backcolor}
                status="active"
                style={{ width: "80%" }}
              />
              {displayColorPicker && (
                <div
                  style={{
                    position: "relative",
                    zIndex: 30,
                  }}
                >
                  <BlockPicker
                    color={backcolor}
                    onChange={(color) => setColor(color.hex)}
                  />
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
    </S.Positioner>
  );
};

export default TechStack;
