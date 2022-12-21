import React, { useEffect, useState } from "react";
import {
  NFTMainContainer,
  NFTContainer,
  NFTUserSelectOne,
  NFTUserSelectTwo,
  NFTResults,
  NFTResultsInfo,
  NFTResultsHeader,
  NFTResultsTitle,
  NFTResultsData,
} from "./NFTStyled";
import axios from "axios";
import Blockchain from "./Blockchain";

const News = () => {
  // BLOCKCHAIN STATE //
  const [blockchainList, setBlockchainList] = useState(); // The main list of blockchains
  const [selectedBlockchainId, setSelectedBlockchainId] = useState(); // The id of the blockchain selected by user
  const [confirmedBlockchainId, setConfirmedBlockchainId] = useState(); // The confirmed ID after matching (selected / main list) ids
  // NFT STATE //
  const [nftList, setNftList] = useState(); // The NFT list from the selected blockchain
  const [selectedNftId, setSelectedNftId] = useState(); // The id of the NFT selected by user
  const [confirmedNft, setConfirmedNft] = useState();

  const [floorPrice, setFloorPrice] = useState();
  const [contractAddress, setContactAddress] = useState();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [totalSupply, setTotalSupply] = useState();
  const [percentChange, setPercentChange] = useState();

  // The Main API call for list of NFT Compatable blockchains
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/asset_platforms?filter=nft")
      .then(function (response) {
        setBlockchainList(response.data); // Set main list of blockchains
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  // This receives the id from the desired blockchain as selected by user
  const handleSelect = (event) => {
    const blockchainId = event.target.value;
    setSelectedBlockchainId(event.target.value); // Sets the selected blockchains id
    handleSingleBlockchain(blockchainId);
  };
  // This receives the id from the desired NFT as selected by user
  const handleNftSelect = (event) => {
    const nftId = event.target.value;
    setSelectedNftId(event.target.value);
    handleSingleNft(nftId);
  };

  const handleSingleNft = (nftId) => {
    if (nftList.filter((nftId) => nftId === nftList.id)) {
      setConfirmedNft(nftId);
      console.log(confirmedNft);
    }
    axios
      .get(
        `https://api.coingecko.com/api/v3/nfts/${confirmedNft}
    `
      )
      .then(function (response) {
        setContactAddress(response.data.contract_address);
        setImage(response.data.image.small);
        setFloorPrice(response.data.floor_price["usd"].toFixed(2));
        setName(response.data.name);
        setTotalSupply(response.data.total_supply);
        setPercentChange(
          response.data.floor_price_in_usd_24h_percentage_change.toFixed(2)
        );
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      })
      .then(function () {});
  };

  // Checks the id of the selected blockchain against the blockchain list in state
  // Then API calls to get that NFTs specific data
  const handleSingleBlockchain = (blockchainId) => {
    if (
      blockchainList.filter(
        (blockchainId) => blockchainId === blockchainList.id
      )
    ) {
      setConfirmedBlockchainId(blockchainId);
      console.log(blockchainId);
    }
    axios
      .get(
        `https://api.coingecko.com/api/v3/nfts/list?asset_platform_id=${confirmedBlockchainId}`
      )
      .then(function (response) {
        setNftList(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      })
      .then(function () {});
  };

  return (
    <NFTMainContainer>
      <NFTContainer>
        <NFTUserSelectOne>
          {/* SELECT BLOCKCHAIN */}
          <h5>Select Blockchain</h5>
          <select name="nft" id="nft" onChange={handleSelect}>
            <option value="disabled">Blockchain</option>
            {blockchainList &&
              blockchainList.map((blockchain, key) => {
                return (
                  <option key={key} value={blockchain.id}>
                    {blockchain.name}
                  </option>
                );
              })}
          </select>
        </NFTUserSelectOne>
        {/* SELECT NFT PROJECT */}
        <NFTUserSelectTwo>
          <h5>Select NFT Project</h5>
          <select onChange={handleNftSelect}>
            <option value="disabled">NFT Project</option>
            {nftList &&
              nftList.map((data, key) => {
                return (
                  <option key={key} value={data.id}>
                    {data.name}
                  </option>
                );
              })}
          </select>
        </NFTUserSelectTwo>

        <NFTResults>
          {confirmedNft ? (
            <>
              <NFTResultsHeader>
                <p>
                  <strong>Project Name: </strong>
                  {name}
                </p>
                {image ? (
                  <img src={image} alt="nft symbol" />
                ) : (
                  "No Image Available"
                )}
              </NFTResultsHeader>
              <NFTResultsInfo>
                <NFTResultsTitle>
                  <p>
                    <strong>Contract Address: </strong>
                  </p>
                  <p>
                    <strong>Total Supply: </strong>
                  </p>
                  <p>
                    <strong>24hr % change: </strong>
                  </p>
                  <p>
                    <strong>Floor Price USD:</strong>
                  </p>
                </NFTResultsTitle>

                <NFTResultsData>
                  <Blockchain
                    contractAddress={contractAddress}
                    confirmedBlockchainId={confirmedBlockchainId}
                  />
                  <p>{totalSupply ? totalSupply : "Not Available"}</p>
                  <p>{percentChange}%</p>
                  <p>${floorPrice}</p>
                </NFTResultsData>
              </NFTResultsInfo>
            </>
          ) : (
            <p>
              Please select a blockchain and NFT project to see the details.
              Peace.
            </p>
          )}
        </NFTResults>
      </NFTContainer>
    </NFTMainContainer>
  );
};

export default News;
