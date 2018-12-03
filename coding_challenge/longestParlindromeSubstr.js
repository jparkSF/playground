/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";
  let cur = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < i + 2; j++) {
      let left = i;
      let right = j;
      while (s[left] && s[left] === s[right]) {
        cur = s.substring(left, right + 1);
        if (cur.length > res.length) res = cur;
        left--;
        right++;
      }
    }
  }
  return res;
};

// var longestPalindrome = function (s) {
//   let longestPal = "";
//   let leap = 1;
//   let pal = "";
//   let center;

//   if (s.length === 1) {
//     return s[0];
//   }

//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] && s[i + 1] && s[i] === s[i + 1]) {
//       center = center ? center + s[i] : s[i] + s[i + 1];
//       leap++;

//       if (i !== s.length - 2) {
//         continue;
//       } else {
//         pal = center;
//       }
//     }

//     let k = 1;
//     while (true) {
//       if (!pal) {
//         pal = center ? center : s[i];
//       }

//       if (s[i + k] && s[i - leap] && s[i + k] === s[i - leap]) {
//         pal = s[i - leap] + pal + s[i + k];
//         leap++;
//         k++;
//         continue;
//       }

//       break;
//     }

//     if (pal.length > longestPal.length) {
//       longestPal = pal;
//     }

//     pal = "";
//     leap = 1;
//     center = s[i + 1];
//   }

//   return longestPal
// };

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.