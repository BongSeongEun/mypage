/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const MainWrap = styled.div`
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e9ecef;
`;
const Title = styled.div`
  margin: 0;
  font-size: 2rem;
  color: #343a40;
  font-weight: bolder;
`;
const Day = styled.div`
  margin-top: 0.25rem;
  color: #868e96;
  font-size: 1.5rem;
`;
const NumTask = styled.div`
  color: #20c997;
  font-size: 1.5rem;
  margin-top: 0.5rem;
  font-weight: bold;
`;
function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
  return (
    <MainWrap>
      <Title>{dateString}</Title>
      <Day>{dayName}</Day>
      <NumTask>할 일 {undoneTasks.length}개 남음</NumTask>
    </MainWrap>
  );
}
export default TodoHead;
