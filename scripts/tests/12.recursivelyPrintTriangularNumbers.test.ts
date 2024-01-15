import recursivelyPrintTriangularNumbers from '../../src/day1/12.recursivelyPrintTriangularNumbers'

describe('recursivelyPrintTriangularNumbers function', () => {
  test('should return 1 for input 1', () => {
    expect(recursivelyPrintTriangularNumbers(1)).toBe(1)
  })

  test('should return 3 for input 2', () => {
    expect(recursivelyPrintTriangularNumbers(2)).toBe(3)
  })

  test('should return 6 for input 3', () => {
    expect(recursivelyPrintTriangularNumbers(3)).toBe(6)
  })

  test('should return 10 for input 4', () => {
    expect(recursivelyPrintTriangularNumbers(4)).toBe(10)
  })

  test('should return 15 for input 5', () => {
    expect(recursivelyPrintTriangularNumbers(5)).toBe(15)
  })

  test('should return 21 for input 6', () => {
    expect(recursivelyPrintTriangularNumbers(6)).toBe(21)
  })
})