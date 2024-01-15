/*
Use recursion to write a function that accepts a string and returns the first index that contains the character “x.” For example, the string, "abcdefghijklmnopqrstuvwxyz" has an “x” at index 23. To keep things simple, assume the string definitely has at least one “x.”
*/

export default function recursivelyPrintIndexOfX(str: string):number{

  const lowercaseString = str.toLowerCase()

  if(lowercaseString === '') return -1 
  if(lowercaseString[0] === 'x') return 0

  const indexOfX = recursivelyPrintIndexOfX(lowercaseString.slice(1))

  if (indexOfX !== -1) {
    return indexOfX + 1
  }

  return -1
}