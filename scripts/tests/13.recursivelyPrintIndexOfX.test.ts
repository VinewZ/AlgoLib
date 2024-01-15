import { importLatestModule } from './_importHelper'

type RecursivelyPrintIndexOfX = (str: string) => number;

describe('recursivelyPrintIndexOfX function', () => {
  let recursivelyPrintIndexOfX: RecursivelyPrintIndexOfX

  beforeAll(async () => {
    const moduleName = '13.recursivelyPrintIndexOfX'
    const module = await importLatestModule(moduleName)
    recursivelyPrintIndexOfX = module.default
  })

  test('should return the index of first occurrence of x', () => {
    const str = 'abcdefghijklmnopqrstuvwxyz'
    const result = recursivelyPrintIndexOfX(str)
    expect(result).toBe(23)
  })

  test('should return the index of first occurrence of x, case insensitive', () => {
    const str = 'AbcdefghijklmnopqrstuvwXyz'
    const result = recursivelyPrintIndexOfX(str)
    expect(result).toBe(23)
  })

  test('should return 0 if x is the first character', () => {
    const str = 'xabc'
    const result = recursivelyPrintIndexOfX(str)
    expect(result).toBe(0)
  })

  test('should return the index of first occurrence of x in a string with multiple xs', () => {
    const str = 'abcxdefxghi'
    const result = recursivelyPrintIndexOfX(str)
    expect(result).toBe(3)
  })

  test('should return -1 if there is no x in the string', () => {
    const str = 'abc'
    const result = recursivelyPrintIndexOfX(str)
    expect(result).toBe(-1)
  })
})