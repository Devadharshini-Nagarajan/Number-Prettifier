import { numberPrettifier } from "../numberPrettifier";
import { describe, expect, test } from "@jest/globals";

describe("numberPrettifier function", () => {
  test("should return Not a number to NaN", () => {
    expect(numberPrettifier(NaN)).toBe("Not a Number");
  });

  test("should prettify number 1000000 to 1M", () => {
    expect(numberPrettifier(1000000)).toBe("1M");
  });

  test("should prettify number 2500000.34 to 2.5M", () => {
    expect(numberPrettifier(2500000.34)).toBe("2.5M");
  });

  test("should return 532 as 532", () => {
    expect(numberPrettifier(532)).toBe("532");
  });

  test("should prettify number 1123456789 to 1.1B", () => {
    expect(numberPrettifier(1123456789)).toBe("1.1B");
  });

  test("should prettify number 1234567890123 to 1.2T", () => {
    expect(numberPrettifier(1234567890123)).toBe("1.2T");
  });

  test("should prettify negative number -1234567890123 to -1.2T", () => {
    expect(numberPrettifier(-1234567890123)).toBe("-1.2T");
  });

  test("should prettify number more than trillion 1500000000000000 to 1500T", () => {
    expect(numberPrettifier(1500000000000000)).toBe("1500T");
  });
});
