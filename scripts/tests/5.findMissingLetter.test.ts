import { importLatestModule } from './_importHelper'

describe('findMissingLetter function', () => {
  let findMissingLetter: (str: string) => string

  beforeAll(async () => {
    const moduleName = '5.findMissingLetter'
    const module = await importLatestModule(moduleName)
    findMissingLetter = module.default
  })

  test('should return empty string when the input string is empty', () => {
    const str = ''
    const result = findMissingLetter(str)
    expect(result).toEqual('')
  })

  test('should return empty string when the input string contains all letters of the alphabet', () => {
    const str = 'abcdefghijklmnopqrstuvwxyz'
    const result = findMissingLetter(str)
    expect(result).toEqual('')
  })

  test('should return the missing letter when the input string has one', () => {
    const str = 'abcdfghijklmnopqrstuvwxyz'
    const result = findMissingLetter(str)
    expect(result).toEqual('e')
  })

  test('should return lowercase missing letter if input is uppercase and missing letter', () => {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXY'
    const result = findMissingLetter(str)
    expect(result).toEqual('z')
  })
})