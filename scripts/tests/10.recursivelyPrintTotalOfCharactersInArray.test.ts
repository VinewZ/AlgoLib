import { importLatestModule } from './_importHelper'

type RecursivelyPrintTotalOfCharactersInArray = (arr: string[]) => number;

describe('recursivelyPrintTotalOfCharactersInArray function', () => {
  let recursivelyPrintTotalOfCharactersInArray: RecursivelyPrintTotalOfCharactersInArray

  beforeAll(async () => {
    const moduleName = '10.recursivelyPrintTotalOfCharactersInArray'
    const module = await importLatestModule(moduleName)
    recursivelyPrintTotalOfCharactersInArray = module.default
  })

  test('should return total number of characters in an array of strings', () => {
    const array = ['ab', 'c', 'def', 'ghij']
    const result = recursivelyPrintTotalOfCharactersInArray(array)
    expect(result).toBe(10)
  })

  test('should handle an empty array', () => {
    const array: string[] = []
    const result = recursivelyPrintTotalOfCharactersInArray(array)
    expect(result).toBe(0)
  })

  test('should handle an array with a single string', () => {
    const array = ['abc']
    const result = recursivelyPrintTotalOfCharactersInArray(array)
    expect(result).toBe(3)
  })

  test('should handle an array with multiple strings of varying lengths', () => {
    const array = ['a', 'bc', 'def', 'ghij']
    const result = recursivelyPrintTotalOfCharactersInArray(array)
    expect(result).toBe(10)
  })

  test('should handle an array with a single empty string', () => {
    const input = ['']
    const result = recursivelyPrintTotalOfCharactersInArray(input)
    expect(result).toEqual(0)
  })

  test('should handle an array with no characters', () => {
    const input = ['', '', '']
    const result = recursivelyPrintTotalOfCharactersInArray(input)
    expect(result).toEqual(0)
  })

  test('should handle an array with only numbers', () => {
    const input = ['123', '45', '6']
    const result = recursivelyPrintTotalOfCharactersInArray(input)
    expect(result).toEqual(6)
  })
})