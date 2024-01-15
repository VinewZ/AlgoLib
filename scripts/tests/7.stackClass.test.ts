import { importLatestModule } from './_importHelper'

type StackClass = {
  length: number;
  push: (item: unknown) => void;
  pop: () => unknown | 'Stack is empty';
  read: () => unknown | 'Stack is empty';
};

describe('stackClass class', () => {
  let stackClass: StackClass

  beforeAll(async () => {
    const moduleName = '7.stackClass'
    const module = await importLatestModule(moduleName)
    stackClass = new module.default
  })

  test('push method should add an item to the stack', () => {
    stackClass.push(5)
    stackClass.push(7)
    expect(stackClass.length).toEqual(2)
  })

  test('pop method should remove and return the top item from the stack', () => {
    expect(stackClass.pop()).toEqual(7)
    expect(stackClass.pop()).toEqual(5)
  })

  test('pop method should return "Stack is empty" if the stack is empty', () => {
    const result = stackClass.pop()
    expect(result).toEqual('Stack is empty')
  })

  test('read method should return "Stack is empty" if the stack is empty', () => {
    const result = stackClass.read()
    expect(result).toEqual('Stack is empty')
  })
  
  test('read method should return the top item without removing it', () => {
    stackClass.push(5)
    stackClass.push(7)
    expect(stackClass.read()).toEqual(7)
    expect(stackClass.length).toEqual(2)
  })
})