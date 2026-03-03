export const alphabet = 'abcdefghijklmnoprstuvxyz';

export const oppositeVowel = (vowel: string): string => {
  switch (vowel) {
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
    case 'ya':
      return 'yu';
    case 'ye':
      return 'yo';
    case 'yo':
      return 'ye';
    case 'yu':
      return 'ya';
    default:
      throw new Error(`Invalid vowel: ${vowel}`);
  }
};
