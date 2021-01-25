import React from "react";
import * as S from "./Style";
import { Logo } from "assets";
import { Instagram } from "assets";
import { Facebook } from "assets";
import { Github } from "assets";
import { Footer_GSM_SHA } from "assets";


const Footer: React.FC = () => {
    return (
        <S.FooterWrapper>
            <S.ContentWrapper>
                <S.Logo>
                    <Logo width={148} height={78} />
                </S.Logo>
                <S.SHA>
                    <Footer_GSM_SHA/>
                </S.SHA>
                <S.Line/>
                <S.Copyright>
                    Copyright © OLIO
                </S.Copyright>
                <S.SNSWrapper>
                    <S.Instagram>
                        <Instagram/>
                    </S.Instagram>
                    <S.Facebook>
                        <Facebook/>
                    </S.Facebook>
                    <S.Github>
                        <Github/>
                    </S.Github> 
                </S.SNSWrapper>  
            </S.ContentWrapper>
        </S.FooterWrapper>
    );
}

export default Footer;