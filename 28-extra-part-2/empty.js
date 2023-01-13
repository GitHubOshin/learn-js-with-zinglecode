/ Part 1 : Undifined, Null

// Undifined

let username
console.log(username)

// Null

let username1 = null
console.log(username1)

if (!!username1) {
  console.log('How worth am I?')
} else {
  console.log(`username1 is ${!!username1}`)
}

let username2 = 'Linda'
console.log(username2)

if (!!username2) {
  console.log('How worth am I?')
}

// Part 2 : Empty

let displayName = username ?? 'Empty'
console.log(displayName)
