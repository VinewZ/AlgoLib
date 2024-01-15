/*
Write a function that uses a stack to reverse a string. (For example, "abcde" would become "edcba".) You can work with our earlier implementation of the Stack class.
*/

import stackClass from './7.stackClass'

export default function reverseStringUsingStack(str: string):string{

  const stack = new stackClass()
  let reversedString = ''

  for(const char of str){
    stack.push(char)
  }

  for(let i = 0; i < stack.length; i){
    reversedString += stack.pop()
  }

  return reversedString
}