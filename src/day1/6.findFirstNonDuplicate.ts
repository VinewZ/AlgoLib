/*
Write a function that returns the first non-duplicated character in a string. For example, the string, "minimum" has two characters that only exist once—the "n" and the "u", so your function should return the "n", since it occurs first. The function should have an efficiency of O(N).
*/

export default function findFirstNonDuplicate(str: string):string{

  const map = new Map()

  for(const char of str){
    map.set(char, (map.get(char) || 0) + 1)
  }

  for(const char of str){
    if(map.get(char) === 1) return char
  }

  return ''
}