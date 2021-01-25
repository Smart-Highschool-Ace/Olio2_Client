import React from "react";
import * as S from "./Style";
import { Polygon2 } from "assets";
import { Ellipse7 } from "assets";
import { Ellipse8 } from "assets";
import { Ellipse9 } from "assets";
import { Union1 } from "assets";
import { Union2 } from "assets";
import { Polygon3 } from "assets";
import { Ellipse10 } from "assets";
import { Polygon1 } from "assets";
import { SMH } from "assets";
import { SMYP } from "assets";
import { LetsStartedBtn_1Page } from "assets";
// import StartImg from "assets/svg/StartImg"; <StartImg/>

const StartPage1: React.FC = () => {
    return (
        <S.PageWrapper>
            <S.ContentWrapper>
                <S.SMH>
                    <SMH/>
                </S.SMH>
                <S.SMYP>
                    <SMYP/>
                </S.SMYP>
                <S.Explain>
                    소프트웨어마이스터고등학교 학생들의 <br/>
                    포트폴리오를 모아놓은 포트폴리오 웹 서비스입니다.
                </S.Explain>
                <S.StartedBtn>
                    <LetsStartedBtn_1Page/>
                </S.StartedBtn>
                <S.Polygon2>
                    <Polygon2/>
                </S.Polygon2>
                <S.Ellipse7>
                    <Ellipse7/>
                </S.Ellipse7>
                <S.Ellipse8>
                    <Ellipse8/>
                </S.Ellipse8>
                <S.Ellipse9>
                    <Ellipse9/>
                </S.Ellipse9>
                <S.Union1>
                    <Union1/>
                </S.Union1>
                <S.Union2>
                    <Union2/>
                </S.Union2>
                <S.Polygon3>
                    <Polygon3/>
                </S.Polygon3>
                <S.Ellipse10>
                    <Ellipse10/>
                </S.Ellipse10>
                <S.Polygon1>
                    <Polygon1/>
                </S.Polygon1>
                <S.StartImg>
                    
                </S.StartImg>
                
            </S.ContentWrapper>
        </S.PageWrapper>
    );
}

export default StartPage1;