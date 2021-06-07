import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e53935;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const List = styled.div`
  background-color: #f5f5f5;
  width: 600px;
  padding: 10px;
  border: 1px solid #f5f5f5;
  border-radius: 10px;

  ul {
    border: none;
  }
`;

export const Span = styled.div`
  & + div {
    margin-top: 3px;
  }
  span {
    max-width: 100px;
    display: flex;
    justify-content: center;
    border-radius: 6px;
  }
`;
