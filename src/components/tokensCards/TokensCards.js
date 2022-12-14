import React, { useEffect, useState } from "react";
import axios from "axios";

import Marquee from "react-fast-marquee";

import {
  TokenCardHeading,
  CardContainer,
  Card,
  CardImg,
  CardSymbol,
  CardData,
} from "./TokensCardStyle";

const TokensCards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=1y%20"
      )
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <>
      <TokenCardHeading>Top 30 by Market Cap</TokenCardHeading>
      <CardContainer>
        <Marquee speed={30} loop={0} gradientWidth={100}>
          {data.map((token) => {
            return (
              <Card>
                <CardImg>
                  <img src={token.image} alt="token symbol" />
                </CardImg>
                <CardSymbol>
                  <h3>{token.symbol}</h3>
                </CardSymbol>
                <CardData>
                  <p>
                    <strong>ATH:</strong> ${token.ath}
                  </p>
                  <p>
                    <strong>Price: </strong>${token.current_price}
                  </p>
                  <p>
                    <strong>From ATH:</strong>{" "}
                    {token.ath_change_percentage.toFixed(2)} %
                  </p>
                </CardData>
              </Card>
            );
          })}
        </Marquee>
      </CardContainer>
    </>
  );
};

export default TokensCards;
