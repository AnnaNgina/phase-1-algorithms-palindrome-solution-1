function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reverseWord = reverseString(word)
  return word === reverseWord
}



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("ab"));

  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("a"));
}

module.exports = isPalindrome;