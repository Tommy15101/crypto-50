import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: calc(50% - 40%);
  left: calc(50% - 40%);
  width: 80%;
  height: 80%;
  background-color: white;
  z-index: 3;
  border-radius: 10px;

  padding: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1250px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`;
export const ModalSymbol = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  img {
    height: 100px;
    width: 100px;
  }
  h2 {
    font-size: 30px;
  }
`;
export const ModalChart = styled.div`
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 3;
  grid-column-end: 4;

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px solid orange;
  border-radius: 20px;

  -webkit-box-shadow: 0px 0px 35px 4px #ffae00;
  -moz-box-shadow: 0px 0px 35px 4px #ffae00;
  box-shadow: 0px 0px 35px 4px #ffae00;

  background-color: aliceblue;
`;
export const ModalInfo = styled.div`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-column-end: 2;

  p {
    text-align: center;
    font-size: 15px;
  }
`;

export const CloseModal = styled.div`
  position: absolute;
  top: 23px;
  right: 30px;
  cursor: pointer;

  p {
    font-size: 20px;
    font-weight: bolder;
    &: hover {
      transform: scale(1.05);
    }
  }
`;
