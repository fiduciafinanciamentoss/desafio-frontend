import styled from 'styled-components';
export const Nav = styled.div`
  width: 100%;
  color: white;
  padding: 10px;
  margin: 15px 0;
  border-radius: 10px;
  background-color: #b00000;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 150px;
  @media screen and (max-width: 700px) {
    top: 120px;
  }
`;

export const Div = styled.div`
  width: 100%;
  margin-top: 160px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 700px) {
    margin-top: 130px;
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
