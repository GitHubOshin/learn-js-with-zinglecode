let lyrics = [
  {
    song: 'As Long as You Love Me',
    singer: 'Justin Bieber',
    lyric:
      "The grass ain't always greener on the other side It's green where you water it"
  },
  {
    song: 'Hands to Myself',
    singer: 'Selena Gomez',
    lyric: "The doctors say you're no good, But people say what they wanna say"
  },
  {
    song: 'Rad Reputation',
    singer: 'Shawn Mendes',
    lyric:
      "I don't care what they say about you baby. They don't know what you've been through."
  },
  {
    song: 'Something’s Gotta Give',
    singer: 'Camila Cabello',
    lyric: 'No reason to stay is a good reason to go.'
  }
]

let randomButton = document.querySelector('.random-btn')
let stopButton = document.querySelector('.stop-btn')
let output = document.querySelector('#output')

let timeoutId = 0

randomButton.addEventListener('click', function click() {
  output.innerHTML = 'Click STOP for stop the lyrics randomization...'
  timeoutId = setInterval(() => {
    let n = lyrics.length
    let index = Math.floor(Math.random() * n)
    let lyric = lyrics[index].lyric
    output.innerHTML = `- ${lyric} -`
  }, 1000)
})

stopButton.addEventListener('click', () => {
  clearInterval(timeoutId)
  output.innerHTML = 'We have stopped the lyrics randomization.'
})

