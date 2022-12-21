import styled from "styled-components";

export const TokenCardsMainContainer = styled.div`
  height: 100%;
  width: 100vw;
`;

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
  margin: 25px 50px 0 50px;

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

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
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
  justify-content: start;
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

export const CoinGecko = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  margin: 0;
`;
export const CoinGeckoText = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  p {
    margin: 0;
    letter-spacing: 5px;
    font-size: 13px;
    font-weight: bold;
  }
  a {
    letter-spacing: 5px;
    font-size: 13px;
    font-weight: bold;
    color: green;
    text-decoration: none;
  }
  img {
    position: absolute;
    bottom: 1px;
    width: 25px;
  }
`;
export const CoinGeckoPlaceholder = styled.div`
  height: 100%;
  width: 100%;
`;
