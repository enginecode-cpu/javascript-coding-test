function arraySlice(array, beginIndex = 0, endIndex = array.length) {
  const partArray = []
  for (let i = beginIndex; i < endIndex; i++) {
    partArray.push(array[i])
  }
  return partArray
}

console.log(arraySlice([1, 2, 3, 4]))
console.log(arraySlice([1, 2, 3, 4], 1))
console.log(arraySlice([1, 2, 3, 4, 5, 6, 7], 3, 7))
