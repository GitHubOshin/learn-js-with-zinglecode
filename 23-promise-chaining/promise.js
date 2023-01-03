function inputPromise(title, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numberInput = Number(prompt(title))
      if (isNaN(numberInput)) {
        reject(new Error("You'll never eat me!"))
        return
      }
      resolve(numberInput)
    }, delay)
  })
}

let width = 0
let length = 0
let height = 0

inputPromise('Width', 1500)
  .then((resolve) => {
    width = resolve
    return inputPromise('Length', 1500)
  })
  .then((resolve) => {
    length = resolve
    return inputPromise('Height', 1500)
  })
  .then((resolve) => {
    height = resolve
    setTimeout(() => {
      const brownieSize = width * length * height
      alert('Volume of brownie = ' + brownieSize)
    }, 1000)
  })
  .catch((reject) => {
    alert(reject.message)
  })
