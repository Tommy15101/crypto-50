import React from "react";
import { NFTResultsData } from "./NFTStyled";

const Blockchain = ({ contractAddress, confirmedBlockchainId }) => {
  if (confirmedBlockchainId === "binance-smart-chain") {
    return (
      <NFTResultsData>
        <a
          href={`https://bscscan.com/address/${contractAddress}`}
          target="_blank"
          rel="noreferrer"
        >
          View On Binance Explorer
        </a>
      </NFTResultsData>
    );
  } else if (confirmedBlockchainId === "klay-token") {
    return (
      <NFTResultsData>
        <a
          href={`https://scope.klaytn.com/account/${contractAddress}`}
          target="_blank"
          rel="noreferrer"
        >
          View On Klaytn Explorer
        </a>
      </NFTResultsData>
    );
  } else if (confirmedBlockchainId === "arbitrum-one") {
    return (
      <NFTResultsData>
        <a
          href={`https://arbiscan.io/address/${contractAddress}`}
          target="_blank"
          rel="noreferrer"
        >
          View On Arbiscan Explorer
        </a>
      </NFTResultsData>
    );
  } else if (confirmedBlockchainId === "optimistic-ethereum") {
    return (
      <NFTResultsData>
        <a
          href={`https://optimistic.etherscan.io/address/${contractAddress}`}
          target="_blank"
          rel="noreferrer"
        >
          View On Optimistic Explorer
        </a>
      </NFTResultsData>
    );
  } else if (confirmedBlockchainId === "polygon-pos") {
    return (
      <NFTResultsData>
        <a
          href={`https://polygonscan.com/address/${contractAddress}`}
          target="_blank"
          rel="noreferrer"
        >
          View On Polysgon Explorer
        </a>
      </NFTResultsData>
    );
  } else if (confirmedBlockchainId === "avalanche") {
    return (
      <NFTResultsData>
        <a
          href={`https://avascan.info/blockchain/all/address/${contractAddress}`}
          target="_blank"
          rel="noreferrer"
        >
          View On Avalanche Explorer
        </a>
      </NFTResultsData>
    );
  } else {
    return (
      <NFTResultsData>
        <a
          href={`https://etherscan.io/address/${contractAddress}`}
          target="_blank"
          rel="noreferrer"
        >
          View On Ethereum Explorer
        </a>
      </NFTResultsData>
    );
  }
};

export default Blockchain;
