import { products } from './products.js'
import { count } from './slider.js'
import { socialIcon } from './iconscale.js'
import { hamburgBox } from './hamburger-menu.js'

import { breads, veggies, meats, saucesAndCheese } from './chosedata.js'
let all = {}
const page = document.querySelector('.chose-pages');
const pages = document.querySelectorAll('.chose-page');
const choseTitle = document.querySelector('.chose-title');
const choseContant = document.querySelector('.chose-content');
const choseResult = document.querySelector('.chose-result');
const choseResultList = document.querySelectorAll('.chose-result li');
const nextBtn = document.querySelector('.nextStep')
let pagePosition = 0
nextBtn.addEventListener('click', () => {
  let nextPage = pagePosition + 1
  pages[nextPage].click()
})
first();
pages[0].addEventListener('click', () => {
    first()
})
pages[1].addEventListener('click', () => {
    pageNow(1);
    pagePosition = 1;
    all.bread = document.querySelector('input[name="bread"]:checked').id || '';
    choseTitle.textContent = 'MEAT';
    let str = '';
    meats.forEach((meat) => {
        str += `<label for="${meat.meatName}">
        <input class="check" type="radio" name="meat" id="${meat.meatName}">
        <div class="card">
            <svg width="38" height="38" class="tick-box">
                <circle transform="rotate(-90 19 19)" class="circle" fill="none" stroke="#e7272d" stroke-width="5"
                    cx="19" cy="19" r="15" stroke-linecap="round" />
                <polyline class="tick" fill="none" stroke="#e7272d" stroke-width="5" points="10,20 18,26 27,14"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <img src="${meat.meatImg}" alt="${meat.meatName}">
            <p>${meat.meatName}</p>
        </div>
    </label>`
    })
    choseContant.innerHTML = str
    console.log(document.querySelector('input'))
    document.querySelector('.check').checked = true;
})
pages[2].addEventListener('click', () => {
    pageNow(2);
    pagePosition = 2;
    all.meat = document.querySelector('input[name="meat"]:checked').id || '';
    choseTitle.textContent = 'VEGGIES';
    let str = '';
    veggies.forEach((veggie) => {
        str += `<label for="${veggie.veggieName}">
        <input class="check" type="checkbox" name="veggies" id="${veggie.veggieName}">
        <div class="card">
            <svg width="38" height="38" class="tick-box">
                <circle transform="rotate(-90 19 19)" class="circle" fill="none" stroke="#e7272d" stroke-width="5"
                    cx="19" cy="19" r="15" stroke-linecap="round" />
                <polyline class="tick" fill="none" stroke="#e7272d" stroke-width="5" points="10,20 18,26 27,14"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <img src="${veggie.veggieImg}" alt="${veggie.veggieName}">
            <p>${veggie.veggieName}</p>
        </div>
    </label>`
    })
    choseContant.innerHTML = str
    document.querySelector('.check').checked = true;
})
pages[3].addEventListener('click', () => {
    pageNow(3);
    pagePosition = 3;
    all.veggies = document.querySelectorAll('input[name="veggies"]:checked') || [];
    choseTitle.textContent = 'Sauces and Cheese';
    let str = '';
    saucesAndCheese.forEach((li) => {
        str += `<label for="${li.saucesAndCheeseName}">
        <input class="check" type="checkbox" name="saucesAndCheese" id="${li.saucesAndCheeseName}">
        <div class="card">
            <svg width="38" height="38" class="tick-box">
                <circle transform="rotate(-90 19 19)" class="circle" fill="none" stroke="#e7272d" stroke-width="5"
                    cx="19" cy="19" r="15" stroke-linecap="round" />
                <polyline class="tick" fill="none" stroke="#e7272d" stroke-width="5" points="10,20 18,26 27,14"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <img  class="sauces-img" src="${li.saucesAndCheeseImg}" alt="${li.saucesAndCheeseName}">
            <p>${li.saucesAndCheeseName}</p>
        </div>
    </label>`
    })
    choseContant.innerHTML = str
    document.querySelector('.check').checked = true;
})
pages[4].addEventListener('click', () => {
    pageNow(4);
    pagePosition = 0
    all.saucesAndCheese = document.querySelectorAll('input[name="saucesAndCheese"]:checked') || [];
    choseTitle.textContent = `${all.meat.toUpperCase()}`;
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
    str += `<h2 class="chose-title">BREAD</h2>
    <input type="checkbox" id="${breads[breadIndex].breadName}">
        <div class="card">
            <svg width="38" height="38" class="tick-box">
                <circle transform="rotate(-90 19 19)" class="circle" fill="none" stroke="#e7272d" stroke-width="5"
                    cx="19" cy="19" r="15" stroke-linecap="round" />
                <polyline class="tick" fill="none" stroke="#e7272d" stroke-width="5" points="10,20 18,26 27,14"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <img src="${breads[breadIndex].breadImg}" alt="${breads[breadIndex].breadName}">
            <p>${breads[breadIndex].breadName}</p>
        </div>
   `
    totalAdd(breads[breadIndex].breadCalories, breads[breadIndex].breadFat, breads[breadIndex].breadCarbohydrate, breads[breadIndex].breadProtein)
    str += '<h2 class="chose-title">VEGGIES</h2>'
    all.veggies.forEach((li) => {
        let index = veggies.findIndex((list) => {
            return li.id == list.veggieName
        })
        totalAdd(veggies[index].veggieCalories, veggies[index].veggieFat, veggies[index].veggieCarbohydrate, veggies[index].veggieProtein)
        str += `  <input type="checkbox" id="${veggies[index].veggieName}">
        <div class="card">
            <svg width="38" height="38" class="tick-box">
                <circle transform="rotate(-90 19 19)" class="circle" fill="none" stroke="#e7272d" stroke-width="5"
                    cx="19" cy="19" r="15" stroke-linecap="round" />
                <polyline class="tick" fill="none" stroke="#e7272d" stroke-width="5" points="10,20 18,26 27,14"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <img src="${veggies[index].veggieImg}" alt="${veggies[index].veggieName}">
            <p>${veggies[index].veggieName}</p>
        </div>
       `
    })
    str += '<h2 class="chose-title">SAUCES AND CHEESE</h2>'
    all.saucesAndCheese.forEach((li) => {
        let index = saucesAndCheese.findIndex((list) => {
            return li.id == list.saucesAndCheeseName
        })
        totalAdd(saucesAndCheese[index].saucesAndCheeseCalories, saucesAndCheese[index].saucesAndCheeseFat, saucesAndCheese[index].saucesAndCheeseCarbohydrate, saucesAndCheese[index].saucesAndCheeseProtein)
        str += `
        <input type="checkbox" id="${saucesAndCheese[index].saucesAndCheeseName}">
        <div class="card">
            <svg width="38" height="38" class="tick-box">
                <circle transform="rotate(-90 19 19)" class="circle" fill="none" stroke="#e7272d" stroke-width="5"
                    cx="19" cy="19" r="15" stroke-linecap="round" />
                <polyline class="tick" fill="none" stroke="#e7272d" stroke-width="5" points="10,20 18,26 27,14"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <img  class="sauces-img" src="${saucesAndCheese[index].saucesAndCheeseImg}" alt="${saucesAndCheese[index].saucesAndCheeseName}">
            <p>${saucesAndCheese[index].saucesAndCheeseName}</p>
        </div>
        `
    })
    choseResult.style.display = "flex"
    choseResultList[0].textContent = `Calories: ${totalCalories.toFixed(1)}Kcal`;
    choseResultList[1].textContent = `Fat: ${totalFat.toFixed(1)}g`
    choseResultList[2].textContent = `Carbohydrate: ${totalCarbohydrate.toFixed(1)}g`
    choseResultList[3].textContent = `Protein: ${totalProtein.toFixed(1)}g`
    choseContant.innerHTML = str
    page.style.display = 'none'
    nextBtn.style.display = 'none'
})

function first() {
    pageNow(0);
    page.style.display = 'flex'
    choseTitle.textContent = 'BREAD';
    let str = '';
    breads.forEach((bread) => {
        str += `
                <label for="${bread.breadName}">
                <input class="check" type="radio" name="bread" id="${bread.breadName}">
                <div class="card">
                    <svg width="38" height="38" class="tick-box">
                        <circle transform="rotate(-90 19 19)" class="circle" fill="none" stroke="#e7272d" stroke-width="5"
                            cx="19" cy="19" r="15" stroke-linecap="round" />
                        <polyline class="tick" fill="none" stroke="#e7272d" stroke-width="5" points="10,20 18,26 27,14"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <img src="${bread.breadImg}" alt="${bread.breadName}">
                    <p>${bread.breadName}</p>
                </div>
            </label>
                `
    })
    choseContant.innerHTML = str
    document.querySelector('.check').checked = true;
}
function pageNow(nowpage) {
    pages.forEach((page) => {
        page.classList.remove('chose-now-page')
    })
    pages[nowpage].classList.add('chose-now-page');
    console.dir(pages[nowpage])

}