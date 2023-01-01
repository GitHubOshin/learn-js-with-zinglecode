function inputPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numberInput = Number(prompt('Width'))
      if (isNaN(numberInput)) {
        reject(new Error("You'll never eat me!"))
        return
      }
      resolve(numberInput)
    }, 1000)
  })
}

inputPromise()
  .then((result) => {
    alert(result)
  })
  .catch((error) => {
    alert(error.message)
  })
