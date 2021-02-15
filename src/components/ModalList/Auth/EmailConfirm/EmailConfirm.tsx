import React, { createRef, useCallback, useEffect } from "react";
import { AuthTemplate } from "Components";
import * as S from "./Style";

import { useModalContext } from "Utils/Contexts/ModalContext";
import { LoginModal } from "Components";
import { Envelope } from "Assets";

const EmailConfirm: React.FC = () => {
  const { addModal, removeModal } = useModalContext();

  const numberMaxLength = (e: React.FormEvent<HTMLInputElement>) => {
    let { maxLength, value } = e.nativeEvent.target as HTMLInputElement;
    if (value.length > maxLength) value = value.slice(0, maxLength);
  };

  const handleClickLogin = useCallback(() => {
    removeModal();

    addModal({
      title: "",
      element: <LoginModal />,
      showOnlyBody: true,
      width: "1150px",
      height: "697px",
    });
  }, []);

  const autoFocusing = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    if (value.length >= maxLength) {
      if (parseInt(fieldIndex, 10) < 6) {
        const nextInput: HTMLInputElement = document.querySelector(
          `input[name=input-${parseInt(fieldIndex, 10) + 1}]`
        );

        if (nextInput !== null) {
          nextInput.focus();
        }
      }
    }
  };

  return (
    <AuthTemplate>
      <S.Positioner>
        <S.Title>이메일 인증</S.Title>
        <S.Wrapper>
          <S.Resend>이메일 재발송</S.Resend>
          <S.Message>
            <Envelope />
            <h3>
              인증 메일을 발송했습니다. <br />
              메일함을 확인하여 이메일 인증코드를 입력해주세요.{" "}
            </h3>
          </S.Message>
          <S.InputWrapper>
            <h4>인증번호 6자리를 입력해주세요</h4>
            <S.PinContainer>
              <S.Pin>
                <S.PinInput
                  maxLength={1}
                  onInput={(e) => numberMaxLength(e)}
                  name="input-1"
                  autoFocus={true}
                  autoCorrect="off"
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  type="number"
                  onKeyDown={(e) => {
                    e.key === "e" && e.preventDefault();
                    e.key === "-" && e.preventDefault();
                  }}
                  onChange={autoFocusing}
                />
              </S.Pin>
              <S.Pin>
                <S.PinInput
                  maxLength={1}
                  onInput={(e) => numberMaxLength(e)}
                  name="input-2"
                  autoCorrect="off"
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  type="number"
                  onKeyDown={(e) => {
                    e.key === "e" && e.preventDefault();
                    e.key === "-" && e.preventDefault();
                  }}
                  onChange={autoFocusing}
                />
              </S.Pin>
              <S.Pin>
                <S.PinInput
                  maxLength={1}
                  onInput={(e) => numberMaxLength(e)}
                  name="input-3"
                  autoCorrect="off"
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  type="number"
                  onKeyDown={(e) => {
                    e.key === "e" && e.preventDefault();
                    e.key === "-" && e.preventDefault();
                  }}
                  onChange={autoFocusing}
                />
              </S.Pin>
              <S.Pin>
                <S.PinInput
                  maxLength={1}
                  onInput={(e) => numberMaxLength(e)}
                  name="input-4"
                  autoCorrect="off"
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  type="number"
                  onKeyDown={(e) => {
                    e.key === "e" && e.preventDefault();
                    e.key === "-" && e.preventDefault();
                  }}
                  onChange={autoFocusing}
                />
              </S.Pin>
              <S.Pin>
                <S.PinInput
                  maxLength={1}
                  onInput={(e) => numberMaxLength(e)}
                  name="input-5"
                  autoCorrect="off"
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  type="number"
                  onKeyDown={(e) => {
                    e.key === "e" && e.preventDefault();
                    e.key === "-" && e.preventDefault();
                  }}
                  onChange={autoFocusing}
                />
              </S.Pin>
              <S.Pin>
                <S.PinInput
                  maxLength={1}
                  onInput={(e) => numberMaxLength(e)}
                  name="input-6"
                  autoCorrect="off"
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  type="number"
                  onKeyDown={(e) => {
                    e.key === "e" && e.preventDefault();
                    e.key === "-" && e.preventDefault();
                  }}
                  onChange={autoFocusing}
                />
              </S.Pin>
            </S.PinContainer>
          </S.InputWrapper>
          <div className="complete">
            <S.CompleteBtn>완료</S.CompleteBtn>
          </div>
        </S.Wrapper>
      </S.Positioner>
    </AuthTemplate>
  );
};

export default EmailConfirm;
