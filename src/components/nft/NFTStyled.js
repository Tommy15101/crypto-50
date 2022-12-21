import styled from "styled-components";

export const NFTMainContainer = styled.div`
  width: 100vw;
  height: 80%;
  display: flex;
  align-items: start;
  justify-content: center;
  margin-top: 50px;
`;

export const NFTContainer = styled.div`
  height: 30vh;
  width: 90%;
  padding: 0;
  background-color: orange;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 10px;
`;

export const NFTUserSelectOne = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 20px;
  border-bottom: 2px solid white;

  h5 {
    padding-top: 5px;
  }

  select {
    width: 80%;
    max-width: 80%;
    height: 32px;
    padding: 5px;
    margin-bottom: 5px;
    color: orange;
    font-weight: bold;
    background-color: aliceblue;
    border-radius: 6px;
    &:focus {
      outline: none;
    }
  }
`;

export const NFTUserSelectTwo = styled.div`
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 2;
  grid-column-end: 4;

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 20px;
  border-bottom: 2px solid white;

  h5 {
    padding-top: 5px;
  }

  select {
    width: 80%;
    max-width: 80%;
    height: 32px;
    padding: 5px;
    margin-bottom: 5px;
    color: orange;
    font-weight: bold;
    background-color: aliceblue;
    border-radius: 6px;
    &:focus {
      outline: none;
    }
  }
`;

export const NFTResults = styled.div`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-column-end: 4;

  background-color: red;
  width: 100%;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const NFTResultsHeader = styled.div`
  width: 100%;
  height: 100%;

  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: orange;

  img {
    width: 100px;
  }
`;

export const NFTResultsInfo = styled.div`
  width: 100%;
  height: 100%;

  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 2;
  grid-column-end: 4;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: orange;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;
export const NFTResultsTitle = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;

  display: flex;
  flex-direction: column;
  align-items: end;

  width: 100%;
  height: 100%;
`;
export const NFTResultsData = styled.div`
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 2;
  grid-column-end: 4;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;

  p {
    padding-left: 20px;
  }

  a {
    padding-left: 20px;
    padding-bottom: 15px;
  }
`;

export const NFTNoProjectSelected = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-column-end: 4;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: white;
    font-size: 25px;
  }
`;
export const Note = styled.div`
  font-size: 16px;

  a {
    color: green;
  }
`;
