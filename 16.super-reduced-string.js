function superReducedString(string = '') {
  for (let i = 1; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i - 1)) {
      string = string.substring(0, i - 1) + string.substring(i + 1)
      i = 0
    }
  }
  if (string.length === 0) return 'Empty String'
  else return string
}

console.log(superReducedString('aaabccddd'))
console.log(superReducedString('aa'))
