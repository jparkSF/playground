var solvePart = function (equationPart) {
  var x = 0;
  var number = 0;
  var currentNumber = null;
  var sign = 1;

  for (var i = 0; i < equationPart.length; i++) {
    var char = equationPart[i];
    switch (char) {
      case '+':
      case '-':
        if (currentNumber >= 0) {
          number += sign * currentNumber;
          currentNumber = null;
        }
        sign = char === '-' ? -1 : 1;
        break;

      case 'x':
        x += sign * (currentNumber === null ? 1 : currentNumber);
        currentNumber = null;
        break;

      default:
        currentNumber = (currentNumber || 0) * 10 + parseInt(char);
        break;
    }
  }

  if (currentNumber) {
    number += sign * currentNumber;
  }

  return {
    x: x,
    number: number
  };
}

/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
  var equationParts = equation.split("=");
  var solvedPart1 = solvePart(equationParts[0]);
  var solvedPart2 = solvePart(equationParts[1]);
  var x = solvedPart1.x - solvedPart2.x;
  var number = solvedPart2.number - solvedPart1.number;

  if (x === 0) {
    return number === 0 ? "Infinite solutions" : "No solution";
  }

  return "x=" + (number / x);
};