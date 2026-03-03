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

export const oppositeLetter = (letter: string): string => {
  switch (letter) {
    // Consonants
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

    // Vowels
    case 'a':
      return 'u';
    case 'e':
      return 'o';
    case 'i':
      return 'i';
    case 'o':
      return 'e';
    case 'u':
      return 'a';
    default:
      throw new Error(`Invalid letter: ${letter}`);
  }
};

export const getCenter = (left: string, right: string) => left + 'i' + right;
export const getLeft = (word: string) =>
  word
    .split('')
    .map((letter) => oppositeLetter(letter))
    .join('');
