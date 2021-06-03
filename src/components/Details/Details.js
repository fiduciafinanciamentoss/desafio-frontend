import React from 'react';
import { ModalDetails, Container, Content } from './styles';

export const Details = ({ id='modal', onClose = () => {}, children }) => {

    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    }

    return (
      <ModalDetails id="modal" onClick={handleOutsideClick}>
        <Container>
          <button onClick={onClose} />
          <Content>{children}</Content>
        </Container>
      </ModalDetails>
    );

}
