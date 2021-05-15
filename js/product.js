import { products } from './products.js';
import {socialIcon} from './iconscale.js'
let product = document.querySelector('.product');
function render() {
  let hashId = location.hash.replace('#', '')
  let index = products.findIndex((product) => {
    return product.productId == hashId
  })
  let productIndex = products[index]
  if (!productIndex.ProductDetails) {
    productIndex.ProductDetails = ''
  }

  let str = `<h1>${productIndex.productName}</h1>
  <img src="${productIndex.productImg}">
  <div class="recommend"></div>
  <p>${productIndex.ProductDetails}</p>
  `
  product.innerHTML = str
  for (let i = 0; i < productIndex.productRecommend.length; i++) {
    let box = document.createElement('div')
    box.classList.add('recommend-sauces')
    box.innerHTML = `
     <img src="${productIndex.productRecommend[i].img}">
     <p>${productIndex.productRecommend[i].name}</p>
    `
    let recommend = document.querySelector('.recommend');
    recommend.appendChild(box)
  }
}
render()
