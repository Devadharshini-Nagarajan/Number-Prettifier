export function formatNumWithSuffix(num: number, type: string): string {
  return `${Number(num.toFixed(1))}${type}`;
}
