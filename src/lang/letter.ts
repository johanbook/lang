import { pickWeightedRandom } from "./random";
import { sum } from "./utils";

export const END_OF_WORD = "End";

export default class Character {
  map: Record<string, number> = {};

  public analyze(nextChar: string): void {
    if (!nextChar) {
      nextChar = END_OF_WORD;
    }

    if (nextChar in this.map) {
      this.map[nextChar] += 1;
    } else {
      this.map[nextChar] = 1;
    }
  }

  public getNum(): number {
    return sum(Object.values(this.map));
  }

  public next(): string {
    return pickWeightedRandom(Object.keys(this.map), Object.values(this.map));
  }

  public toString(): string {
    const text = ["Character"];
    for (const char in this.map) {
      text.push(`\t- ${char}: ${this.map[char]}`);
    }

    return text.join("\n");
  }
}
