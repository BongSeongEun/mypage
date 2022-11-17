/* eslint-disable */
import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
  margin-right: 2rem;
`;
const MainWrap = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  &:hover {
    //이 위에 커서가 있으면 RemoveButton컴포넌트 보여주세요
    ${RemoveButton} {
      display: initial;
    }
  }
`;
const CheckBox = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  border: 1px solid #ced4da;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  margin-left: 2rem;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const Text = styled.div`
  flex: 1;
  font-size: 1.3rem;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  return (
    <MainWrap>
      <CheckBox done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckBox>
      <Text done={done}>{text}</Text>
      <RemoveButton onClick={onRemove}>
        <MdDelete />
      </RemoveButton>
    </MainWrap>
  );
}
export default React.memo(TodoItem);
