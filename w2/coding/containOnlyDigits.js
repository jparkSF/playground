let containOnlyDigits = str => {
  
  const result = str.match(/\d+/g)

  if (result === null || result.length > 1 ){
    return false
  } else if ( result.length == 1 && result[0].length == str.length) {
    return true 
  } else {
    return false
  }


}
str1 = "123asdfasf12323123asdf"
str2 = "12312312345314134"
str3 = "lkjasldkjasdf"
console.log(containOnlyDigits(str1)) //false
console.log(containOnlyDigits(str2)) //true
console.log(containOnlyDigits(str3)) //false

