import { importLatestModule } from './_importHelper'

describe('findFirstNonDuplicate function', () => {
  let findFirstNonDuplicate: (str: string) => string

  beforeAll(async () => {
    const moduleName = '6.findFirstNonDuplicate'
    const module = await importLatestModule(moduleName)
    findFirstNonDuplicate = module.default
  })

  test('should return empty string when the input string is empty', () => {
    const str = ''
    const result = findFirstNonDuplicate(str)
    expect(result).toEqual('')
  })

  test('should return empty string when all characters are duplicated', () => {
    const str = 'aabbcc'
    const result = findFirstNonDuplicate(str)
    expect(result).toEqual('')
  })

  test('should return the first non-duplicate character', () => {
    const str = 'aabbcdf'
    const result = findFirstNonDuplicate(str)
    expect(result).toEqual('d')
  })

  test('should return the first non-duplicate character when there are multiple non-duplicates', () => {
    const str = 'aabbcdfe'
    const result = findFirstNonDuplicate(str)
    expect(result).toEqual('d')
  })
})