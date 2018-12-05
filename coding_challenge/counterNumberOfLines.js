var temp = "This is a string.\n and you are done";
var count = (temp.match(/\n/g) || []).length;
console.log(count);