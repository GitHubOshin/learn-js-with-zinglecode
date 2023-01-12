// Copy Array

let originalPrices = [299, 599, 1299]

let salePrices = originalPrices
salePrices[2] = 999

let spreadSalePrices = [...originalPrices]
spreadSalePrices[2] = 19
console.log(spreadSalePrices)

console.log('Original Prices: ' + originalPrices)
console.log('Sale Prices: ' + salePrices)

// Copy Object

let sheep1 = {
  name: 'Alpha',
  age: 1
}

let sheep2 = sheep1
sheep2.name = 'Beta'

let testSheep = { ...sheep1 }
testSheep.name = 'Test Sheep'
console.log(testSheep)

console.log('Sheep 1 = ' + sheep1.name)
console.log('Sheep 2 = ' + sheep2.name)
