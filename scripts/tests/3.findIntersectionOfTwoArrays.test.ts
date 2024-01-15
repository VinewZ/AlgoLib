import { importLatestModule } from './_importHelper'

describe('findIntersectionOfTwoArrays function', () => {
  let findIntersectionOfTwoArrays: (arr1: number[], arr2: number[]) => number[]

  beforeAll(async () => {
    const moduleName = '3.findIntersectionOfTwoArrays'
    const module = await importLatestModule(moduleName)
    findIntersectionOfTwoArrays = module.default
  })

  test('should return empty array when there is no intersection', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    const result = findIntersectionOfTwoArrays(arr1, arr2)
    expect(result).toEqual([])
  })

  test('should return intersection when there is intersection', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [2, 3, 4]
    const result = findIntersectionOfTwoArrays(arr1, arr2)
    expect(result).toEqual([2, 3])
  })

  test('should return intersection with negative numbers', () => {
    const arr1 = [-1, -2, -3]
    const arr2 = [-2, -3, -4]
    const result = findIntersectionOfTwoArrays(arr1, arr2)
    expect(result).toEqual([-2, -3])
  })

  test('should return intersection with duplicate numbers', () => {
    const arr1 = [1, 2, 2, 3]
    const arr2 = [2, 2, 3, 4]
    const result = findIntersectionOfTwoArrays(arr1, arr2)
    expect(result).toEqual([2, 2, 3])
  }),

  test('should return empty array when one of the arrays is empty', () => {
    const arr1 = [1, 2, 3]
    const arr2: number[] = []
    const result = findIntersectionOfTwoArrays(arr1, arr2)
    expect(result).toEqual([])
  }),

  test('should return empty array when both arrays are empty', () => {
    const arr1: number[] = []
    const arr2: number[] = []
    const result = findIntersectionOfTwoArrays(arr1, arr2)
    expect(result).toEqual([])
  })

})