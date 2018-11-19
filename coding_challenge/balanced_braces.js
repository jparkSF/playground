/* Balanced parenthesis
 Input ["(())", "([)"]
 output ["YES", "NO"]
*/

function balanced(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let string = arr[i];
    result.push(helper(string));
  }
  return result;
}

function helper(string) {
  let stack = [];
  let hash = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (hash[char]) {
      stack.push(char);
    }
    else {
      if (stack.length == 0 || hash[stack.pop()] !== char)
        return "NO";
    }
  }

  let val = stack.length == 0 ? "YES" : "NO";
  return val;
}

console.log(balanced(["(())", "([)"]));
 // expect ["YES", "NO"]