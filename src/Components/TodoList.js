/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useState, useEffect } from 'react';

const MainWrap = styled.div`
  flex: 1;
  padding: 1.5rem, 2rem;
  padding-bottom: 3rem;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <MainWrap>
      <TodoItem text='프로젝트 생성하기' done={true} />
      <TodoItem text='프로젝트 생성하기' done={true} />
      <TodoItem text='프로젝트 생성하기' done={false} />
      <TodoItem text='프로젝트 생성하기' done={false} />
    </MainWrap>
  );
}
export default TodoList;
