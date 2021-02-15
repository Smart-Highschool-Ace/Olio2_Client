import { FinalLogo, PhoneImg, SS, StartImg, StartProfile, TS, WS } from 'Assets';
import React from 'react';
import * as S from "./Style";

const StartPage: React.FC = () => {
    return (
        <S.Positioner>
            <S.Wrapper>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;700&display=swap" rel="stylesheet"></link>
            <S.StartImg>
                <StartImg/>
            </S.StartImg>
            <S.SMH>Software Meister Highschool</S.SMH>
            <S.SMYP>Show me your PortF<S.Olio1>olio</S.Olio1></S.SMYP>
            <S.Info>
                소프트웨어마이스터고등학교 학생들의 <br/>
                포트폴리오를 모아놓은 포트폴리오 웹 서비스입니다.
            </S.Info>
            <S.StartedBtn1>
                Let's Started
            </S.StartedBtn1>
            <S.Explain1>
                “ 잘 쓴 포트폴리오를 한 눈에 보기 쉽게 ”
            </S.Explain1>
            <S.Rec1></S.Rec1>
            <S.ExAbout1>
                지금 너무너무 배가고파서 뒤질 것 같다. 그래서 갈비탕을 먹을거다.지금 너무너무 배가고파서 뒤질 것 같다. 그래서 갈비탕을 먹을거다. 닭발 요즘 안땡김 그래도 먹고싶음
            </S.ExAbout1>
            <S.ProfileImg>
                <StartProfile/>
            </S.ProfileImg>
            <S.Explain2>
                “ 웹 뿐만아니라 앱에서도 가능 ! ”
            </S.Explain2>
            <S.Rec2></S.Rec2>
            <S.ExAbout2>
                지금 너무너무 배가고파서 뒤질 것 같다. 그래서 갈비탕을 먹을거다.지금 너무너무 배가고파서 뒤질 것 같다. 그래서 갈비탕을 먹을거다.지금 너무너무 배가고파서 뒤질 것 같다. 그래서 갈비탕을 먹을거다.지금 너무너무 배가고파서 뒤질 것 같다. 그래서 갈비탕을 먹을거다.지금 너무너무 배가고파서 뒤질 것 같다. 그래서 갈비탕을 먹을거다.
            </S.ExAbout2>
            <S.PhoneImg>
                <PhoneImg/>
            </S.PhoneImg>
            <S.MiniSection>
                <S.MiniTitle>
                    OLIO
                </S.MiniTitle>
                <S.MiniSub>
                    소프트웨어마이스터고등학교 포트폴리오 웹 서비스
                </S.MiniSub>
                <S.MiniInfo>
                    기존에 있던 ‘드림북'을 대체하기 위한<br/>
                    포트폴리오 웹 서비스 입니다.
                </S.MiniInfo>
            </S.MiniSection>
            <S.About>
                <S.WS>
                    <WS/>
                    <h5>공간제약이 없는 웹 서비스</h5>
                    <p>
                        책으로 이루어진 ‘드림북'을 대체한 웹서비스로 <br/>
                        공간의 제약을 받지 않고 열람 가능
                    </p>
                </S.WS>
                <S.TS>
                    <TS/>
                    <h5>기업의 채용을 생각한 서비스</h5>
                    <p>
                        다양한 학생들의 포트폴리오를 <br/>
                        한눈에 보기쉽게
                    </p>
                </S.TS>
                <S.SS>
                    <SS/>
                    <h5>학생을 생각한 서비스</h5>
                    <p>
                        웹으로 자신의 포트폴리오 정리와 <br/>
                        선배나 친구들의 프로젝트 열람 가능
                    </p>
                </S.SS>
            </S.About>
            <S.StartOlio>
                쉽고 간편한 포트폴리오 웹 서비스<br/>
                <p><S.Apostrophe>‘ <S.Olio2>olio</S.Olio2> ’</S.Apostrophe> 시작하세요</p>
            </S.StartOlio>
            <S.StartedBtn3>
                Let's Started
            </S.StartedBtn3>
            <S.FinalLogo>
                    <FinalLogo/>
            </S.FinalLogo>
            </S.Wrapper>
        </S.Positioner>
    );
};



export default StartPage;
