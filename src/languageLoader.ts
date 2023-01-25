import latin from "./assets/texts/lorem-ipsum.txt";
import spanish from "./assets/texts/spanish.txt";
import swedish from "./assets/texts/swedish.txt";

import { request } from "./request";

const languages = {
  latin,
  spanish,
  swedish,
};

export type Language = keyof typeof languages;

export const availableLanguages = Object.keys(languages);

export default async function loadLanguage(
  languageName: Language
): Promise<string> {
  return await request(languages[languageName]);
}
