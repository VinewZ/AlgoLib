/*
Write a function that accepts a string that contains all the letters of the alphabet except one and returns the missing letter. For example, the string, "the quick brown box jumps over a lazy dog" contains all the letters of the alphabet except the letter, "f". The function should have a time complexity of O(N).
*/

export default function findMissingLetter(str: string): string {
  const alphabetSet = new Set('abcdefghijklmnopqrstuvwxyz')
  const lowercaseStr = str.toLowerCase()

  for (const char of lowercaseStr) {
    alphabetSet.delete(char)
  }

  return alphabetSet.size === 1 ? alphabetSet.values().next().value : ''
}