import React from "react";
import {
  ModalBackdrop,
  ModalContainer,
  ModalSymbol,
  ModalChart,
  ModalInfo,
} from "./ModalStyles";
import moment from "moment";

import TokenChart from "../tokenChart/TokenChart";

const Modal = ({ modal, token, chartData }) => {
  const allTimeHighDateFormatted = moment(token.ath_date).format("MMM Do YYYY");

  return (
    <>
      <ModalBackdrop onClick={modal} />
      <ModalContainer>
        <ModalSymbol>
          <img src={token.image} alt="token" />
          <h2>{token.name}</h2>
        </ModalSymbol>
        <ModalChart>
          <TokenChart chartData={chartData} />
        </ModalChart>
        <ModalInfo>
          <p>
            <strong>Market Cap Rank:</strong> {token.market_cap_rank}
          </p>
          <p>
            <strong>Market Cap:</strong> {token.market_cap}
          </p>
          <br />
          <p>
            <strong>Total Supply:</strong> {token.total_supply}
          </p>
          <p>
            <strong>Circulating Supply:</strong> {token.circulating_supply}
          </p>
          <br />
          <p>
            <strong>All Time High:</strong> {token.ath}
          </p>
          <p>
            <strong>All Time High Date:</strong> {allTimeHighDateFormatted}
          </p>
          <br />
        </ModalInfo>

        {/* <CloseModal onClick={modal}>
          <p>X</p>
        </CloseModal> */}
      </ModalContainer>
    </>
  );
};

export default Modal;
