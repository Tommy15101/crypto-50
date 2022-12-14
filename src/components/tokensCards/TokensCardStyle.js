import styled from "styled-components";

export const TokenCardHeading = styled.h2`
  text-align: center;
  padding: 0;
  margin: 0;
  font-size: 25px;
  letter-spacing: 7px;
  color: orange;
  font-weight: 700;
`;

export const CardContainer = styled.section`
  height: 30vh;
  width: auto;
  overflow: hidden;
  border-radius: 20px;
  margin: 50px 50px 0 50px;

  display: flex;

  -webkit-box-shadow: 0px 0px 42px 17px #ffae00;
  -moz-box-shadow: 0px 0px 42px 17px #ffae00;
  box-shadow: 0px 0px 42px 17px #ffae00;
`;

export const Card = styled.div`
  height: 80%;
  min-width: 100px;
  max-width: 200px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;

  border: 2px solid orange;
  border-radius: 10px;

  margin: 10px 40px;
`;
export const CardImg = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  img {
    height: 25px;
  }
`;
export const CardSymbol = styled.div`
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 2;
  grid-column-end: 3;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    text-transform: uppercase;
    font-size: 15px;
  }
`;
export const CardData = styled.div`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-column-end: 3;

  p {
    font-size: 10px;
    text-align: center;
    padding: 0 10px;
    margin-bottom: 5px;
  }
`;
