import { products } from './products.js'
import { socialIcon } from './iconscale.js'
import { hamburgBox } from './hamburger-menu.js'
const productContainer = document.querySelector('.product-container')
const allType = document.querySelector('.sandwiches-menu')

select('ALL')


allType.addEventListener('click', (e) => {
    if (e.target.nodeName == 'LI') {
        let seletText = e.target.textContent
        select(seletText)
    }
})
function select(select) {
    let productCard = ""
    for (let product of products) {
        if (select == 'ALL') {
            productCard += ` <li class="productCard"><a href="product.html#${product.productId}">
                         <img src="${product.productImg}" alt="${product.productName}">
                         <h4>${product.productName}</h4>
                        <p>${product.productKcal}Kcal</p>
                        </a>
                       </li>`
        } else if (product.productType == select) {
            productCard += ` <li class="productCard"><a href="product.html#${product.productId}">
            <img src="${product.productImg}" alt="${product.productName}">
            <h4>${product.productName}</h4>
            <p>${product.productKcal}Kcal</p>
            </a>
           </li>`
        }

    }

    productContainer.innerHTML = productCard
}

