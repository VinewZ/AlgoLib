/*
Write a function that accepts an array of strings and returns the first duplicate value it finds. For example, if the array is ["a", "b", "c", "d", "c", "e", "f"], the function should return "c", since it’s duplicated within the array. (You can assume that there’s one pair of duplicates within the array.) Make sure the function has an efficiency of O(N).
*/

export default function findFirstDuplicateInArrayOfStrings(arr: string[]):string{

  const set = new Set()

  for(let i = 0; i < arr.length; i ++){
    if(set.has(arr[i])){
      return arr[i]
    }else {
      set.add(arr[i])
    }
  }

  return ''
}