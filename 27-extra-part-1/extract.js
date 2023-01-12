// Extract Obj

const name = 'Sushi'

const rabbit = {
  name: 'Mimi',
  breed: 'Unknown',
  colour: 'Pink'
}

const { name: rbName, owner = 'Sarah', ...others } = rabbit

console.log(name)
console.log(rabbit)
console.log(rbName)
console.log(others.breed)
console.log(rabbit.name)
console.log(rabbit.breed)

// Extract Array

const scores = [92, 86, 72, 60, 51]

const [firstScore, secondScore, ...otherScores] = scores

console.log(scores[0])
console.log(firstScore)

console.log(scores[1])
console.log(secondScore)

console.log(otherScores)
