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
