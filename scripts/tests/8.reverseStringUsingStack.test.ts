import { importLatestModule } from './_importHelper'

type ReverseStringUsingStack = (str: string) => string;

describe('reverseStringUsingStack function', () => {
  let reverseStringUsingStack: ReverseStringUsingStack

  beforeAll(async () => {
    const moduleName = '8.reverseStringUsingStack'
    const module = await importLatestModule(moduleName)
    reverseStringUsingStack = module.default
  })

  test('should reverse a string correctly', () => {
    const result = reverseStringUsingStack('hello')
    expect(result).toEqual('olleh')
  })

  test('should return an empty string if the input is an empty string', () => {
    const result = reverseStringUsingStack('')
    expect(result).toEqual('')
  })

  test('should handle strings with special characters', () => {
    const result = reverseStringUsingStack('h@llo!')
    expect(result).toEqual('!oll@h')
  })

  test('should handle strings with numbers', () => {
    const result = reverseStringUsingStack('12345')
    expect(result).toEqual('54321')
  })
  
  test('it should handle a string with a single character', () => {
    const input = 'a'
    const result = reverseStringUsingStack(input)
    expect(result).toEqual('a')
  })

  test('it should handle a string with spaces', () => {
    const input = 'hello world'
    const result = reverseStringUsingStack(input)
    expect(result).toEqual('dlrow olleh')
  })
  
})