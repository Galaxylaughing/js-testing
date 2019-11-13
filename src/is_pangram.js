// build alphabet object for quick lookup
const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
const alphabetObj = {};
for (const letter of alphabetString) {
  alphabetObj[letter] = false;
}

const isPangram = function isPangram(text) {
  return alphabetObj;
  // return true;
};

module.exports = isPangram;