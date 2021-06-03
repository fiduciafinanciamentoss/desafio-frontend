import styled from 'styled-components';

export const ModalDetails = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Container = styled.div`
  background-color: #212121;
  color: #fff;
  width: 35%;
  height: 40%;
  border-radius: 10px;
  display: flex;
  justify-content: center;

  button {
    border: none;
    background-color: transparent;
    outline: none;
    width: 32px;
    height: 32px;

    &::before,
    &::after {
      content: " ";
      position: absolute;
      width: 2.5px;
      height: 24px;
      background-color: #fff;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
`;

export const Content = styled.div`

`;