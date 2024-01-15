/*
Use recursion to write a function that accepts an array of strings and returns the total number of characters across all the strings. For example, if the input array is ["ab", "c", "def", "ghij"], the output should be 10 since there are 10 characters in total
*/

export default function recursivelyPrintTotalOfCharactersInArray(arr: string[]):number{
  return arr.length > 0 
    ? arr[arr.length - 1].length + recursivelyPrintTotalOfCharactersInArray(arr.slice(0, arr.length - 1)) 
    : 0
}