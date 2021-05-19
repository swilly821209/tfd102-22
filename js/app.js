import {socialIcon} from './iconscale.js'
import { sliderPosition } from './slider.js'

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
  if (scrollY > 1000) {
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



