export function getStrModified(string) {
  let result = string;
  result = getStrDropLeadAndTrailWhiteSpaces(result);
  result = getStrDropCharactersInBrackets(result);
  result = getStrIssuerRequiredPartsAsLowercase(result);
  result = getStrReplaceNonAscii(result);
  result = getStrDropUndesiredCharacters(result);
  result = getStrConsecutiveWhiteSpacesToOnlyOne(result);
  result = getStrDropLeadAndTrailWhiteSpaces(result);
  result = getStrReplaceWhiteSpaces(result);
  return result;
}

function getStrDropLeadAndTrailWhiteSpaces(string) {
  return string.trim();
}

function getStrConsecutiveWhiteSpacesToOnlyOne(string) {
  return string.replace(/\s+/g, " ");
}

function getStrIssuerRequiredPartsAsLowercase(string) {
  const issuerId = getStrIssuerId(string);
  const noIssuerId = getStrWithoutIssuerId(string);
  return issuerId.concat(" ", getStrLowercase(noIssuerId));
}

function getStrIssuerId(string) {
  return string.substring(0, getIntIndexOfFirstWhiteSpace(string));
}

function getStrWithoutIssuerId(string) {
  return string.substring(
    getIntIndexOfFirstWhiteSpace(string) + 1,
    string.length,
  );
}

function getIntIndexOfFirstWhiteSpace(string) {
  return string.indexOf(" ");
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
  return string.replace(/\.|:|-|\(|\)/g, " ");
}

function getStrReplaceWhiteSpaces(string) {
  return string.replace(/\s/g, "-");
}

export const exportedForTesting = {
  getStrDropLeadAndTrailWhiteSpaces,
  getStrConsecutiveWhiteSpacesToOnlyOne,
  getStrIssuerId,
  getStrWithoutIssuerId,
  getStrLowercase,
  getStrReplaceNonAscii,
  getStrDropCharactersInBrackets,
  getStrIssuerRequiredPartsAsLowercase,
  getStrDropUndesiredCharacters,
  getStrReplaceWhiteSpaces,
};
