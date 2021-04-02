function findSum(array, weight) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === weight) return [i, j]
    }
  }
  return -1
}

console.log(findSum([1, 2, 3, 4, 5], 5))
