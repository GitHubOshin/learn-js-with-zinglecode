// Add, Edit and Delete

const characters = [
  { name: 'Pu nim', rang: 'melee' },
  { name: 'Chang yim', rang: 'rang' },
  { name: 'Neur fah', rang: 'melee' }
]

console.log(characters)

// Add

const newCharacter = { name: 'Sang nuer', rang: 'rang' }
const newCharacters = [...characters, newCharacter]

console.log(newCharacters)

// Edit

const editIndex = 1
const newName = 'Nuer Sang'
const charactersForNewProject = characters.map((character, index) => {
  if (index !== editIndex) {
    return character
  }

  const editCharacter = { ...character }
  editCharacter.name = newName
  return editCharacter
})

console.log(charactersForNewProject)

// Delete

const deleteCharacters = characters.filter((character, index) => {
  return editIndex !== index
})

console.log(deleteCharacters)

// Sort

let scores = [73, 53, 68, 90]

let sortedScores = [...scores].sort((scores1, scores2) => {
  if (scores1 > scores2) return -1
  else if (scores1 < scores2) return 1
  return 0
})

console.log(scores)
console.log(sortedScores)
