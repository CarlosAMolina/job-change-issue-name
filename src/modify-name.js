document.getElementById("search-button").onclick = function () {
  run_input_query();
};

document.getElementById("search-input").onkeydown = function (e) {
  if (e.key === "Enter") {
    run_input_query();
  }
};

function run_input_query() {
  const searchTerm = document.getElementById("search-input").value;
  try {
    document.getElementById("response-error-div").classList.add("hidden");
    document.getElementById("response-div").classList.remove("hidden");
    const html = getResultHtml(searchTerm);
    document.getElementById("search-result").innerHTML = html;
  } catch (error) {
    console.error(error);
    document.getElementById("response-div").classList.add("hidden");
    document.getElementById("response-error-div").classList.remove("hidden");
    const errorMessage = getErrorMessageToShow(error);
    document.getElementById("error-output").textContent = errorMessage;
  }
}

function getResultHtml(searchTerm) {
  const modified_string = getStrModified(searchTerm);
  return "<p>".concat(modified_string, "</p>");
}

function getErrorMessageToShow(error) {
  return "Error. ".concat(error.message);
}

function getStrModified(string) {
  let result = string;
  result = getStrDropCharactersInBrackets(result);
  result = getStrLowercase(result);
  result = getStrReplaceNonAscii(result);
  result = getStrDropUndesiredCharacters(result);
  result = getStrConsecutiveWhitespacesToOnlyOne(result);
  result = getStrDropLeadAndTrailWhitespaces(result);
  result = getStrReplaceWhitespaces(result);
  return result;
}

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
  return string.replace(/\.|:/g, " ");
}

function getStrReplaceWhitespaces(string) {
  return string.replace(/\s/g, "-");
}

// Uncomment for testing.
// export const exportedForTesting = {
//   getStrModified,
//   getStrDropLeadAndTrailWhitespaces,
//   getStrConsecutiveWhitespacesToOnlyOne,
//   getStrLowercase,
//   getStrReplaceNonAscii,
//   getStrDropCharactersInBrackets,
//   getStrDropUndesiredCharacters,
//   getStrReplaceWhitespaces,
// };
