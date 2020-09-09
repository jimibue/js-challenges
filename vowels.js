// Create a function that will receive a string of text of any length and return the  Return the vowels used and the number.

// Bonus:
// Return the vowels used and the number of times {a:0, e:}.

function countVowels(str) {
  vowelCount = { a: 0, e: 0, i: 0, u: 0 };

  // I want to go each char and update my object
  // go throw each char in my string and check if it is vowel
  str.split("").forEach(function (char) {
    console.log(char);
    // check to see if thing is  vowel
    if (char == "a" || char == "e" || char == "i" || char == "o") {
      vowelCount[char]++;
    }
  });

  return vowelCount;
}

//
vowels = countVowels("aaaeesdfffd");
console.log(vowels);

// a function that takes a string of any length and returns {a:2 b:3}
// function countVowels(str) {
//   let vowelHash = { a: 0, e: 0, i: 0, o: 0, u: 0 };
//   return vowelHash;
// }

// a function that takes a string of any length and returns {a:2 b:3}
// function countVowels(str) {
//   let vowelHash = { a: 0, e: 0, i: 0, o: 0, u: 0 };

//   //I know there is a way to split a string and join it into an array
//   // so I can do a .each or i could a for loop index
//   str.split("");

//   //things that might help
//   // 'abc'[0] => 'a'
//   // 'abc'.charAt(0) => 'a'
//   // 'abc'.split('') =>[ 'a', 'b', 'c' ]

//   // x = {a:0}
//   // x.a++
//   // console.log(x) => {a:i}

//   return vowelHash;
// }
