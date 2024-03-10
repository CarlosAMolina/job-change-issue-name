function getStrDropLeadAndTrailWhitespaces(string) {
  return string.trim();
}

function getStrConsecutiveWhitespacesToOnlyOne(string) {
  return string.replace(/\s+/g, " ");
}

function getStrLowercase(string) {
  return string.toLowerCase();
}

// https://stackoverflow.com/questions/34913675/how-to-iterate-keys-values-in-javascript
function getStrReplaceNonAscii(string) {
  const replacements = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    ñ: "n",
  };
  let result = string;
  for (const [oldCharacter, newCharacter] of Object.entries(replacements)) {
    result = result.replace(oldCharacter, newCharacter);
  }
  return result;
}

function getStrDropCharactersInBrackets(string) {
  return string.replace(/\[.*?\]/g, "");
}

// https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call
function getStrDropUndesiredCharacters(string) {
  return string.replace(/\./g, " ");
}

export const exportedForTesting = {
  getStrDropLeadAndTrailWhitespaces,
  getStrConsecutiveWhitespacesToOnlyOne,
  getStrLowercase,
  getStrReplaceNonAscii,
  getStrDropCharactersInBrackets,
  getStrDropUndesiredCharacters,
};
