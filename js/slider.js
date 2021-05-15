export let sliderPosition = 0
let sliders = document.querySelectorAll('.banners div');
let slidersLength = sliders.length
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
function update() {
    for (let slider of sliders) {
        slider.classList.remove('banner-visiable')
        slider.classList.add('banner-none')
    }
    sliders[sliderPosition].classList.add('banner-visiable');
}

next.addEventListener('click', () => {
    if (sliderPosition == slidersLength - 1) {
        sliderPosition = 0;
    } else {
        sliderPosition++
    }
    update()
})

prev.addEventListener('click', () => {
    if (sliderPosition == 0) {
        sliderPosition = slidersLength - 1;
    } else {
        sliderPosition--
    }
    console.log(sliderPosition)
    update()
})
