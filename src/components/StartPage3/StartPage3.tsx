import React from "react";
import * as S from "./Style";
import { FinalLogo } from "assets";
import { StartOlio }from "assets";
import { LetsStartedBtn_3Page } from "assets";
import { Vector7 } from "assets";


const StartPage3: React.FC = () => {
    return (
        <S.PageWrapper>
            <S.ContentWrapper>
                <S.FinalLogo>
                    <FinalLogo/>
                </S.FinalLogo>
                <S.StartOlio>
                    <StartOlio/>
                </S.StartOlio>
                <S.StartedBtn>
                    <LetsStartedBtn_3Page/>
                </S.StartedBtn>
                <S.Vector7>
                    <Vector7/>
                </S.Vector7>
            </S.ContentWrapper>
        </S.PageWrapper>
    );
}

export default StartPage3;