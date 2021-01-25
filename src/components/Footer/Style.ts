import styled from "@emotion/styled";

export const FooterWrapper = styled.footer `
    position: relative;
    width: 100%;
    top: 3240px;
    left: 0px;

    background-color: #FAFAFA; 

    overflow-x: hidden;
`;

export const ContentWrapper = styled.div `
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 460px;
    padding-left: 3%;
    padding-right: 6%;
    
`;

export const Logo = styled.div `
    display: flex;
    position: absolute;
    left: 5%;
    top: 117px;
`;

export const SHA = styled.div `
    position: absolute;
    width: 100%;
    height: 48px;
    left: 5%;
    top: 218px;

    margin: 0;
    padding: 0;
`;

export const Line = styled.hr `
    position: absolute;
    width: 880px;
    height: 0px;
    left: 5%;
    top: 333px;

    border: 0.5px solid #9E9E9E;

    margin: 0;
    padding: 0;
`;

export const Copyright = styled.span `
    position: absolute;
    width: 100%;
    height: 18px;
    left: 5%;
    top: 345px;

    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
   
    color: #8E8E8E;

    margin: 0;
    padding: 0;
`;

export const SNSWrapper = styled.div `
    justify-content: space-around;
`;


export const Instagram = styled.span `
    position: absolute;
    right: 13%;
    top: 171px;
`;

export const Facebook = styled.span `
    position: absolute;
    right: 9%;
    top: 171px;
`;

export const Github = styled.span `
    position: absolute;
    right: 5%;
    top: 171px;
`;

