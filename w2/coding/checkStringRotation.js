str1 = '123456'
str2 = '456123'
str3 = '123123'
str4 = '456123'

let checkRotation = (str1, str2) => {
  concat = str1 + str1
  if (concat.indexOf(str2) != -1) {
    return true
  } else {
    return false
  }
}


console.log(checkRotation(str1, str2)) // true
console.log(checkRotation(str3, str4)) // false