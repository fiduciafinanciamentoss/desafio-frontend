import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #464646;
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0px;
`;

export const Title = styled.h1`
  color: #fff;
  align-self: flex-start;
  margin-left: 50px;
  margin-bottom: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2)
    format("woff2");
  unicode-range: U+0370-03FF;
`;

export const ContainerBuscar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 30px;
  width: 400px;
  border: 0px;
  height: 45px;
  margin-left: 70px;
  padding: 0 10px;

  input {
    width: 90%;
    border: 0px;
    outline: none;
  }
  button {
    cursor: pointer;
    background: transparent;
    border: 0px;
    height: 40px;
    svg {
      color: #ccc;
    }
    :hover {
      svg {
        color: #000;
      }
    }
  }
`;
