import { importLatestModule } from './_importHelper'

type RecursivelyPrintEvenNumbersOfArray = (arr: number[]) => number[];

describe('recursivelyPrintEvenNumbersOfArray function', () => {
  let recursivelyPrintEvenNumbersOfArray: RecursivelyPrintEvenNumbersOfArray

  beforeAll(async () => {
    const moduleName = '11.recursivelyPrintEvenNumbersOfArray'
    const module = await importLatestModule(moduleName)
    recursivelyPrintEvenNumbersOfArray = module.default
  })

  test('should return all even numbers in an array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const result = recursivelyPrintEvenNumbersOfArray(array)
    expect(result).toEqual([2, 4, 6, 8, 10])
  })

  test('should handle an empty array', () => {
    const array: number[] = []
    const result = recursivelyPrintEvenNumbersOfArray(array)
    expect(result).toEqual([])
  })

  test('should handle an array with a single number', () => {
    const array = [1]
    const result = recursivelyPrintEvenNumbersOfArray(array)
    expect(result).toEqual([])
  })

  test('should handle an array with a single even number', () => {
    const array = [2]
    const result = recursivelyPrintEvenNumbersOfArray(array)
    expect(result).toEqual([2])
  })

  test('should handle an array with all odd numbers', () => {
    const array = [1, 3, 5, 7, 9]
    const result = recursivelyPrintEvenNumbersOfArray(array)
    expect(result).toEqual([])
  })

  test('should filter even numbers from an array with no even numbers', () => {
    const array = [1, 3, 5, 7, 9]
    const result = recursivelyPrintEvenNumbersOfArray(array)
    expect(result).toEqual([])
  })
})