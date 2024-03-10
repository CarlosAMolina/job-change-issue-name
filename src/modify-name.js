function getStrDropLeadAndTrailWhitespaces(string) {
  return string.trim();
}

function getStrConsecutiveWhitespacesToOnlyOne(string) {
  return string.replace(/\s+/g, " ");
}

function getStrLowercase(string) {
  return string.toLowerCase();
}

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

export const exportedForTesting = {
  getStrDropLeadAndTrailWhitespaces,
  getStrConsecutiveWhitespacesToOnlyOne,
  getStrLowercase,
  getStrReplaceNonAscii,
};
