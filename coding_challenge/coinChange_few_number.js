/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */


const coinChange = (coins, amount) => {
  coins.sort((a, b) => b - a)

  let res = Infinity
  Con
  const run = (k, amt, ct) => {
    const coin = coins[k]
    const maxTimes = Math.floor(amt / coin)

    if (k === coins.length - 1) {
      if (amt % coin === 0) {
        res = Math.min(res, ct + maxTimes)
      }
    } else {
      for (let i = maxTimes; i >= 0 && ct + i < res; i--) {
        run(k + 1, amt - coin * i, ct + i)
      }
    }
  }

  run(0, amount, 0)

  return res === Infinity ? -1 : res
}