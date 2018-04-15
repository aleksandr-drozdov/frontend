
var string = "frontend";
console.log("String: ", string);
function lastSymbol() {
  return string.slice(-1);
}

console.log("1)");
console.log('The last symbol in string is:', lastSymbol(string));

function WithoutLast() {
  return string.slice(0, string.length-1);
}

console.log("2)");
console.log('String without last symbol: ', WithoutLast(string));

function StringReverse() {
  return string.split("").reverse().join("");
}

console.log("3)");
console.log('Reverse of string: ', StringReverse(string));


