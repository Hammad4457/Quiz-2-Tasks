// flattening Array Problem 1
console.log("Flattening Array Problem 1");
console.log(" ");

const array = [1, [[2, 3], 4], [5, 6], 7];
console.log(array);
console.log(array.flat(2));

//flatArray = (array) => array.reduce((h1, h2) => h1.concat(h2));

function flatArray(arr) {
  return arr.reduce((h1, h2) => h1.concat(h2), []); //ask sir about returning array []
}
flatArray(array);
