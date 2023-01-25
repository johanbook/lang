import { pickWeightedRandom } from "./random";

export default class StartingCharacters {
  private map: Record<string, number> = {};

  public analyzeCharacter(char: string): void {
    if (char in this.map) {
      this.map[char] += 1;
    } else {
      this.map[char] = 1;
    }
  }

  public generateCharacter(): string {
    return pickWeightedRandom(Object.keys(this.map), Object.values(this.map));
  }
}
