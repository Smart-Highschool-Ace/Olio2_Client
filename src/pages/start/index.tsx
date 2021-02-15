import styled from '@emotion/styled';
import { Header, StartPage, Footer } from 'Components';
import React from 'react';

const index: React.FC = () => {
    return (
        <Wrapper>
            <Header/>
            <StartPage/>
            <Footer/>
        </Wrapper>
    );
};

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
`;


export default index;
