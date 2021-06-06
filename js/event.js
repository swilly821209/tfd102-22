import {socialIcon} from './iconscale.js'
import { hamburgBox } from './hamburger-menu.js'
const dialogBtn = document.querySelector('.event-three')
const dialog = document.querySelector('.event-dialog')
dialogBtn.addEventListener('click',() =>{
    dialog.classList.add('active')
})
dialog.addEventListener('click',( ) =>{
    dialog.classList.remove('active')
})
document.addEventListener('scroll', ()=> {
    dialog.classList.remove('active')
})