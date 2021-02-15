import { Facebook, Github, Instagram, Logo } from 'Assets';
import React from 'react';
import * as S from "./Style";

const Footer = () => {
    return (
        <S.Positioner>
            <S.Logo>
                <Logo width={148} height={78} />
            </S.Logo>
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
            <S.GSMSHA>
                광주소프트웨어마이스터고등학교<br/>
                <S.SHA><S.Capital>S</S.Capital>mart <S.Capital>H</S.Capital>ighschool <S.Capital>A</S.Capital>ce</S.SHA> 
            </S.GSMSHA>
            <S.Line/>
            <S.Copyright>
                Copyright © OLIO
            </S.Copyright>
        </S.Positioner>
    );
};

export default Footer;
