/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */


// To make the unique combinations of coins, we need to add currentCoin to the existing algorithm to track current index and value of the iteration
// so we build on top of coinChange_num_permutation.js

// instead of starting each new iteration from 0, we start from currentCoin that is passed in from higher stack call
// then the result returns 3 instead of 5 because of following combinations created:
// [1,1,1,1],[1,1,2],[2,2] => 3


var coinChange = function (coins, amount) {
  let currentCoin = 0
  return combo(coins, amount, currentCoin)
};


let combo = (coins, amount, currentCoin) => {
  if (amount == 0) return 1;
  if (amount < 0) return 0;

  let nCombos = 0
  for (let coin = currentCoin; coin < coins.length; coin++) {
    nCombos += combo(coins, amount - coins[coin], coin)
  }

  return nCombos
}




console.log(coinChange([1, 2, 5], 4)) // #3
