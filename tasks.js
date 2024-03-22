// flattening Array Problem 1
console.log("Flattening Array Problem 1");
console.log(" ");

//flatArray = (array) => array.reduce((h1, h2) => h1.concat(h2));

function flatArray(arr) {
  return arr.reduce((h1, h2) => h1.concat(h2), []); //ask sir about returning array []
}

const array = [1, [[2, 3], 4], [5, 6], 7];
console.log(array);
flatArray(array);

// flattening Array Problem 2
console.log(" ");
console.log("Unique CHaracters Problem 2");
console.log(" ");

function uniqueCharacters(word) {
  for (let i = 0; i < word.length - 1; i++) {
    let letter = word.charAt(i);
    for (let j = i + 1; j < word.length; j++) {
      if (letter === word.charAt(j)) {
        return false;
      }
    }
  }
  return true;
}
console.log("Hammad");
console.log(uniqueCharacters("Hammad"));

console.log("Musa");
console.log(uniqueCharacters("Musa"));

// Anagram Problem 3
console.log(" ");
console.log("isAnagram Problem 3");
console.log(" ");

function isAnagram(word1, word2) {
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  if (word1.length != word2.length) {
    return false;
  } else {
    if (word1.split("").sort().join("") === word2.split("").sort().join("")) {
      //split will convert string into array and after sorting join will convert array into string
      return true;
    }
    return false;
  }
}
console.log("HammAd", "DAMHam");
console.log(isAnagram("HammAd", "DAMHam"));
console.log("Haseeb", "Naseeb");
console.log(isAnagram("Haseeb", "Naseeb"));

// Parentheses Problem 4
console.log(" ");
console.log("Parentheses Problem 4");
console.log(" ");

function isBalancedParenthesis(string){
  let openBracketCount  =0;
  let closeBracketCount =0;
  let openCurlyCount  =0;
  let closeCurlyCount =0;
  let openSquareCount  =0;
  let closeSquareCount =0;
  for(let i=0;i<string.length;i++){
    if(string[i]==='('){
      openBracketCount++;
    }
    else if(string[i]===')'){
      closeBracketCount++;
    }
    else if(string[i]==='{'){
      openCurlyCount++;
    }
    else if(string[i]==='}'){
      closeCurlyCount++;
    }
    else if(string[i]==='['){
      openSquareCount++;
    }
    else if(string[i]===']'){
      closeSquareCount++;
    }
  }
  if((openBracketCount==closeBracketCount) && (openCurlyCount == closeCurlyCount) && (openSquareCount == closeSquareCount)){
    return true;
  }
  return false;
}

console.log("[] [ }  {}");
console.log(isBalancedParenthesis("[] [ }  {}"));
console.log(" ");
console.log("[ { ( ) } ]");
console.log(isBalancedParenthesis("[(({})])"));

// Doubling Using Map Problem 5
console.log(" ");
console.log("Doubling Using Map Problem 5");
console.log(" ");



const array1=[2,6,3,4,9];

// let newArr = array1.map(function(value){
//   return value * value;
// })

const doubling = (number)=>number*2;
const newArr = array1.map(doubling);

console.log(array1);
console.log(newArr);

// make Immutable Problem 6
console.log(" ");
console.log("Making Immutable Problem 6");
console.log(" ");

makingImmutable=(obj)=> Object.freeze(obj);

const person={
  name1:"Hammad",
  age:21,
  degree:"Software Engineering"
} 
  console.log("Person age = ",person.age);
  console.log("Now I am changing the age from 21 to 40 before freezing");

  person.age=40;
  console.log("Person age = ",person.age);

  makingImmutable(person);

  console.log("Now I am changing the age from 40 to again 21 after making it immutable");
  person.age=22;
  console.log("Person age = ",person.age);
 




