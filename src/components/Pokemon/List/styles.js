import styled from 'styled-components';

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
