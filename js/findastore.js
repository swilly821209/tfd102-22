import { socialIcon } from './iconscale.js'
import { count } from './slider.js'
import { hamburgBox } from './hamburger-menu.js'
const container = document.querySelector('.store-container');
async function filterStore(text) {
    const res = await fetch('./js/store.json')
    const data = await res.json()
    let str = ''
    data.filter((li) => {
        if (text == '') {
            str += `<tr>
            <td class="text-center">${li.no}</td>
            <td>${li.location}</td>
            <td>${li.address}</td>
            <td class="text-center">${li.businessHour}</td>
            <td class="text-center">${li.number}</td>
        </tr>`
        } else if (li.location.toLowerCase().includes(text) || li.address.toLowerCase().includes(text)) {
            str += `<tr>
            <td class="text-center">${li.no}</td>
            <td>${li.location}</td>
            <td>${li.address}</td>
            <td class="text-center">${li.businessHour}</td>
            <td class="text-center">${li.number}</td>
        </tr>`
        }
    })
    container.innerHTML = str
}
filterStore('')
const input = document.querySelector('.find-input input')
input.addEventListener('input', () => {
    filterStore(input.value)
})
