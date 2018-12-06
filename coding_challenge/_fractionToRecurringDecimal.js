function fractionToDecimal(numerator, denominator) {
  if (numerator === 0) return '0';
  let res = '';

  if (Math.sign(numerator) !== Math.sign(denominator)) res += '-';

  let n = Math.abs(numerator);
  const d = Math.abs(denominator);

  res += Math.floor(n / d);
  n %= d;

  if (n === 0) return res;

  res += '.';

  let map = {};

  while (n !== 0) {

    map[n] = true;
    // console.log(map)
    n *= 10;
    res += Math.floor(n / d);
    n %= d;


    const i = map[n];
    // console.log(map)
    // console.log(i) // repeat starting index
    // console.log(res.substr(0,i))
    if (i !== undefined) return res.substr(0, i + 1) + "(" + res.substr(i + 1) + ")";
  }

  return res;
}

console.log(fractionToDecimal(1, 7))