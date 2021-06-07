import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  width: 20%;
  border: 1px solid black;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;


  box-shadow: 10px 10px 5px 0px rgba(255,255,255,1);  

  @media(max-width: 600px){
    width: 40%;
  }

  > span {
    text-transform: capitalize;
    width: 100%;
    display: flex;
    justify-content: center;
    background: black;
    color: white;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-around;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }


`