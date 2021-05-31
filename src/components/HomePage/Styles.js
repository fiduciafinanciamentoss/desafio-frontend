import styled from 'styled-components';

export const Div = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 700px) {
    margin-top: 20px;
  }
`;

export const MainDiv = styled.div`
  min-height: 100vh;
  padding-top: 90px;
  position: relative;
  max-height: max-content;
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
