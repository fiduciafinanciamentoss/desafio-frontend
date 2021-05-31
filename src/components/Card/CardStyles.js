import styled from 'styled-components';

export const Image = styled.img`
  height: 150px;
  width: 150px;
  z-index: 3;
  @media screen and (max-width: 700px) {
    height: 80px;
    width: 80px;
  }
`;
export const Div = styled.div`
  height: 250px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  border: 2px solid black;
  background-color: #aeaaaa;
  font-family: 'Press Start 2P', cursive;
  @media screen and (max-width: 700px) {
    height: 150px;
    width: 150px;
  }
`;
export const Name = styled.h4`
  color: white;
  text-align: center;
  text-transform: capitalize;
  font-size: 20px;

  @media screen and (max-width: 700px) {
    font-size: 12px;
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  background-color: red;
  border-bottom: 2px solid black;
  @media screen and (max-width: 700px) {
    height: 25px;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 5px;
  left: 0px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  @media (max-width: 700px) {
    height: 10px;
  }
`;
export const ButtonPrimary = styled.button`
  height: 3rem;
  width: 50%;
  padding: 10px;
  background-color: #cc0000;
  font-weight: bold;
  font-size: 11px;
  color: white;
  letter-spacing: 1px;
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    font-size: 6px;
  }
`;
export const ButtonSecondary = styled.button`
  height: 3rem;
  width: 50%;
  padding: 10px;
  background-color: #cc0000;
  font-weight: bold;
  font-size: 11px;
  color: white;
  letter-spacing: 1px;
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    font-size: 6px;
  }
`;
