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
let traitSection = document.querySelectorAll('.trait-burger .trait-burger-section');
let traitBurgerTitle = document.querySelectorAll('.trait-burger .trait-burger-title')
let traitTitle = document.querySelector('.trait-title');
console.log(burgerImgs)
console.log(traitSection)
document.addEventListener('scroll', () => {
  let top = traitTitle.offsetTop - 150
  if (scrollY > top) {
    traitBurgerBox.classList.add('burger-box-active')
  }
})
traitBurgerBox.addEventListener('transitionend', () => {
  burgerImgs[0].classList.add('breadup');
  burgerImgs[1].classList.add('meat');
  burgerImgs[2].classList.add('veggie');

})
traitBurgerBox.addEventListener('transitionend', () => {
  console.log('j')
  traitSection[0].style.opacity = '1'

})
traitSection[0].addEventListener('transitionend', () => {
  traitBurgerTitle[0].style.width = '9ch'
  traitSection[1].style.opacity = '1'
})
traitSection[1].addEventListener('transitionend', () => {
  traitBurgerTitle[1].style.width = '9ch'
  traitSection[2].style.opacity = '1'
})
traitSection[2].addEventListener('transitionend', () => {
  traitBurgerTitle[2].style.width = '9ch'
})
traitBurgerTitle[2].addEventListener('transitionend', () => {
  traitTitle.classList.add('trait-title-active')
})


const sliderBtn = document.querySelectorAll('.slider-button div');
const sliderBox = document.querySelector('.slider-box')

sliderBtn.forEach((btn, i) => {
  sliderBtn[0].style.background = 'white'
  btn.addEventListener('click', () => {
    let boxW = document.querySelector('.trait-burger-section')
    let bwidth = boxW.getBoundingClientRect().width
    sliderBtn.forEach((button) => {
       button.style.background = "#222222"
    })
    sliderBox.style.transform = `translateX(-${i * bwidth}px)`
    sliderBtn[i].style.background = 'white'
  })
})


