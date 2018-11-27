/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */


//  this is a coin change algorithm returning total number of possible permutation to make the amount
// for example, with given coin = [1,2], amount = 4
// possible permutations are [1,1,1,1],[1,1,2],[1,2,1],[2,1,1],[2,2] => 5
// please see coinChange_num_combos.js to find the unique sets.

var coinChange = function (coins, amount) {
  // let currentCoin = 0
  
  return combo(amount)
};


let combo = (amount) => {
  if (amount == 0) return 1;
  if (amount < 0 ) return 0;

  let nCombos = 0
  for ( let coin = 0; coin < coins.length; coin++){
    nCombos += combo(amount - coins[coin])
  }

  return nCombos
}



var coins = [1,2]
let amount = 4
console.log(coinChange(coins, amount))
