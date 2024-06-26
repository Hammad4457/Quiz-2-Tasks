// flattening Array Problem 1
console.log("Flattening Array Problem 1");
console.log(" ");

function flatArray(arr) {
  let flattenArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray = flattenArray.concat(flatArray(arr[i]));
    } else {
      flattenArray.push(arr[i]);
    }
  }
  return flattenArray;
}

const array = [1, [[2, 3], 4], [5, 6], [7, 8], 9];
console.log(array);
console.log(flatArray(array));

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

function isBalance(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      stack.push(str[i]);
    } else if (str[i] == ")") {
      if (stack.length === 0 || stack.pop() !== "(") return false;
    }
  }
  return stack.length === 0;
}

console.log("()(()())");
console.log(isBalance("()(()())"));
console.log("())()");
console.log(isBalance("())()"));

// function isBalancedParenthesis(string) {
//   let openBracketCount = 0;
//   let closeBracketCount = 0;
//   let openCurlyCount = 0;
//   let closeCurlyCount = 0;
//   let openSquareCount = 0;
//   let closeSquareCount = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "(") {
//       openBracketCount++;
//     } else if (string[i] === ")") {
//       closeBracketCount++;
//     } else if (string[i] === "{") {
//       openCurlyCount++;
//     } else if (string[i] === "}") {
//       closeCurlyCount++;
//     } else if (string[i] === "[") {
//       openSquareCount++;
//     } else if (string[i] === "]") {
//       closeSquareCount++;
//     }
//   }
//   if (
//     openBracketCount == closeBracketCount &&
//     openCurlyCount == closeCurlyCount &&
//     openSquareCount == closeSquareCount
//   ) {
//     return true;
//   }
//   return false;
// }

// console.log("[] [ }  {}");
// console.log(isBalancedParenthesis("[] [ }  {}"));
// console.log(" ");
// console.log("[ { ( ) } ]");
// console.log(isBalancedParenthesis("[(({})])"));

// Doubling Using Map Problem 5
console.log(" ");
console.log("Doubling Using Map Problem 5");
console.log(" ");

const array1 = [2, 6, 3, 4, 9];

// let newArr = array1.map(function(value){
//   return value * value;
// })

const doubling = (number) => number * 2;
const newArr = array1.map(doubling);

console.log(array1);
console.log(newArr);

// make Immutable Problem 6
console.log(" ");
console.log("Making Immutable Problem 6");
console.log(" ");

makingImmutable = (obj) => Object.freeze(obj);

const person = {
  name1: "Hammad",
  age: 21,
  degree: "Software Engineering",
};
console.log("Person age = ", person.age);
console.log("Now I am changing the age from 21 to 40 before freezing");

person.age = 40;
console.log("Person age = ", person.age);

makingImmutable(person);

console.log(
  "Now I am changing the age from 40 to again 21 after making it immutable"
);
person.age = 22;
console.log("Person age = ", person.age);

// Fetch Data Through Api Problem 7
// console.log(" ");
// console.log("Fetch Data Through Api Problem 7");
// console.log(" ");

//   let myPromise = new Promise((res,rej)=>{
//     let p = fetch("https://dummyjson.com/products1");

//     p.then((value)=>{
//       if(value.ok){
//       console.log("Data is fetched Successfully")
//       }
//       return value.json();
//     }).then((data)=>{
//       return res(data);
//     }).catch((err)=>{
//       console.log("Error Occured")
//       return rej("Error Occured during data fetching");
//     })
//    })
//    myPromise.then((message)=>{
//     console.log(message);
//    }).catch((error)=>{
//     console.log(error);
//    })

// Delayed Greeting Problem 8
console.log(" ");
console.log("Delayed Greeting Problem 8");
console.log(" ");

function delayGreeting(callback, seconds) {
  setTimeout(callback, seconds);
}
function hi() {
  console.log("Hi!!");
}
delayGreeting(hi, 4000);

// Sum Array with Reduce Problem 9
console.log(" ");
console.log("Sum Array with Reduce Problem 9");
console.log(" ");

const array2 = [2, 3, 4, 3, 2, 1];

const sumArray = function (array) {
  return array.reduce((h1, h2) => {
    return h1 + h2;
  });
};

console.log(sumArray(array2));

// Depp Copies Problem 10
console.log(" ");
console.log("Deep Copy Problem 10");
console.log(" ");

const Employee = {
  names: {
    first: "Hammad",
    last: "Khalil",
  },
  age: 21,
  degree: "Software Engineering",
};

function deepCopy(obj) {
  let deepObj = JSON.parse(JSON.stringify(obj));
  deepObj.names.first = "Ali";
  return deepObj;
}

//   Employee.names.first = "Hamza";
console.log(Employee);
console.log(deepCopy(Employee));
