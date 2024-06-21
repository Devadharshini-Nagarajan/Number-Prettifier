import { formatNumWithSuffix } from "../helper";
import { describe, expect, test } from "@jest/globals";

describe("formatNumWithSuffix function", () => {
  test("should format 1 with suffix M to 1M", () => {
    expect(formatNumWithSuffix(1, "M")).toBe("1M");
  });

  test("should format 2.5 with suffix B to 2.5B", () => {
    expect(formatNumWithSuffix(2.5, "B")).toBe("2.5B");
  });
});
