import { describe, expect, it } from "@jest/globals";

import { exportedForTesting } from "../src/modify-name.js";

describe("Check function getStrDropLeadAndTrailWhitespaces", function () {
  it("Check expected result", function () {
    expect(
      exportedForTesting.getStrDropLeadAndTrailWhitespaces(" ab c   "),
    ).toBe("ab c");
  });
});

describe("Check function getStrConsecutiveWhitespacesToOnlyOne", function () {
  it("Check expected result", function () {
    expect(
      exportedForTesting.getStrConsecutiveWhitespacesToOnlyOne(" a  b    c"),
    ).toBe(" a b c");
  });
});

describe("Check function getStrLowercase", function () {
  it("Check expected result", function () {
    expect(exportedForTesting.getStrLowercase("ÁáÑ")).toBe("ááñ");
  });
});

describe("Check function getStrRemoveNonAscii", function () {
  it("Check expected result", function () {
    expect(exportedForTesting.getStrRemoveNonAscii("áéíóúñ")).toBe("aeioun");
  });
});
