export const alphabet = 'abcdefghijklmnoprstuvxyz';

export const isVowel = (letter: string): boolean => {
  switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
};
export const isConsonant = (letter: string) => !isVowel(letter);
