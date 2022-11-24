/* eslint-disable */
import Todo from '../Components/Todo';
import styled from 'styled-components';

const MainWrap = styled.div`
  background: #ffe6e6;
  height: 100vh;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <MainWrap>
      <Todo />
    </MainWrap>
  );
}

export default TodoList;
