// Search string

const word = 'Black Earring'
const searchWord = 'Ear'
const isFound = word.includes(searchWord)
console.log(isFound)

const isFound2 = word.toLowerCase().includes(searchWord.toLowerCase())
console.log(isFound2)

// Slice string

const productCode = 'th-926405'
const country = productCode.slice(0, 2)
const productId = productCode.slice(3)

console.log(productCode)
console.log(country)
console.log(productId)

// Temlate string

console.log(`Country = ${country}, Product Id = ${productId}`)
