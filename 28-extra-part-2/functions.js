// Arrow function super short version

// const cuteMessage = (message) => {
//   return '^.^ ' + message + ' ^.^'
// }

const cuteMessage = (message) => '^.^ ' + message + ' ^.^'

console.log(cuteMessage('I LUV U'))

const numbers = [1, 2, 3, 4]

// const doubleNumbers = numbers.map((number) => {
//   return number * 2
// })

const doubleNumbers = numbers.map((number) => number * 2)

console.log(numbers)
console.log(doubleNumbers)

// Function with default parameters

function showMessage(message = 'Meow', count = 2) {
  for (let i = 1; i <= count; i++) {
    console.log(i + '. ' + message)
  }
}

showMessage()
showMessage('Hola', 4)
