String.prototype.replaceAll = function (oldString, newString) {
  return this.split(oldString).join(newString)
}

const string1 = 'This is a test string.'
console.log(string1.replaceAll(' ', ','))

const string2 = 'chicken,noodle,soup,broth'
console.log(string2.replaceAll(',', ' '))
