import React, { useEffect, useState, useCallback } from "react";
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
  NFTNoProjectSelected,
  Note,
} from "./NFTStyled";
import axios from "axios";
import Blockchain from "./Blockchain";

const News = () => {
  ////////////////////////////////////////////
  ///////////// BLOCKCHAIN STATE /////////////
  ////////////////////////////////////////////
  const [blockchainList, setBlockchainList] = useState([]); // The main list of blockchains
  const [confirmedBlockchainId, setConfirmedBlockchainId] = useState([]); // The confirmed ID after matching (selected / main list) ids
  ////////////////////////////////////////////
  //////////////// NFT STATE /////////////////
  ////////////////////////////////////////////
  const [nftList, setNftList] = useState(); // The NFT list from the selected blockchain
  const [confirmedNft, setConfirmedNft] = useState();
  ////////////////////////////////////////////
  ////////////SINGLE NFT STATE ///////////////
  ////////////////////////////////////////////
  const [floorPrice, setFloorPrice] = useState();
  const [contractAddress, setContactAddress] = useState();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [totalSupply, setTotalSupply] = useState();
  const [percentChange, setPercentChange] = useState();

  ////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////
  //////////// RESPONSES FROM USER ///////////
  ////////////////////////////////////////////
  // This receives the id from the desired blockchain as selected by user
  const handleSelect = (event) => {
    handleSingleBlockchain(event.target.value);
  };
  // This receives the id from the desired NFT as selected by user
  const handleNftSelect = (event) => {
    handleSingleNft(event.target.value);
  };

  ////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////
  //////////// ID CHECS CONFIRM //////////////
  ////////////////////////////////////////////
  // Checks the id of the selected blockchain against the blockchain list in state
  // Then API calls to get that NFTs specific data
  const handleSingleBlockchain = async (blockchainId) => {
    console.log("BLOCKCHAIN BEFORE FILTER: ", blockchainId);
    console.log("FILTERING...");
    if (
      blockchainList.filter(
        (blockchainId) => blockchainId === blockchainList.id
      )
    ) {
      console.log("FILTER COMPLETE...");
      setConfirmedBlockchainId(blockchainId);
      console.log("FILTERED BLOCKCHAIN after: ", blockchainId);
    }
  };
  const handleSingleNft = async (nftId) => {
    console.log("NFT BEFORE FILTER: ", nftId);
    console.log("FILTERING...");
    if (nftList.filter((nftId) => nftId === nftList.id)) {
      console.log("FILTER COMPLETE");
      setConfirmedNft(nftId);
      console.log("FILTERED NFT after: ", nftId);
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////
  /////////// CALLBACKS - API CALLS //////////
  ////////////////////////////////////////////
  useEffect(() => {
    // const handleBlockchainApi = () => {
    console.log("API CALL FROM CONFIRMED STATE: ", confirmedBlockchainId);
    axios
      .get(
        `https://api.coingecko.com/api/v3/nfts/list?asset_platform_id=${confirmedBlockchainId}`
      )
      .then(function (response) {
        setNftList(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
    // };
  }, [confirmedBlockchainId]);

  useEffect(() => {
    console.log("API CALL FROM CONFIRMED STATE: ", confirmedNft);
    axios
      .get(`https://api.coingecko.com/api/v3/nfts/${confirmedNft}`)
      .then(function (response) {
        setContactAddress(response.data.contract_address);
        setImage(response.data.image.small);
        setFloorPrice(response.data.floor_price["usd"].toFixed(2));
        setName(response.data.name);
        setTotalSupply(response.data.total_supply);
        setPercentChange(
          response.data.floor_price_in_usd_24h_percentage_change.toFixed(2)
        );
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, [confirmedNft]);

  ////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////
  ////////////// MAIN API CALL ///////////////
  ////////////////////////////////////////////
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/asset_platforms?filter=nft")
      .then(function (response) {
        // handle success
        setBlockchainList(response.data); // Set main list of blockchains
        console.log("MAIN NFT DATA:", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <NFTMainContainer>
      <NFTContainer>
        <NFTUserSelectOne>
          {/* SELECT BLOCKCHAIN */}
          <h5>Select Blockchain</h5>
          <select name="nft" id="nft" onChange={handleSelect}>
            {/* <option value="selected" disabled>
              Blockchain
            </option> */}
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
            {/* <option value="selected" disabled>
              NFT Project
            </option> */}
            {nftList &&
              nftList.map((nft, key) => {
                return (
                  <option key={key} value={nft.id}>
                    {nft.name}
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
            <NFTNoProjectSelected>
              <p>
                Please select a blockchain and NFT project to see the details.
                Peace.
              </p>
              <Note>
                This NFT sections data is in beta as per {""}
                <a href="https://www.coingecko.com/">coin gecko</a>
              </Note>
              <Note>(This project is independant of coin gecko)</Note>
            </NFTNoProjectSelected>
          )}
        </NFTResults>
      </NFTContainer>
    </NFTMainContainer>
  );
};

export default News;
