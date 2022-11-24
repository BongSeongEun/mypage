/* eslint-disable */
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const GlobalStyle = createGlobalStyle`
  body{
    background: #FFCDCD;
  }
`;
const MainWrap = styled.div``;

function Welcome() {
  return (
    <MainWrap>
      <GlobalStyle />
    </MainWrap>
  );
}
export default Welcome;
