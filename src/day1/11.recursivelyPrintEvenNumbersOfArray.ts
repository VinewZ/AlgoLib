/*
Use recursion to write a function that accepts an array of numbers and returns a new array containing just the even numbers
*/

export default function recursivelyPrintEvenNumbersOfArray(arr: number[]):number[]{
  const evenArr: number[] = []

  function recurse(arr2: number[]):number[]{
    if(arr2.length === 0) return evenArr

    if(arr2[0] % 2 === 0){
      evenArr.push(arr2[0])
    }

    return recurse(arr2.slice(1))
  }

  return recurse(arr)
}