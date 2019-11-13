// build alphabet object for quick lookup
const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
const alphabetObj = {};
for (const letter of alphabetString) {
  alphabetObj[letter] = false;
}

const isPangram = function isPangram(text) {
  // mark every letter used by the text
  for (const letter of text) {
    if (alphabetObj[letter] === false) {
      alphabetObj[letter] = true;
    }
  }

  // if every letter in alphabet has been used,
  // return true
  const values = Object.values(alphabetObj);
  let isPangram = true;
  for (const value of values) {
    if (value === false) {
      isPangram = false;
    }
  }

  return isPangram;
};

module.exports = isPangram;