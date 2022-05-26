import React, { useState } from "react";
import { Progress } from "rsuite";
import { BlockPicker } from "react-color";
import * as S from "./Style";
import "rsuite/lib/styles/index.less";

type MyStack = {
  id: number;
  name: string;
  proficiency: number;
  color: string;
};

interface TechStackProps {
  StackData: MyStack[];
}

const { Line } = Progress;

const TechStack: React.FC<TechStackProps> = ({ StackData }) => {
  const [Stackable, setStackable] = useState(false);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [backcolor, setColor] = useState("");

  const setStack = () => {
    setStackable(!Stackable);
  };

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  return (
    <S.Positioner>
      <S.TitleWrapper>
        <span>사용기술</span>
        <div role="button" onClick={setStack}>
          추가 +
        </div>
      </S.TitleWrapper>
      <S.StackWrapper onClick={handleClose}>
        {Stackable && (
          <S.StackContent>
            <S.ContentWrapper role="button" onClick={e => e.stopPropagation()}>
              <S.InputWrapper>
                <input type="text" placeholder="사용기술을 입력해주세요" />
                <button type="button" onClick={handleClick}>
                  색상 선택
                </button>
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
                    onChange={color => setColor(color.hex)}
                  />
                </div>
              )}
            </S.ContentWrapper>
          </S.StackContent>
        )}
        {StackData.map(data => (
          <S.StackContent key={data.id}>
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
