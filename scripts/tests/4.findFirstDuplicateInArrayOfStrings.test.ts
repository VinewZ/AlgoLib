import { importLatestModule } from './_importHelper'

describe('findFirstDuplicateInArrayOfStrings function', () => {
  let findFirstDuplicateInArrayOfStrings: (arr: string[]) => string

  beforeAll(async () => {
    const moduleName = '4.findFirstDuplicateInArrayOfStrings'
    const module = await importLatestModule(moduleName)
    findFirstDuplicateInArrayOfStrings = module.default
  })

  test('should return empty string when there are no duplicates', () => {
    const arr = ['a', 'b', 'c']
    const result = findFirstDuplicateInArrayOfStrings(arr)
    expect(result).toEqual('')
  })

  test('should return the first duplicate when there are duplicates', () => {
    const arr = ['a', 'b', 'a', 'c', 'b']
    const result = findFirstDuplicateInArrayOfStrings(arr)
    expect(result).toEqual('a')
  })

  test('should return the first duplicate when there are multiple duplicates', () => {
    const arr = ['a', 'b', 'b', 'a', 'c', 'c']
    const result = findFirstDuplicateInArrayOfStrings(arr)
    expect(result).toEqual('b')
  })

  test('should return empty string when the array is empty', () => {
    const arr: string[] = []
    const result = findFirstDuplicateInArrayOfStrings(arr)
    expect(result).toEqual('')
  })
})