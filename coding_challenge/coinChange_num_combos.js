/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */


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



var coins = [1,2,3]
let amount = 4
console.log(coinChange(coins, amount))
