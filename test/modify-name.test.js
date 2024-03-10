import { describe, expect, it } from "@jest/globals";

import { exportedForTesting } from "../src/modify-name.js";

describe("Check function get_str_drop_lead_and_trail_whitespaces", function () {
  it("Check expected result", function () {
    expect(
      exportedForTesting.get_str_drop_lead_and_trail_whitespaces(" ab c   "),
    ).toBe("ab c");
  });
});
