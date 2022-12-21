import React from "react";
import NFT from "../../nft/NFT";
import { HomeContainer } from "./HomeStyles";
import TokensCards from "../../tokensCards/TokensCards";

export const Home = () => {
  return (
    <HomeContainer>
      <TokensCards />
      <NFT />
    </HomeContainer>
  );
};
