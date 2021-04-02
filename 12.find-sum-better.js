function findSumBetter(array, weight) {
  let hashTable = {}
  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i]
    let difference = weight - currentElement

    if (hashTable[currentElement] !== undefined)
      return [i, hashTable[currentElement]]
    else hashTable[difference] = i
  }
  return -1
}

console.log(findSumBetter([1, 2, 3, 4, 5], 9))
console.log(findSumBetter([1, 2, 3, 4, 5], 6))
