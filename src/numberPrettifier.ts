import { formatNumWithSuffix } from "./helper";

// constants
const limits = [
  { value: 1e12, suffix: "T" },
  { value: 1e9, suffix: "B" },
  { value: 1e6, suffix: "M" },
];

export function numberPrettifier(num: number): string {
  if (isNaN(num)) {
    return "Not a Number";
  }

  for (const el of limits) {
    const absNum = Math.abs(num);
    if (absNum >= el.value) {
      return formatNumWithSuffix(num / el.value, el.suffix);
    }
  }

  return num.toLocaleString();
}
