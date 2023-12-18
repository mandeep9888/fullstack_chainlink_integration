// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract DataConsumerV3 {
    AggregatorV3Interface internal dataFeed_BTC_ETH;
    AggregatorV3Interface internal dataFeed_DAI_USD;
    AggregatorV3Interface internal dataFeed_ETH_USD;
    AggregatorV3Interface internal dataFeed_LINK_USD;

    constructor() {
        dataFeed_DAI_USD = AggregatorV3Interface(0x14866185B1962B63C3Ea9E03Bc1da838bab34C19); 
        dataFeed_ETH_USD = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
        dataFeed_LINK_USD = AggregatorV3Interface(0xc59E3633BAAC79493d908e63626716e204A45EdF);
        dataFeed_BTC_ETH = AggregatorV3Interface(0x5fb1616F78dA7aFC9FF79e0371741a747D2a7F22);
    }

    function getChainlinkDataFeedLatestAnswer(AggregatorV3Interface feed) internal view returns (int) {
        (,int answer,,,) = feed.latestRoundData();
        return answer;
    }

    function getDAI_USD() external view returns (int) {
        return getChainlinkDataFeedLatestAnswer(dataFeed_DAI_USD);
    }

    function getBTC_ETH() external view returns (int) {
        return getChainlinkDataFeedLatestAnswer(dataFeed_BTC_ETH);
    }

    function getETH_USD() external view returns (int) {
        return getChainlinkDataFeedLatestAnswer(dataFeed_ETH_USD);
    }

    function getLINK_USD() external view returns (int) {
        return getChainlinkDataFeedLatestAnswer(dataFeed_LINK_USD);
    }
}
