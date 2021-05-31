import React from 'react';
import { useHistory } from 'react-router-dom';
import { TopMenu, Logo, LogoContainer } from './Styles';
import LogoImg from '../../IMG/LogoImg.png';

export default function Header(props) {
  return (
    <TopMenu>
      <LogoContainer>
        <Logo src={LogoImg} alt="pokeball" />
      </LogoContainer>
      <LogoContainer></LogoContainer>
    </TopMenu>
  );
}
