import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  button {
    padding: 10px;
    width: 100px;
    background-color: #26a69a;
    color: #fff;
    border: none;
    border-radius: 10px;
    margin-left: 5px;

    &:hover {
      background: ${shade(0.2, "#26A69A")};
    }
  }
`;