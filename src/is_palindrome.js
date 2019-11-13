const reverseString = function(str) {
  let reversedString = '';
  for (const char of str) {
    reversedString = char + reversedString;
  }
  return reversedString;
}

const stripWhiteSpace = function(str) {
  let strippedString = '';
  for (const char of str) {
    if (char !== " ") {
      strippedString += char;
    }
  }
  return strippedString;
}

const isPalindrome = function isPalindrome(text) {
  // strip whitespace from text
  text = stripWhiteSpace(text);
  
  // create reversed version of text
  let reversedText = reverseString(text);

  return (reversedText === text);
};

module.exports = isPalindrome;
