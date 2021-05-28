export const hamburgBox = document.querySelector('.hamburg-menu')
const menuTop = document.querySelector('.menu-top')
const menuMiddle = document.querySelector('.menu-middle')
const menuBottom = document.querySelector('.menu-bottom')
let toggle = true;
const navList = document.querySelector('.header-nav-lists')


hamburgBox.addEventListener('click', () => {
   
    if (toggle) {
        menuTop.style.transform = 'translateY(13.5px)'
        menuMiddle.classList.toggle('menu-middle-active')
        menuBottom.style.transform = 'translateY(-13.5px)'
        setTimeout(() => {
            menuTop.style.transform = 'translateY(13.5px) rotate(45deg)'
            menuBottom.style.transform = 'translateY(-13.5px) rotate(494deg)'
        }, 500)
        navList.classList.toggle('hamburg-menu-open')
        toggle = !toggle
    } else {
        menuTop.style.transform = 'rotate(0deg)'
        menuMiddle.classList.toggle('menu-middle-active')
        menuBottom.style.transform = 'rotate(0deg)'
        setTimeout(() => {
            menuTop.style.transform = 'translateY(0px) rotate(0deg)'
            menuBottom.style.transform = 'translateY(0px) rotate(0deg)'
        }, 500)
        navList.classList.toggle('hamburg-menu-open')
        toggle = !toggle
    }
})