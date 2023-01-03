const lyricBox = document.querySelector('.lyric-box')

function lyricPromise(lyric) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lyricElement = document.createElement('h3')
      lyricElement.innerHTML = lyric
      lyricBox.append(lyricElement)
      resolve()
    }, 3000)
  })
}

lyricPromise('🎵 ...Ya no pensaré nunca más en lo pasado')
  .then(() => {
    return lyricPromise('Para mí, quedarás en un diario de papel')
  })
  .then(() => {
    return lyricPromise('Que difícil deshacer cada instante del ayer')
  })
  .then(() => {
    return lyricPromise('Tu fantasma me atormenta... 🎵')
  })
