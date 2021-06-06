import styled from 'styled-components';
import { shade } from 'polished';

export const Search = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

`;

export const Content = styled.div`
  width: 1000px;

  form {
    padding: 10px;
    display: flex;
    justify-content: center;
    background-color: #fff;
    
    input {
      float: left;
      max-width: 800px;
      border: none !important;
    }

    button {
      padding: none !important;
      width: 100px;
      background-color: #212121;
      color: #fff;
      border: none;
      border-radius: 10px;
      margin-left: 5px;

      &:hover {
        background: ${shade(0.2, "#212121")};
      }
    }
  }
`;