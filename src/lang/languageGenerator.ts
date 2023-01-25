import Character, { END_OF_WORD } from "./letter";
import StartingCharacters from "./startingCharacters";
import { capitalizeFirstLetter, sum } from "./utils";

type Chars = Record<string, Character>;

export default class LanguageGenerator {
  private chars: Chars = {};
  private startingCharacters: StartingCharacters = new StartingCharacters();

  constructor(chars?: Chars, startingCharacters?: StartingCharacters) {
    if (chars) {
      this.chars = chars;
    }

    if (startingCharacters) {
      this.startingCharacters = startingCharacters;
    }
  }

  public analyzeText(text: string): LanguageGenerator {
    const words = text.split(" ");
    for (const word of words) {
      this.analyzeWord(word);
    }

    return new LanguageGenerator(this.chars, this.startingCharacters);
  }

  public generateText(lenght: number): string {
    const sentences = [];
    for (let index = 0; index < lenght; index++) {
      sentences.push(this.generateSentence(5));
    }
    return sentences.join(" ");
  }

  public toString(): string {
    const text = ["LanguageGenerator"];
    for (const char in this.chars) {
      text.push(`- ${char}: ${this.chars[char].toString()}`);
    }
    return text.join("\n");
  }

  private analyzeCharacter(char: string, nextChar?: string): void {
    if (!(char in this.chars)) {
      this.chars[char] = new Character();
    }

    // @ts-ignore
    this.chars[char].analyze(nextChar);
  }

  private analyzeWord(word: string): void {
    const sanitizedWord = this.sanitizeText(word.toLowerCase());
    const characters = [...sanitizedWord];

    this.startingCharacters.analyzeCharacter(characters[0]);

    for (let index = 0; index < characters.length; index++) {
      const currentCharacter = characters[index];
      const nextCharacter = characters[index + 1];
      this.analyzeCharacter(currentCharacter, nextCharacter);
    }
  }

  private generateSentence(length: number): string {
    const words = [];
    for (let index = 0; index < length; index++) {
      words.push(this.generateWord());
    }
    const sentence = words.join(" ");

    return capitalizeFirstLetter(sentence) + ".";
  }

  private generateWord(maxChars = 100): string {
    const characters = [];

    let nextCharacter = this.startingCharacters.generateCharacter();

    while (nextCharacter !== END_OF_WORD && characters.length < maxChars) {
      const character = this.chars[nextCharacter];
      if (!character) {
        throw new Error(`Character '${nextCharacter}' not found in internal map`);
      }

      characters.push(nextCharacter);
      nextCharacter = character.next();
    }

    return characters.join("");
  }

  private sanitizeText(text: string): string {
    return text.replace(/[^a-zäöåñ]/g, "");
  }

  public getNumChars(): number {
    const values = Object.values(this.chars).map((char) => char.getNum());
    return sum(values);
  }
}
