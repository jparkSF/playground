/* Balanced parenthesis
 Input ["(())", "([)"]
 output ["YES", "NO"]
*/

let isBalanced = values => {
  let result_arr = [];
  for (let i = 0; i < values.length; i++) {
    let string = values[i];
    result_arr.push(validator(string));
  }
  return result_arr;
}

let validator = string => {
  // let stack = [];
  // let lib = {
  //   '(': ')',
  //   '{': '}',
  //   '[': ']'
  // };

  // for (let i = 0; i < string.length; i++) {
  //   let curr_char = string[i];
  //   if (lib[curr_char]) {
  //     stack.push(curr_char);
  //   }
  //   else {
  //     if (stack.length == 0 || lib[stack.pop()] !== curr_char)
  //       return "NO";
  //   }
  // }

  // return stack.length == 0 ? "YES" : "NO";
  // // return val;


  
    let obj = {
      '{': '}',
      '(': ')',
      '[': ']'
    }
    let stack = []
    for (let i = 0; i < string.length; i++) {
      let cur = string.charAt(i)
      if (obj[cur] != undefined) {
        stack.push(obj[cur])
      } else {
        let temp = stack.pop()
        if (cur != temp) {
          return false
        }
      }

    }
    return stack.length == 0
}

console.log(isBalanced(["(())", "([)"]));
 // expect ["YES", "NO"]