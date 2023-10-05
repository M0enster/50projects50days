const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

let playing_sound = null

sounds.forEach((sound) => {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  btn.addEventListener('click', () => {
    if (playing_sound) {
      playing_sound.pause()
      playing_sound.currentTime = 0
    }
    playing_sound = document.getElementById(sound)
    playing_sound.play()
  })
  document.getElementById('buttons').appendChild(btn)
})
