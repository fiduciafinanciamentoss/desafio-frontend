import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 60px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
  width: 70%;
  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
