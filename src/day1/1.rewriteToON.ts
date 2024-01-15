/*
The following function finds the greatest single number within an array, but has an efficiency of O(N2). Rewrite the function so that it becomes a speedy O(N):
def greatestNumber(array):
  for i in array:
    # Assume for now that i is the greatest:
    isIValTheGreatest = True
  
    for j in array:
      # If we find another value that is greater than i,
      # i is not the greatest:
      if j > i:
        isIValTheGreatest = False
        
  # If, by the time we checked all the other numbers, i
  # is still the greatest, it means that i is the greatest number:
  if isIValTheGreatest:
    return i

*/

export default function rewriteToON(array: number[]):number{

  if(array.length <= 0) return -1

  let greatesNumber = array[0]

  for(let i = 0; i < array.length; i++){
    if(array[i+1] > array[i]){
      greatesNumber = array[i+1]
    }
  }

  return greatesNumber

}