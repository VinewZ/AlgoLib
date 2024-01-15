/*
NOT IN THE BOOK BUT CAN BE HELPFUL
Create a Stack Class to use in the next exercises.
*/

export default class stackClass{
  public length: number
  private data: unknown[]

  constructor(){
    this.length = 0
    this.data = []
  }

  push(item: unknown){
    this.data.push(item)
    this.length++
  }

  pop(){
    if(this.length <= 0) return 'Stack is empty'
    const out = this.data[this.data.length - 1]
    this.data.pop()
    this.length--
    return out
  }

  read(){
    if(this.length <= 0) return 'Stack is empty'
    return this.data[this.data.length - 1]
  }
}