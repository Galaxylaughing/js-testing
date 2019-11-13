const reverseString = function(str) {
  let reversedString = '';
  for (const char of str) {
    reversedString = char + reversedString;
  }
  return reversedString;
}

const isPalindrome = function isPalindrome(text) {
  // strip whitespace from text
  text = text.replace(/\s/g, '');
  
  // create reversed version of text
  let reversedText = reverseString(text);

  return (reversedText === text);
};

module.exports = isPalindrome;
