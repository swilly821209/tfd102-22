import { socialIcon } from './iconscale.js'
import { count } from './slider.js'
import { hamburgBox } from './hamburger-menu.js'

const simplexSlider = document.querySelector('.sliders');
const sliderImg = document.querySelectorAll('.sliders img');
const sliderInfo = document.querySelectorAll('.info');
let countNum = 0
sliderInfo[1].style.display = 'none'
sliderInfo[2].style.display = 'none'
sliderInfo[3].style.display = 'none'
simplexSlider.addEventListener('click', () => {
  simplexSlider.style.transition = 'all 0.5s'
  sliderInfo[countNum].classList.add('turn-page')
  hide(countNum)
  countNum++
  simplexSlider.style.transform = `translateX(-${100 * countNum}%)`
})
function hide(countNum) {
  sliderInfo[countNum].addEventListener('animationend', () => {
    sliderInfo[countNum].style.display = 'none'
    sliderInfo[countNum].classList.remove('turn-page')
    console.log(countNum)
    if (countNum == 3) {
      sliderInfo[0].style.display = 'flex'
      return
    }
    sliderInfo[countNum + 1].style.display = 'flex'
  })
}


simplexSlider.addEventListener('transitionend', () => {
  if (sliderImg[countNum].id == 'first') {
    simplexSlider.style.transition = 'none'
    countNum = 0
    simplexSlider.style.transform = `translateX(-${100 * countNum}%)`
  }
})



let orderButton = document.querySelector('.delivery-content button')
let deliverymanImg = document.querySelector('.delivery-deliveryman')
orderButton.addEventListener('click', () => {
  deliverymanImg.style.transform = 'translateX(800px)'
  deliverymanImg.addEventListener('transitionend', () => {
    window.location.assign('https://www.ubereats.com/tw/city/taipei-nwt')
  })
})
orderButton.addEventListener('mouseover', () => {
  let cloudImg = document.querySelector('.delivery-cloud');
  cloudImg.classList.add('delivery-cloud-animation')
  setTimeout(() => {
    cloudImg.classList.remove('delivery-cloud-animation')
  }, 2000)
})


let burgerImgs = document.querySelectorAll('.trait-burger-box img');
let traitBurgerBox = document.querySelector('.trait-burger-box');
let traitSection = document.querySelectorAll('.trait-burger-section');
let traitBurgerTitle = document.querySelectorAll('.trait-burger-title')
let traitTitle = document.querySelector('.trait-title');


document.addEventListener('scroll', () => {
  let top = traitTitle.offsetTop - 150
  if (scrollY > top) {
    traitTitle.classList.add('trait-title-active')
    traitBurgerBox.classList.add('trait-burger-box-active')
    traitSection.forEach((li) => {
      li.classList.add('trait-section-active')
    })
    setTimeout(() => {
      for (let i = 0; i < 4; i++) {
        burgerImgs[i].classList.add(`burger-${i + 1}`)
      }
      traitBurgerTitle.forEach((li) => {
        li.classList.add('traitburger-title-active')
      })
    }, 1000)
  }
})



