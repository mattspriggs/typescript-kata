// getGreeting should return a string containing
// 'Hello ' and the contents of `name`
export function getGreeting(name: string): string {
  const greeting = `Hello ${name}`
  return greeting
}

// getFullName should return a string containing the contents
// of `firstName` and the contents of `lastName`
export function getFullName(firstName: string, lastName: string): string {
  const fullName = `${firstName} ${lastName}`
  return fullName
}

// addNumbers should return the sum of the two parameters
export function addNumbers(a: number, b: number): number {
  const result: number = a + b
  return result
}

// bottlesOfBeerOnTheWall should return a string containing
// the number of bottles of beer on the wall, but!
// if the number of bottles is 0, it should return 'No more bottles of beer on the wall'
export function bottlesOfBeerOnTheWall(bottles: number): string {
  let numberOfBottles = ''
  if (bottles > 0) {
    return (numberOfBottles = `${bottles} bottles of beer on the wall`)
  } else {
    return (numberOfBottles = 'No more bottles of beer on the wall')
  }
}

// printGreeting should not return a value,
// instead it should console.log a string containing
// 'Hello name'
export function printGreeting(word: string): void {
  return console.log(`Hello ${word}`)
}

// ----------- OPTIONAL PARAMS -----------

// sumFrame accepts two balls and returns the sum of the two numbers
// sometimes there may be a third ball, if there is, add it to the sum
export function sumFrame(num1: number, num2: number, num3?: number): number {
  let total: number
  if (num1 && num2 && num3) {
    total = num1 + num2 + num3
  } else {
    total = num1 + num2
  }
  return total
}

// greetFullName should return a string containing the full name
// including middle name if it exists
export function greetFullName(
  first: string,
  last: string,
  middle?: string
): string {
  let fullName: string
  if (first && last && middle) {
    return (fullName = `Hello ${first} ${middle} ${last}`)
  } else {
    return (fullName = `Hello ${first} ${last}`)
  }
}

// ----------- UNIONS -----------

// addNumbersAndStrings accepts two arguments that can be either a number or a number inside a string
// the sum of the two arguments should be returned as a number regardless of their original type
export function addNumbersAndStrings(): void {}

// fizzbuzz accepts a number and returns a string or number
// if the number is divisible by 3, return 'fizz'
// if the number is divisible by 5, return 'buzz'
// if the number is divisible by 3 and 5, return 'fizzbuzz'
// otherwise, return the original number
export function fizzbuzz(): void {}

// ----------- TYPE ALIASES -----------

type StringOrNumber = void

// sumMatchingType accepts two arguments that can be either a number or a string
// if both arguments are numbers, the sum of the two arguments should be returned as a number
// if either argument is a string, the two arguments should be summed together and returned as a string
export function sumMatchingType(): void {}

// getNextTrafficLightColour accepts the current colour of a traffic light colour and returns the next colour
// the light sequence is green -> yellow -> red -> green -> yellow -> (etc)
// Remember to use a type alias!
export function getNextTrafficLightColour(): void {}
