import { importLatestModule } from './_importHelper'

type NestedNumberArray = (number | NestedNumberArray)[];
type PrintNumbersOnNestedArray = (arr: NestedNumberArray) => void;

describe('printNumbersOnNestedArray function', () => {
  let printNumbersOnNestedArray: PrintNumbersOnNestedArray
  let consoleSpy: jest.SpyInstance

  beforeAll(async () => {
    const moduleName = '9.printNumbersOnNestedArray'
    const module = await importLatestModule(moduleName)
    printNumbersOnNestedArray = module.default
  })

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log')
  })

  afterEach(() => {
    consoleSpy.mockRestore()
  })

  test('should print all numbers in a nested array', () => {
    const array = [1, 2, [3, 4, [5, 6]], 7]
    printNumbersOnNestedArray(array)
    expect(consoleSpy).toHaveBeenCalledTimes(7)
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 1)
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 2)
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 3)
    expect(consoleSpy).toHaveBeenNthCalledWith(4, 4)
    expect(consoleSpy).toHaveBeenNthCalledWith(5, 5)
    expect(consoleSpy).toHaveBeenNthCalledWith(6, 6)
    expect(consoleSpy).toHaveBeenNthCalledWith(7, 7)
  })

  test('should handle an empty array', () => {
    const array: NestedNumberArray = []
    printNumbersOnNestedArray(array)
    expect(consoleSpy).not.toHaveBeenCalled()
  })

  test('should handle an array with a single number', () => {
    const array = [1]
    printNumbersOnNestedArray(array)
    expect(consoleSpy).toHaveBeenCalledTimes(1)
    expect(consoleSpy).toHaveBeenCalledWith(1)
  })

  test('should handle an array with a single nested array', () => {
    const array = [[1, 2, 3]]
    printNumbersOnNestedArray(array)
    expect(consoleSpy).toHaveBeenCalledTimes(3)
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 1)
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 2)
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 3)
  })
})