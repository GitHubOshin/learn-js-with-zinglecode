const dateNow = new Date()
console.log(dateNow)

const birthDay = new Date(2001, 10, 10, 6, 30)
console.log(birthDay)

const setEgg = new Date('1999-2-14')
console.log(setEgg)

if (birthDay < setEgg) {
  console.log('Human')
}
