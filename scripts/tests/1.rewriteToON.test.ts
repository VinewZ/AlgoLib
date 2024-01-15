import { importLatestModule } from './_importHelper'

describe('rewriteToON function', () => {
  let rewriteToON: (array: number[]) => number

  beforeAll(async () => {
    const modulePath = '1.rewriteToON'
    const module = await importLatestModule(modulePath)
    rewriteToON = module.default
  })

  test('should return the greatest number in the array', () => {
    const array = [1, 2, 3, 4, 5]
    const result = rewriteToON(array)
    expect(result).toBe(5)
  })
    
  test('should return the greatest number when array is in descending order', () => {
    const array = [5, 4, 3, 2, 1]
    const result = rewriteToON(array)
    expect(result).toBe(5)
  })
    
  test('should return the greatest number when it is at the middle of the array', () => {
    const array = [1, 2, 5, 4, 3]
    const result = rewriteToON(array)
    expect(result).toBe(5)
  })
    
  test('should return the only number when array has only one element', () => {
    const array = [1]
    const result = rewriteToON(array)
    expect(result).toBe(1)
  })
    
  test('should handle negative numbers correctly', () => {
    const array = [-1, -2, -3, -4, -5]
    const result = rewriteToON(array)
    expect(result).toBe(-1)
  })
})