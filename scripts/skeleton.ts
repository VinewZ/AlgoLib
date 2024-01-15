type SkeletonT = {
  question: string,
  fileName: string,
  name: string,
  type: 'function' | 'class',
  tsType?: string
  parameters?: string[]
  methods?: string[]
  returnType?: string[]
}

export const skeleton: SkeletonT[] = [
  {
    question: `The following function finds the greatest single number within an array, but has an efficiency of O(N2). Rewrite the function so that it becomes a speedy O(N):
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
`,
    fileName: '1.rewriteToON',
    name: 'rewriteToON',
    type: 'function',
    parameters: ['array: number[]'],
    returnType: ['number']
  },
  {
    question: `The following function returns whether or not a capital “X” is present within a string.
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
`,
    fileName: '2.improveBestAverageCase',
    name: 'improveBestAverageCase',
    type: 'function',
    parameters: ['string: string'],
    returnType: ['boolean']
  },
  {
    question: 'Write a function that returns the intersection of two arrays. The intersection is a third array that contains all values contained within the first two arrays. For example, the intersection of [1, 2, 3, 4, 5] and [0, 2, 4, 6, 8] is [2, 4]. Your function should have a complexity of O(N). (If your programming language has a built-in way of doing this, don’t use it. The idea is to build the algorithm yourself.)',
    fileName: '3.findIntersectionOfTwoArrays',
    name: 'findIntersectionOfTwoArrays',
    type: 'function',
    parameters: ['arr1: number[]', 'arr2: number[]'],
    returnType: ['number[]']
  },
  {
    question: 'Write a function that accepts an array of strings and returns the first duplicate value it finds. For example, if the array is ["a", "b", "c", "d", "c", "e", "f"], the function should return "c", since it’s duplicated within the array. (You can assume that there’s one pair of duplicates within the array.) Make sure the function has an efficiency of O(N).',
    fileName: '4.findFirstDuplicateInArrayOfStrings',
    name: 'findFirstDuplicateInArrayOfStrings',
    type: 'function',
    parameters: ['arr: string[]'],
    returnType: ['string']
  },
  {
    question: 'Write a function that accepts a string that contains all the letters of the alphabet except one and returns the missing letter. For example, the string, "the quick brown box jumps over a lazy dog" contains all the letters of the alphabet except the letter, "f". The function should have a time complexity of O(N).',
    fileName: '5.findMissingLetter',
    name: 'findMissingLetter',
    type: 'function',
    parameters: ['str: string'],
    returnType: ['string']
  },
  {
    question: 'Write a function that returns the first non-duplicated character in a string. For example, the string, "minimum" has two characters that only exist once—the "n" and the "u", so your function should return the "n", since it occurs first. The function should have an efficiency of O(N).',
    fileName: '6.findFirstNonDuplicate',
    name: 'findFirstNonDuplicate',
    type: 'function',
    parameters: ['str: string'],
    returnType: ['string']
  },
  {
    question: `NOT IN THE BOOK BUT CAN BE HELPFUL
  Create a Stack Class to use in the next exercises.`,
    fileName: '7.stackClass',
    name: 'stackClass',
    type: 'class',
    methods: [
      `constructor(){

      }`,
      `push(){

      }`,
      `pop(){
        
      }`,
      `read(){
        
      }`
    ]
  },
  {
    question: 'Write a function that uses a stack to reverse a string. (For example, "abcde" would become "edcba".) You can work with our earlier implementation of the Stack class.',
    fileName: '8.reverseStringUsingStack',
    name: 'reverseStringUsingStack',
    type: 'function',
    parameters: ['str: string'],
    returnType: ['string']
  },
  {
    question: `Here is an array containing both numbers as well as other arrays, which in turn contain numbers and arrays:
    array = [
      1,
      2,
      3,
      [4, 5, 6],
      7,
      [8,
        [9, 10, 11,
          [12, 13, 14]
        ]
      ],
      [15, 16, 17, 18, 19,
        [20, 21, 22,
          [23, 24, 25,
            [26, 27, 29]
          ], 30, 31
        ], 32
      ], 33
    ]
    Write a recursive function that prints all the numbers (and just numbers)`,
    fileName: '9.printNumbersOnNestedArray',
    name: 'printNumbersOnNestedArray',
    type: 'function',
    tsType: 'type NestedNumberArray = (number | NestedNumberArray)[];',
    parameters: ['arr: NestedNumberArray'],
    returnType: ['void']
  },
  {
    question: 'Use recursion to write a function that accepts an array of strings and returns the total number of characters across all the strings. For example, if the input array is ["ab", "c", "def", "ghij"], the output should be 10 since there are 10 characters in total',
    fileName: '10.recursivelyPrintTotalOfCharactersInArray',
    name: 'recursivelyPrintTotalOfCharactersInArray',
    type: 'function',
    parameters: ['arr: string[]'],
    returnType: ['number']
  },
  {
    question: 'Use recursion to write a function that accepts an array of numbers and returns a new array containing just the even numbers',
    fileName: '11.recursivelyPrintEvenNumbersOfArray',
    name: 'recursivelyPrintEvenNumbersOfArray',
    type: 'function',
    parameters: ['arr: number[]'],
    returnType: ['number[]']
  },
  {
    question: 'There is a numerical sequence known as “Triangular Numbers.” The pattern begins as 1, 3, 6, 10, 15, 21, and continues onward with the Nth number in the pattern, which is N plus the previous number. For example, the 7th number in the sequence is 28, since it’s 7 (which is N) plus 21 (the previous number in the sequence). Write a function that accepts a number for N and returns the correct number from the series. That is, if the function was passed the number 7, the function would return 28.',
    fileName: '12.recursivelyPrintTriangularNumbers',
    name: 'recursivelyPrintTriangularNumbers',
    type: 'function',
    parameters: ['n: number'],
    returnType: ['number']
  },
  {
    question: 'Use recursion to write a function that accepts a string and returns the first index that contains the character “x.” For example, the string, "abcdefghijklmnopqrstuvwxyz" has an “x” at index 23. To keep things simple, assume the string definitely has at least one “x.”',
    fileName: '13.recursivelyPrintIndexOfX',
    name: 'recursivelyPrintIndexOfX',
    type: 'function',
    parameters: ['str: string'],
    returnType: ['number']
  },
  {
    question: 'This problem is known as the “Unique Paths” problem: Let’s say you have a grid of rows and columns. Write a function that accepts a number of rows and a number of columns, and calculates the number of possible “shortest” paths from the upper-leftmost square to the lower-rightmost square. For example, here’s what the grid looks like with three rows and seven columns. You want to get from the “S” (Start) to the “F” (Finish). By “shortest” path, I mean that at every step, you’re moving either one step to the right: or one step downward: Again, your function should calculate the number of shortest paths',
    fileName: '14.recursivelyPrintNumberOfShortestPaths',
    name: 'recursivelyPrintNumberOfShortestPaths',
    type: 'function',
    parameters: ['rows: number', 'cols: number'],
    returnType: ['number']
  },
  {
    question: `The following function accepts an array of numbers and returns the sum, as long as a particular number doesn’t bring the sum above 100. If adding a particular number will make the sum higher than 100, that number is ignored. However, this function makes unnecessary recursive calls. Fix the code to eliminate the unnecessary recursion:
		def add_until_100(array)
			return 0 if array.length == 0
			if array[0] + add_until_100(array[1, array.length - 1]) > 100
				return add_until_100(array[1, array.length - 1])
			else
				return array[0] + add_until_100(array[1, array.length - 1])
			end
		end`,
    fileName: '15.fixUnnecessaryRecursion',
    name: 'fixUnnecessaryRecursion',
    type: 'function',
    parameters: ['arr: number[]'],
    returnType: ['number']
  },
  {
    question: `The following function uses recursion to calculate the Nth number from a mathematical sequence known as the “Golomb sequence.” It’s terribly inefficient, though! Use memoization to optimize it. (You don’t have to actually understand how the Golomb sequence works to do this exercise.)
		def golomb(n)
			return 1 if n == 1
			return 1 + golomb(n - golomb(golomb(n - 1)));
		end`,
    fileName: '16.optimizeGolombSequence',
    name: 'optimizeGolombSequence',
    type: 'function',
    parameters: ['n: number'],
    returnType: ['number']
  },
  {
    question: `Here is a solution to the “Unique Paths” problem from an exercise in the previous chapter. Use memoization to improve its efficiency:
		def unique_paths(rows, columns)
			return 1 if rows == 1 || columns == 1
			return unique_paths(rows - 1, columns) + unique_paths(rows, columns - 1)
		end`,
    fileName: '17.optimizeUniquePaths',
    name: 'optimizeUniquePaths',
    type: 'function',
    parameters: ['rows: number', 'cols: number'],
    returnType: ['number']
  },
]