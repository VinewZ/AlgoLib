/*
The following function returns whether or not a capital “X” is present within a string.
function containsX(string) {
  foundX = false;
  for(let i = 0; i < string.length; i++) {
    if (string[i] === "X") {
      foundX = true;  
    }
  }
  return foundX;
}
What is this function’s time complexity in terms of Big O Notation?
Then, modify the code to improve the algorithm’s efficiency for best- and average-case scenarios

*/

export default function improveBestAverageCase(string: string):boolean{
  for(let i = 0; i < string.length; i++){
    if(string[i] === 'X') return true
  }

  return false
}