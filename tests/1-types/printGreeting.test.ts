import { printGreeting } from "../../files/1-types"

describe('printGreeting', () => {
  const spy = jest.spyOn(console, 'log').mockImplementation((str) => {})

  it('does not return a value', () => {
    expect(printGreeting('name')).toBeUndefined()
  })

  it('should console.log a string containing "Hello" and the contents of `name`', () => {
    printGreeting('World')
    expect(spy).toHaveBeenCalledWith('Hello World')
  })
})