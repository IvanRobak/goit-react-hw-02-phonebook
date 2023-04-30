import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
`;
export const Item = styled.li`
  display: flex;
  font-size: 20px;
  font-weight: 400;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const Text = styled.span`
  display: flex;
`;
export const DeleteBtn = styled.button`
display: flex;
  font-size: 16px;
  font-weight: 400;
  border: 2px solid tomato;
  border-radius: 4px;
  margin-left: 15px;s
`;
