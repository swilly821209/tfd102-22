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
            <td class="text-center" data-title="NO"><span>${li.no}</span></td>
            <td data-title="Location"><span>${li.location}</span></td>
            <td data-title="Address"><span>${li.address}</span></td>
            <td data-title="Business Hours" class="text-center"><span>${li.businessHour}</span></td>
            <td data-title="Contact Number" class="text-center"><span>${li.number}</span></td>
        </tr>`
        } else if (li.location.toLowerCase().includes(text) || li.address.toLowerCase().includes(text)) {
            str += `<tr>
            <td data-title="NO" class="text-center"><span>${li.no}</span></td>
            <td data-title="Location" ><span>${li.location}</span></td>
            <td data-title="Address" ><span>${li.address}</span></td>
            <td data-title="Business Hours" class="text-center"><span>${li.businessHour}</span></td>
            <td data-title="Contact Number" class="text-center"><span>${li.number}</span></td>
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
