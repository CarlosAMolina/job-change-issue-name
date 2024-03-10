import { describe, expect, it } from "@jest/globals";

import { exportedForTesting } from "../src/modify-name.js";

describe("Check function get_str_drop_lead_and_trail_whitespaces", function () {
  it("Check expected result", function () {
    expect(
      exportedForTesting.get_str_drop_lead_and_trail_whitespaces(" ab c   "),
    ).toBe("ab c");
  });
});

describe("Check function get_str_consecutive_whitespaces_to_only_one", function () {
  it("Check expected result", function () {
    expect(
      exportedForTesting.get_str_consecutive_whitespaces_to_only_one(
        " a  b    c",
      ),
    ).toBe(" a b c");
  });
});

describe("Check function get_str_lowercase", function () {
  it("Check expected result", function () {
    expect(exportedForTesting.get_str_lowercase("ÁáÑ")).toBe("ááñ");
  });
});

describe("Check function get_str_remove_non_ascii", function () {
  it("Check expected result", function () {
    expect(exportedForTesting.get_str_remove_non_ascii("áéíóúñ")).toBe(
      "aeioun",
    );
  });
});
