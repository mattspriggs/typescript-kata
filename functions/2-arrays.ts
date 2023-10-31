// getNextNum should return the first number in the array
export function getNextNum(array: number[]): number {
  return array[0]
}

// getLastSongPlayed should return the last song in the array
export function getLastSongPlayed(array: string[]): string {
  const lastSong: string = array[array.length - 1]
  return lastSong
}

// findLongestWord should return the longest word in the array
export function findLongestWord(array: string[]): string {
  let first = ''
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > first.length) {
      first = array[i]
    }
  }
  return first
}

// fillArrayWithBees should return an array of the correct length, filled with the string 'buzz'
export function fillArrayWithBees(number: number): object {
  const beeArray: object = Array.from({ length: number }, () => 'buzz')
  return beeArray
}

// sortBySize should return an array of strings sorted by length
export function sortBySize(array: string[]): object {
  const sortedArray: object = Array.from(
    array.sort((a, b) => a.length - b.length)
  )
  return sortedArray
}

// ----------- ARRAYS WITH UNIONS -----------
// Note: as we are dealing with multiple types in these arrays, TS may have a harder time inferring
// the types you expect. E.g. if you choose use a built in method, you may need to add types to
// the inner function to help TS infer the correct type.
// You can also use type assertions to help TS infer the correct type.

// sumStringsAndNumbers should return the sum of all the items in the array
// regardless of whether they are strings or numbers
export function sumStringsAndNumbers(array: string[] | number[]): number {
  let sum = 0
  array.forEach((element) => {
    if (typeof element === 'string') {
      sum = sum + Number(element)
    } else {
      sum = sum + element
    }
  })
  return sum
}

// stringsOnly will be passed an array of strings and some null values
// it should return a new array with all the null values removed - strings only!
export function stringsOnly(array: string[] | null[]): object {
  const newArray = Array.from(array.filter((word) => typeof word !== 'object'))
  return newArray
}

// ----------- TUPLES -----------

// generateUsername should return a username
// based on a tuple containing the first name, last name and year born
// e.g. generateUsername(['John', 'Smith', 1980]) should return 'smithjo_1980'
// e.g. generateUsername(['Jane', 'Doe', 1965]) should return 'doeja_1965'
export function generateUsername(user: [string, string, number]): string {
  // get last in [1] first 2 letters of first in [0] add _ then year in [2]
  const firstTwo: string = user[0].toLocaleLowerCase()
  const last: string = user[1].toLocaleLowerCase()
  const username: string = last + firstTwo.slice(0, 2) + '_' + user[2]
  return username
}

// getNextMapCoord should return the next coordinate in the direction specified
// e.g. getNextMapCoord([0, 0], 'N') should return [0, 1]
// e.g. getNextMapCoord([0, 0], 'S') should return [0, -1]
// e.g. getNextMapCoord([0, 0], 'E') should return [1, 0]
// e.g. getNextMapCoord([0, 0], 'W') should return [-1, 0]
export function getNextMapCoord(): void {}
