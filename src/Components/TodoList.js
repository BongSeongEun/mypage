/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useState, useEffect } from 'react';
import { useTodoState } from '../TodoContext';

const MainWrap = styled.div`
  flex: 1;
  padding: 1.5rem, 2rem;
  padding-bottom: 3rem;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();

  return (
    <MainWrap>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </MainWrap>
  );
}
export default TodoList;
