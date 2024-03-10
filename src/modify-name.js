function getStrDropLeadAndTrailWhitespaces(string) {
  return string.trim();
}

function getStrConsecutiveWhitespacesToOnlyOne(string) {
  return string.replace(/\s+/g, " ");
}

function getStrLowercase(string) {
  return string.toLowerCase();
}

// https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call
function getStrRemoveNonAscii(string) {
  const replacements = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    ñ: "n",
  };
  return string.replace(/[áéíóúñ]/g, (matched) => replacements[matched]);
}

export const exportedForTesting = {
  getStrDropLeadAndTrailWhitespaces,
  getStrConsecutiveWhitespacesToOnlyOne,
  getStrLowercase,
  getStrRemoveNonAscii,
};
