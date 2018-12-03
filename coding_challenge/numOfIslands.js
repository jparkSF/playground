/**
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands = (grid) => {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count++
        exploreLand(grid, i, j)
      }
    }
  }
  return count
}

const exploreLand = (grid, x, y) => {
  if (grid[x][y] === "1") {
    grid[x][y] = "0"
    if (x > 0 && (grid[x - 1][y] === "1"))
      exploreLand(grid, x - 1, y)
    if (y > 0 && (grid[x][y - 1] === "1"))
      exploreLand(grid, x, y - 1)
    if (x < grid.length - 1 && (grid[x + 1][y] === "1"))
      exploreLand(grid, x + 1, y)
    if (y < grid[0].length - 1 && (grid[x][y + 1] === "1"))
      exploreLand(grid, x, y + 1)
  }
  return
}


let input = [["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]
numIslands(input)

