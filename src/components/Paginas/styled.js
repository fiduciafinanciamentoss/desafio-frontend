import styled from 'styled-components';

export const Nav = styled.nav`
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
  .info {
    .main {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    height: 30px;
    width: 30px;
    background-color: white;
    font-size: 20px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: red;
    border: 3px solid black;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: white;
      background-color: black;
      transition: all 0.3s ease-in-out;
    }
  }
  p {
    color: white;
    font-weight: bold;
    margin: 20px;
  }
`;
