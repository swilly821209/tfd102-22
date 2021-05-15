import { products } from './products.js'
import { sliderPosition } from './slider.js'
import {socialIcon} from './iconscale.js'

import { breads, veggies, meats, saucesAndCheese } from './chosedata.js'
let all = {}

const pages = document.querySelectorAll('.chose-page');
const choseTitle = document.querySelector('.chose-title');
const choseContant = document.querySelector('.chose-content');
const choseResult = document.querySelector('.chose-result');
const choseResultList = document.querySelectorAll('.chose-result li');
first();
pages[0].addEventListener('click', () => {
    first()
})
pages[1].addEventListener('click', () => {
    pageNow(1);
    all.bread = document.querySelector('input[name="bread"]:checked').id || '';
    choseTitle.textContent = 'MEAT';
    let str = '';
    meats.forEach((meat) => {
        str += `<label for="${meat.meatName}" class="meat-label">${meat.meatName}
                  <input type="radio" name="meat" id="${meat.meatName}" class="meat-input">
                  <img src="${meat.meatImg}" alt="${meat.meatName}">
                </label>`
    })
    choseContant.innerHTML = str
    document.querySelector('input').checked = true;
})
pages[2].addEventListener('click', () => {
    pageNow(2);
    all.meat = document.querySelector('input[name="meat"]:checked').id || '';
    choseTitle.textContent = 'VEGGIES';
    let str = '';
    veggies.forEach((veggie) => {
        str += `<label for="${veggie.veggieName}" class="meat-label">${veggie.veggieName}
                  <input type="checkbox" name="veggies" id="${veggie.veggieName}" class="meat-input">
                  <img src="${veggie.veggieImg}" alt="${veggie.veggieName}">
                </label>`
    })
    choseContant.innerHTML = str
    document.querySelector('input').checked = true;
})
pages[3].addEventListener('click', () => {
    pageNow(3);
    all.veggies = document.querySelectorAll('input[name="veggies"]:checked') || [];
    choseTitle.textContent = 'Sauces and Cheese';
    let str = '';
    saucesAndCheese.forEach((li) => {
        str += `<label for="${li.saucesAndCheeseName}" class="meat-label">${li.saucesAndCheeseName}
                  <input type="checkbox" name="saucesAndCheese" id="${li.saucesAndCheeseName}" class="meat-input">
                  <img src="${li.saucesAndCheeseImg}" alt="${li.saucesAndCheeseName}" class="sauces-img">
                </label>`
    })
    choseContant.innerHTML = str
    document.querySelector('input').checked = true;
})
pages[4].addEventListener('click', () => {
    pageNow(4);
    all.saucesAndCheese = document.querySelectorAll('input[name="saucesAndCheese"]:checked') || [];
    choseTitle.textContent = `${all.meat}`;
    let totalCalories = 0
    let totalFat = 0
    let totalCarbohydrate = 0
    let totalProtein = 0
    function totalAdd(Calories, Fat, Carbohydrate, Protein) {
        totalCalories += Calories
        totalFat += Fat
        totalCarbohydrate += Carbohydrate
        totalProtein += Protein
    }
    let meatIndex = meats.findIndex((meat) => {
        return all.meat == meat.meatName
    })
    console.log(meats)
    totalAdd(meats[meatIndex].meatCalories, meats[meatIndex].meatFat, meats[meatIndex].meatCarbohydrate, meats[meatIndex].meatProtein)
    let str = '';
    let breadIndex = breads.findIndex((bread) => {
        return all.bread == bread.breadName
    })
    str += `<h2 class="chose-title">BREAD<h2>
    <div class="chose-box">
      <h3>${breads[breadIndex].breadName}</h3>
      <img src="${breads[breadIndex].breadImg}" class="chose-img">
    </div>`
    totalAdd(breads[breadIndex].breadCalories, breads[breadIndex].breadFat, breads[breadIndex].breadCarbohydrate, breads[breadIndex].breadProtein)
    str += '<h2 class="chose-title">VEGGIES</h2>'
    all.veggies.forEach((li) => {
        let index = veggies.findIndex((list) => {
            return li.id == list.veggieName
        })
        totalAdd(veggies[index].veggieCalories, veggies[index].veggieFat, veggies[index].veggieCarbohydrate, veggies[index].veggieProtein)
        str += `<div class="chose-box">
        <h3>${veggies[index].veggieName}</h3>
        <img src="${veggies[index].veggieImg}" class="chose-img">
        </div>`
    })
    str += '<h2 class="chose-title">SAUCES AND CHEESE</h2>'
    all.saucesAndCheese.forEach((li) => {
        let index = saucesAndCheese.findIndex((list) => {
            return li.id == list.saucesAndCheeseName
        })
        totalAdd(saucesAndCheese[index].saucesAndCheeseCalories, saucesAndCheese[index].saucesAndCheeseFat, saucesAndCheese[index].saucesAndCheeseCarbohydrate, saucesAndCheese[index].saucesAndCheeseProtein)
        str += `<div class="chose-box">
        <h3>${saucesAndCheese[index].saucesAndCheeseName}</h3>
        <img src="${saucesAndCheese[index].saucesAndCheeseImg}" class="chose-img">
        </div>`
    })
    choseResult.style.opacity = "1"
    choseResultList[0].textContent = `Calories: ${totalCalories.toFixed(1)}Kcal`;
    choseResultList[1].textContent = `Fat: ${totalFat.toFixed(1)}g`
    choseResultList[2].textContent = `Carbohydrate: ${totalCarbohydrate.toFixed(1)}g`
    choseResultList[3].textContent = `Protein: ${totalProtein.toFixed(1)}g`
    choseContant.innerHTML = str
})

function first() {
    pageNow(0);
    choseTitle.textContent = 'BREAD';
    let str = '';
    breads.forEach((bread) => {
        str += `<label for="${bread.breadName}" class="bread-label">${bread.breadName}
                  <input type="radio" name="bread" id="${bread.breadName}" class="bread-input">
                  <img src="${bread.breadImg}" alt="${bread.breadName}">
                </label>`
    })
    choseContant.innerHTML = str
    document.querySelector('input').checked = true;
}
function pageNow(nowpage) {
    pages.forEach((page) => {
        page.classList.remove('chose-now-page')
    })
    pages[nowpage].classList.add('chose-now-page');

}