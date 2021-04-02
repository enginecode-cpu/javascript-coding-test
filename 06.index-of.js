function indexOf(string, subString, startIndex = 0) {
  let index = 0
  let counter = 0

  let i = startIndex
  for (i; i < string.length; i++) {
    if (string[i] === subString[counter]) counter++
    else counter = 0

    if (counter === 0) index = i + 1
    else if (counter === subString.length) return index
  }

  return -1
}

console.log(indexOf('hello', 'll'))
console.log(indexOf('hello', 'h'))
console.log(indexOf('hello', 'll', 3))
