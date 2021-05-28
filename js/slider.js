export let count = 1
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

const sliderContainer = document.querySelector('.banners')
const sliderBanners = document.querySelectorAll('.banners>div')
console.log(sliderBanners.length)
let size = 100
sliderContainer.style.transform = `translateX(${-size * count}%)`

next.addEventListener('click', () => {
    if(count >= sliderBanners.length - 1)return;
    sliderContainer.style.transition = 'transform 0.6s'
    count++
    sliderContainer.style.transform = `translateX(${-size * count}%)`
    console.log(count)
})
prev.addEventListener('click', () => {
    if(count <= 0)return;
    sliderContainer.style.transition = 'transform 0.6s'
    count--
    sliderContainer.style.transform = `translateX(${-size * count}%)`
    console.log(count)
})

sliderContainer.addEventListener('transitionend', () => {
    sliderContainer.style.transition = 'none';
    if(sliderBanners[count].id == 'last'){
        count = sliderBanners.length - 2
        sliderContainer.style.transform = `translateX(${-size * count}%)`
    }
    if(sliderBanners[count].id == 'first'){
        count = sliderBanners.length - count
        sliderContainer.style.transform = `translateX(${-size * count}%)`
    }
    
})