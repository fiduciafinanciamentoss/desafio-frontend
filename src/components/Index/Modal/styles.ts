import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: #00000050;
  z-index: 1;
  top: 0;
`

export const InfoDialog = styled.div`
  position: absolute;
  width: 600px;
  height: 200px;
  top: calc(50% - 75px);
  left: calc(50% - 300px);
  background: white;
  z-index: 1;
  border-radius: 10px;
  background: #ffffff;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "imagePokemon content-one content-one"
    "imagePokemon content-two content-two";

  div:nth-child(1) {
    grid-area: imagePokemon;
    display: flex;
    justify-content: center;
    align-items: center;
  }

   div:nth-child(2) {
    grid-area: content-one;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 2rem;

    span:first-of-type {
      font-weight: 800;
      align-self: center;
    }

    span {
      text-transform: capitalize;
    }
  }

  div:nth-child(3) {
    grid-area: content-two;
    display: flex;
    justify-content: center;
    align-items: center; 
  }

  div:last-child {
    position: absolute;
    right: 0.5rem;
    top: 0.2rem;
    cursor: pointer;
  }
  
`