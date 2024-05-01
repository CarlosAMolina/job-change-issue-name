import { getStrModified } from "./newscripts.js";

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
