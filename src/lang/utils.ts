export function capitalizeFirstLetter(text: string): string {
  const firstLetter = text[0].toUpperCase();
  return firstLetter + text.substring(1, text.length);
}

export function sum(arr: number[]): number {
  let value = 0;

  for (const x of arr) {
    value += x;
  }

  return value;
}
