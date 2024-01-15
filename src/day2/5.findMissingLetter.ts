/*
Write a function that accepts a string that contains all the letters of the alphabet except one and returns the missing letter. For example, the string, "the quick brown box jumps over a lazy dog" contains all the letters of the alphabet except the letter, "f". The function should have a time complexity of O(N).
*/

export default function findMissingLetter(str: string):string{

  if(str.length === 0) return ''

  const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const set = new Set(str.toLowerCase())

  for(let i = 0; i < alphabetArray.length; i++){
    if(!set.has(alphabetArray[i])){
      return alphabetArray[i]
    }
  }

  return ''

}