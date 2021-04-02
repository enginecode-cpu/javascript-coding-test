export function countString(string, pattern) {
  let count = 0
  let position = string.indexOf(pattern)

  while (position !== -1) {
    count++
    position = string.indexOf(pattern, position + 1)
  }

  return count
}
