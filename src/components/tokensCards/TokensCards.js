import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Modal from "../modal/Modal";

import Marquee from "react-fast-marquee";

import {
  TokenCardHeading,
  CardContainer,
  Card,
  CardImg,
  CardSymbol,
  CardData,
  TokenCardsMainContainer,
  CoinGecko,
  CoinGeckoText,
  CoinGeckoPlaceholder,
} from "./TokensCardStyle";

const TokensCards = () => {
  const [data, setData] = useState([]); // Data pulled in from coin gecko
  const [modal, setModal] = useState(true); // Open / Close the modal
  const [token, setToken] = useState(""); // The single token mapped from the onlick handler (open modal)
  const [chartData, setChartData] = useState([]); // Single tokens chart data

  function handleModal(mapToken) {
    toggleModal();
    renderToken(mapToken);
  }

  function toggleModal() {
    setModal(!modal);
  }

  const renderToken = async (mapToken) => {
    if (data.filter((mapToken) => mapToken.id === data.id)) {
      // Match the single token selected to the id in the data set
      console.log(mapToken.id);
      setToken(mapToken); // Store and set the matched token to state

      await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${mapToken.id}/market_chart?vs_currency=usd&days=max`
        ) // Get the price data from our selected token
        .then(function (response) {
          const chartPrices = response.data.prices.map((value) => ({
            x: value[0],
            y: value[1].toFixed(2),
          }));
          setChartData(chartPrices); // Set the cleaned prices data to state
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=1y%20"
      )
      .then(function (response) {
        // handle success
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
    <TokenCardsMainContainer>
      {modal ? (
        <Fragment>
          <TokenCardHeading>Top 30 by Market Cap</TokenCardHeading>
          <CoinGecko>
            <CoinGeckoPlaceholder></CoinGeckoPlaceholder>
            <CoinGeckoText>
              <p>
                Powered by{" "}
                <a
                  href="https://www.coingecko.com/"
                  alt="coin gecko"
                  rel="norefferer"
                >
                  CoinGecko
                </a>
                <a
                  href="https://www.coingecko.com/"
                  alt="coin gecko"
                  rel="norefferer"
                >
                  <img src="gecko.png" alt="gecko" />
                </a>
              </p>
            </CoinGeckoText>
          </CoinGecko>
          <CardContainer>
            <Marquee
              speed={30}
              loop={0}
              gradientWidth={100}
              pauseOnHover={true}
            >
              {data.map((mapToken, key) => {
                return (
                  <Card key={key} onClick={() => handleModal(mapToken)}>
                    <CardImg>
                      <img src={mapToken.image} alt="token symbol" />
                    </CardImg>
                    <CardSymbol>
                      <h3>{mapToken.symbol}</h3>
                    </CardSymbol>
                    <CardData>
                      <p>
                        <strong>ATH:</strong> ${mapToken.ath}
                      </p>
                      <p>
                        <strong>Price: </strong>${mapToken.current_price}
                      </p>
                      <p>
                        <strong>From ATH:</strong>{" "}
                        {mapToken.ath_change_percentage.toFixed(2)} %
                      </p>
                    </CardData>
                  </Card>
                );
              })}
            </Marquee>
          </CardContainer>
        </Fragment>
      ) : (
        <Modal modal={toggleModal} token={token} chartData={chartData} />
      )}
    </TokenCardsMainContainer>
  );
};

export default TokensCards;
