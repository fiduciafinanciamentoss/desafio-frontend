import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Image = styled.img`
  margin-right: 20px;
  width: 200px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

  button {
    margin-right: 10px;
    background: #9c86d1;
    color: #fff;
    padding: 10px;
    border: 0;
    border-radius: 30px;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2)
      format("woff2");
  }
`;
