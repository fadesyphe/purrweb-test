const links = document.querySelectorAll('a[href*="#"]')

for (let link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    const blockId = link.getAttribute('href').substring(1)
    document.getElementById(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const nav = document.querySelector('nav')
const burger = document.querySelector('.burger')
const html = document.querySelector('html')

burger.addEventListener('click', menu)
nav.addEventListener('click', closeMenu)

function menu () {
  burger.classList.toggle('active')
  html.classList.toggle('lock')
  nav.classList.toggle('active')
}

function closeMenu () {
  burger.classList.remove('active')
  html.classList.remove('lock')
  nav.classList.remove('active')
}

const playBtn = document.querySelector('#play')
const pauseBtn = document.querySelector('#pause')
const video = document.querySelector('#video')
const overlay = document.querySelector('#overlay')
const videoText = document.querySelector('#videoText')
playBtn.addEventListener('click', () => {
  video.play()
  videoText.classList.add('hidden')
  playBtn.classList.add('hidden')
  pauseBtn.classList.remove('hidden')
})
pauseBtn.addEventListener('click', () => {
  video.pause()
  videoText.classList.remove('hidden')
  playBtn.classList.remove('hidden')
  pauseBtn.classList.add('hidden')
})
