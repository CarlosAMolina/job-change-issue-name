function get_str_drop_lead_and_trail_whitespaces(string) {
  return string.trim();
}

function get_str_consecutive_whitespaces_to_only_one(string) {
  return string.replace(/\s+/g, " ");
}

function get_str_lowercase(string) {
  return string.toLowerCase();
}

export const exportedForTesting = {
  get_str_drop_lead_and_trail_whitespaces,
  get_str_consecutive_whitespaces_to_only_one,
  get_str_lowercase,
};
