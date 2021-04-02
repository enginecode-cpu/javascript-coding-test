export function commonElements(kArray = []) {
  const hashmap = {}
  let last
  const answer = []
  for (let i = 0; i < kArray.length; i++) {
    const currentArray = kArray[i]
    last = null
    for (let j = 0; j < currentArray.length; j++) {
      let currentElement = currentArray[j]
      if (last !== currentElement) {
        if (!hashmap[currentElement]) {
          hashmap[currentElement] = 1
        } else {
          hashmap[currentElement]++
        }
      }
      last = currentElement
    }
  }
  for (let key in hashmap) {
    if (hashmap[key] === kArray.length) {
      answer.push(parseInt(key))
    }
  }
  return answer
}

console.log(
  commonElements([
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2],
  ])
)
