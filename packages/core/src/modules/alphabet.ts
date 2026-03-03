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

export const oppositeConsonant = (consonant: string): string => {
  switch (consonant) {
    case 'b':
      return 'p';
    case 'c':
      return 'j';
    case 'd':
      return 't';
    case 'f':
      return 'v';
    case 'g':
      return 'k';
    case 's':
      return 'z';
    case 'x':
      return 'l';
    case 'm':
      return 'n';
    case 'h':
      return 'r';
    case 'p':
      return 'b';
    case 'j':
      return 'c';
    case 't':
      return 'd';
    case 'v':
      return 'f';
    case 'k':
      return 'g';
    case 'z':
      return 's';
    case 'l':
      return 'x';
    case 'n':
      return 'm';
    case 'r':
      return 'h';
    case 'y':
      return 'y';
    default:
      throw new Error(`Invalid consonant: ${consonant}`);
  }
};

export const getCenter = (left: string, right: string) => right + 'i' + left;
export const getLeft = (word: string) =>
  word
    .split('')
    .map((letter) => (isVowel(letter) ? letter : oppositeConsonant(letter)))
    .join('');
