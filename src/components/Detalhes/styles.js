import styled from 'styled-components';

export const MainDiv = styled.div`
  min-height: 100vh;
  padding-top: 90px;
  position: relative;
  max-height: max-content;
  background-color: black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 700px) {
    padding-top: 600px;
  }
`;

export const ContainerPokemonDetails = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 100px;
  cursor: default;
  .back-btn {
    position: absolute;
    top: 150px;
    left: 10px;
    @media screen and (max-width: 700px) {
      top: 180px;
    }
  }
  .catch-btn {
    position: absolute;
    top: 150px;
    right: 10px;
    @media screen and (max-width: 700px) {
      top: 180px;
    }
  }
  .name-title {
    position: absolute;
    top: 180px;
    text-align: center;
    color: white;
    font-size: 40px;
    letter-spacing: 3px;
    margin: 0;
    @media (max-width: 619px) {
      top: 130px;
      font-size: 30px;
    }
  }
`;

export const ContainerContentPokemon = styled.div`
  position: absolute;
  top: 300px;
  display: flex;
  width: 850px;
  max-width: calc(100vw - 20px);
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
  color: white;
  div,
  img {
    border-radius: 10px;
  }

  p {
    margin: 30px;
  }
  @media screen and (max-width: 700px) {
    top: 250px;
  }
  .imgs-Pokemon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      background-color: #cc0000;
      width: 150px;
      transition: all 0.3s ease-in-out;
      @media (max-width: 619px) {
        width: 135px;
      }
    }
    @media screen and (max-width: 619px) {
      flex-direction: row;
      width: 300px;
      margin-top: 25px;
    }
  }
  .stats {
    text-align: center;
    background-color: #cc0000;
    width: 300px;
    padding: 15px 0;
    font-size: 11px;
    text-align: center;
    @media screen and (max-width: 619px) {
      font-size: 10px;
    }
  }
  .types-And-Moves {
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 300px;
    @media screen and (max-width: 619px) {
      margin-bottom: 30px;
    }
  }
  .types {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #cc0000;
    height: 100px;
    margin-bottom: 20px;
    transition: all 0.3s ease-in-out;
    .type-img {
      height: 70px;
    }
  }
  .moves {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 320px;
    background-color: #cc0000;
    padding: 15px 0;
    div {
      flex-grow: 1;
      margin: 0 10px 10px 10px;
      overflow-y: auto;
      /* width */
      ::-webkit-scrollbar {
        width: 15px;
      }
      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
        background-color: black;
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: white;
        border-radius: 10px;
      }
    }
  }
`;

// -------------------------

export const ProgressBar = styled.div`
  height: 20px;
  width: 90%;
  margin: 0 auto;
  position: relative;
  .label {
    position: relative;
    z-index: 1;
    text-align: center;
    color: #000;
  }
`;

export const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 0.5s ease-in-out;
`;

export const Background = styled(BaseBox)`
  background: white;
  width: 100%;
`;

export const Progress = styled(BaseBox)`
  background: #ffcb05;
  width: ${({ percent }) => percent}%;
`;
