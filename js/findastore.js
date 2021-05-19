import { socialIcon } from './iconscale.js'
import { sliderPosition } from './slider.js'
const container = document.querySelector('.store-container');
async function filterStore(text) {
    const res = await fetch('./js/store.json')
    const data = await res.json()
    let str = ''
    data.filter((li) => {
        if (text == '') {
            str += `<tr>
            <td>${li.no}</td>
            <td>${li.location}</td>
            <td>${li.address}</td>
            <td>${li.businessHour}</td>
            <td>${li.number}</td>
        </tr>`
        } else if (li.location.toLowerCase().includes(text) || li.address.toLowerCase().includes(text)) {
            str += `<tr>
            <td>${li.no}</td>
            <td>${li.location}</td>
            <td>${li.address}</td>
            <td>${li.businessHour}</td>
            <td>${li.number}</td>
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
