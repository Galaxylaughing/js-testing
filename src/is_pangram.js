const isPangram = function isPangram(text) {
  // build alphabet object for quick lookup
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetObj = {};
  for (const letter of alphabetString) {
    alphabetObj[letter] = false;
  }

  // mark every letter used by the text
  const lowercaseText = text.toLowerCase();
  for (const letter of lowercaseText) {
    if (alphabetObj[letter] === false) {
      alphabetObj[letter] = true;
    }
  }

  // if every letter in alphabet has been used,
  // return true
  // const values = Object.values(alphabetObj);
  // let textIsPangram = true;
  // for (const value of values) {
  //   if (value === false) {
  //     textIsPangram = false;
  //   }
  // }

  return Object.values(alphabetObj).every((value) => value === true);
  // return textIsPangram;
};

module.exports = isPangram;