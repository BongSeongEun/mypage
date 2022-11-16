/* eslint-disable */
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TodoTemplate from '../Components/TodoTemplate';
import TodoHead from '../Components/TodoHead';
import TodoList from '../Components/TodoList';
import TodoCreate from '../Components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function Welcome() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}
export default Welcome;
