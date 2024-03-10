function get_str_drop_lead_and_trail_whitespaces(string) {
  return string.trim();
}

function get_str_consecutive_whitespaces_to_only_one(string) {
  return string.replace(/\s+/g, " ");
}

function get_str_lowercase(string) {
  return string.toLowerCase();
}

// https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call
function get_str_remove_non_ascii(string) {
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
  get_str_drop_lead_and_trail_whitespaces,
  get_str_consecutive_whitespaces_to_only_one,
  get_str_lowercase,
  get_str_remove_non_ascii,
};
