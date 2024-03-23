import { describe, expect, it } from "@jest/globals";

import { exportedForTesting } from "../src/modify-name.js";

describe("Check function getStrModified", function () {
  it("Check expected result", function () {
    expect(
      exportedForTesting.getStrModified("ASDF [foo] [bar] step 1.foo."),
    ).toBe("asdf-step-1-foo");
  });
});

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
    expect(exportedForTesting.getStrDropUndesiredCharacters("Foo: :.foo.")).toBe(
      "Foo    foo ",
    );
  });
});

describe("Check function getStrReplaceWhitespaces", function () {
  it("Check expected result", function () {
    expect(exportedForTesting.getStrReplaceWhitespaces("foo bar foo")).toBe(
      "foo-bar-foo",
    );
  });
});
