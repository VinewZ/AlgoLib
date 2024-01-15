import { importLatestModule } from './_importHelper'

describe('improveBestAverageCase function', () => {
  let improveBestAverageCase: (array: number[]) => number

  beforeAll(async () => {
    const moduleName = '2.improveBestAverageCase'
    const module = await importLatestModule(moduleName)
    improveBestAverageCase = module.default
  })

  describe('improveBestAverageCase function', () => {
    let improveBestAverageCase: (string: string) => boolean
  
    beforeAll(async () => {
      const moduleName = '2.improveBestAverageCase'
      const module = await importLatestModule(moduleName)
      improveBestAverageCase = module.default
    })
  
    test('should return true when string contains "X"', () => {
      const string = 'Hello, X!'
      const result = improveBestAverageCase(string)
      expect(result).toBe(true)
    })
  
    test('should return false when string does not contain "X"', () => {
      const string = 'Hello, World!'
      const result = improveBestAverageCase(string)
      expect(result).toBe(false)
    })
  
    test('should return true when string contains multiple "X"s', () => {
      const string = 'X marks the spot, X!'
      const result = improveBestAverageCase(string)
      expect(result).toBe(true)
    })
  
    test('should return false for an empty string', () => {
      const string = ''
      const result = improveBestAverageCase(string)
      expect(result).toBe(false)
    })

    test('should return false when string contains "x" (lowercase)', () => {
      const string = 'Hello, x!'
      const result = improveBestAverageCase(string)
      expect(result).toBe(false)
    })
  })
})