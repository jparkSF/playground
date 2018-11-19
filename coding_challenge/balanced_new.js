let isBalanced = (arr) => {
  let result_arr = []
  for(let i = 0; i < arr.length; i++){
    let str = arr[i]
    let stack = []

    let lib = {
      '(': ')',
      '{': '}',
      '[': ']'
    }

    for(let j = 0; j < str.length; j++) {
      let curr_char = str[j]

      if(lib[curr_char]){
        stack.push(curr_char)
      } else {
        if (stack.length == 0 || lib[stack.pop()] != curr_char) {
          result_arr.push("NO")
          return result_arr
        }
        
      }
    }

    result_arr.push(stack.length == 0 ? "YES" : "NO")
  }

  return result_arr
}


console.log(isBalanced(["([)", "(())"]));
 // expect ["YES", "NO"]