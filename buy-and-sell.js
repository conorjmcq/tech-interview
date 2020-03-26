/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction (i.e., buy one and sell
 * one share of the stock), design an algorithm to find the maximum profit.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let lowestPrice = prices[0];
    for(let i = 1; i < prices.length; i++) {
        lowestPrice = Math.min(prices[i], lowestPrice);
        maxProfit = Math.max(prices[i] - lowestPrice, maxProfit);
    }
    return maxProfit;
};