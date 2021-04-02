function camelCase(string = '') {
  let wordCount = 1
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) wordCount++
  }
  return wordCount
}

console.log(camelCase("saveChangesInTheEditor"))