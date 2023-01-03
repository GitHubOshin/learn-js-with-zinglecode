setTimeout(() => {
  const width = Number(prompt('Width'))
  if (isNaN(width)) {
    alert("You'll never eat me!")
    return
  }
  setTimeout(() => {
    const length = Number(prompt('Length'))
    if (isNaN(length)) {
      alert("You'll never eat me!")
      return
    }
    setTimeout(() => {
      const height = Number(prompt('Height'))
      if (isNaN(height)) {
        alert("You'll never eat me!")
        return
      }
      setTimeout(() => {
        const brownieSize = width * length * height
        alert('Volume of brownie = ' + brownieSize)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)
