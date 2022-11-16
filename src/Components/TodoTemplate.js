/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const TodoTemplateBox = styled.div`
  width: 32rem;
  height: 43.5rem;
  position: relative;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 6rem;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBox>{children}</TodoTemplateBox>;
}
export default TodoTemplate;
