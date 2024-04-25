import { describe, expect, it } from "@jest/globals";

import { exportedForTesting } from "../src/modify-name.js";

describe("Check function getStrModified with all possible characters to modify", function () {
  it("Check expected result", function () {
    expect(
      exportedForTesting.getStrModified("ASDF: [foo] [bar] step - 1:.foo."),
    ).toBe("ASDF-step-1-foo");
  });
});

describe("Check function getStrDropLeadAndTrailWhiteSpaces", function () {
  it("Check expected result", function () {
    expect(
      exportedForTesting.getStrDropLeadAndTrailWhiteSpaces(" ab c   "),
    ).toBe("ab c");
  });
});

describe("Check function getStrConsecutiveWhiteSpacesToOnlyOne", function () {
  it("Check expected result", function () {
    expect(
      exportedForTesting.getStrConsecutiveWhiteSpacesToOnlyOne(" a  b    c"),
    ).toBe(" a b c");
  });
});

describe("Check function getStrIssuerRequiredPartsAsLowercase", function () {
  it("Check expected result", function () {
    expect(
      exportedForTesting.getStrIssuerRequiredPartsAsLowercase("AB CD EF"),
    ).toBe("AB cd ef");
  });
});

describe("Check function getStrIssuerId", function () {
  it("Check expected result", function () {
    expect(exportedForTesting.getStrIssuerId("AB cd")).toBe("AB");
  });
});

describe("Check function getStrWithoutIssuerId", function () {
  it("Check expected result", function () {
    expect(exportedForTesting.getStrWithoutIssuerId("AB cd")).toBe("cd");
  });
});

describe("Check function getStrLowercase", function () {
  it("Check expected result", function () {
    expect(exportedForTesting.getStrLowercase("ÁáÑ")).toBe("ááñ");
  });
});

describe("Check function getStrReplaceNonAscii", function () {
  it("Check expected result", function () {
    expect(exportedForTesting.getStrReplaceNonAscii("áéíóúñ")).toBe("aeioun");
  });
});

describe("Check function getStrDropCharactersInBrackets", function () {
  it("Check expected result", function () {
    expect(
      exportedForTesting.getStrDropCharactersInBrackets("Foo [foo] a [bar] b"),
    ).toBe("Foo  a  b");
  });
});

describe("Check function getStrDropUndesiredCharacters", function () {
  it("Check expected result", function () {
    expect(
      exportedForTesting.getStrDropUndesiredCharacters("Foo: :.foo."),
    ).toBe("Foo    foo ");
  });
});

describe("Check function getStrReplaceWhiteSpaces", function () {
  it("Check expected result", function () {
    expect(exportedForTesting.getStrReplaceWhiteSpaces("foo bar foo")).toBe(
      "foo-bar-foo",
    );
  });
});
