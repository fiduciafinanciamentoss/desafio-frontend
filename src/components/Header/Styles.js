import styled from 'styled-components';
import background from '../../IMG/Header.png';

export const TopMenu = styled.nav`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  text-align: center;
  @media screen and (max-width: 700px) {
    flex-flow: row wrap;
    width: 100%;
    height: 100px;
    padding-right: 10px;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @media screen and (max-width: 700px) {
    width: 200px;
    height: 80px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PokedexButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin: 5px;
  box-shadow: 5px 5px 0px purple;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 700px) {
    padding: 5px;
  }
`;
