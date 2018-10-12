let countVowelsAndConsonants = str => {
  let vowels = 0
  let consonants = 0
  let space = 0

  str.split("").forEach(ch => {
    switch(ch) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        vowels += 1 ;
        break;

      case ' ':
        space += 1  
        break;
      default:
        consonants += 1
    }
  })

  console.log('Vowels: ', vowels)
  console.log('Consonants: ', consonants)
  console.log('Space: ', space)
  console.log("Total count: ", vowels + consonants + space)
  console.log("Length of string: ", str.length)
}

const str = "apple pineapple strawberry"
countVowelsAndConsonants(str)