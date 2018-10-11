cuisines = ["korean", "chinese", 'american', 'italian']
search = "e"
cuisines.filter(cuisine => {
  console.log(cuisine.indexOf(search))
  return cuisine.indexOf(search) !== -1
})

// ['korean','chinese','american']

