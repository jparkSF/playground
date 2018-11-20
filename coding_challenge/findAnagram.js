/* Find min difference to make anagram
Input: 2 arrays. arr1 = ["a", "be", "cde"], arr2 = ["bb", "bc", "efg"]
output: [-1,1,2]
*/

let makeAnagram = (arr1, arr2) => {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(helperAnagram(arr1[i], arr2[i]));
  }
  return result;
}

function helperAnagram(s1, s2) {
  if (s1.length != s2.length) {
    return -1;
  }

  let hash = {};
  let sum = 0;
  console.log("new")
  for (let char of s1) {
    if (!hash[char]) {
      hash[char] = 1;
    }
    else {
      hash[char] += 1;
    }
    console.log(hash)
  }
  console.log(hash)
  for (let char of s2) {
    if (hash[char]) {
      hash[char] -= 1;
    }
    console.log(hash)
  }
  console.log(hash)

  for (let val of Object.values(hash)) {
    sum += val;
  }


  return sum;
}
console.log(makeAnagram(arr1 = ["a", "be", "cde"], arr2 = ["bb", "bc", "efg"]))