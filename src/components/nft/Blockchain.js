import React from "react";

const Blockchain = ({ contractAddress, confirmedBlockchainId }) => {
  return (
    <p>
      {confirmedBlockchainId === "binance-smart-chain" ? (
        confirmedBlockchainId === "klay-token" ? (
          confirmedBlockchainId === "arbitrum-one" ? (
            confirmedBlockchainId === "optimistic-ethereum" ? (
              confirmedBlockchainId === "polygon-pos" ? (
                confirmedBlockchainId === "avalanche" ? (
                  confirmedBlockchainId === "ethereum"
                ) : (
                  <a
                    href={`https://bscscan.com/address/${contractAddress}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contractAddress}
                  </a>
                )
              ) : (
                <a
                  href={`https://scope.klaytn.com/account/${contractAddress}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {contractAddress}
                </a>
              )
            ) : (
              <a
                href={`https://arbiscan.io/address/${contractAddress}`}
                target="_blank"
                rel="noreferrer"
              >
                {contractAddress}
              </a>
            )
          ) : (
            <a
              href={`https://optimistic.etherscan.io/address/${contractAddress}`}
              target="_blank"
              rel="noreferrer"
            >
              {contractAddress}
            </a>
          )
        ) : (
          <a
            href={`https://polygonscan.com/address/${contractAddress}`}
            target="_blank"
            rel="noreferrer"
          >
            {contractAddress}
          </a>
        )
      ) : (
        <a
          href={`https://avascan.info/blockchain/all/address/${contractAddress}`}
          target="_blank"
          rel="noreferrer"
        >
          {contractAddress}
        </a>
      )}
    </p>
  );
};

export default Blockchain;
