export let socialIcon = document.querySelectorAll('.header-social-icon');

socialIcon.forEach((icon) => {
  icon.addEventListener('mousemove', (e) => {
    let item = e.target;
    let itemRect = item.getBoundingClientRect()
    let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width
    let prev
    let next
    if (item.parentElement.previousElementSibling) {
      prev = item.parentElement.previousElementSibling.firstChild || null
    }
    if (item.parentElement.nextElementSibling) {
      next = item.parentElement.nextElementSibling.firstChild || null
    }
    let scale = 0.6

    resetScale()

    if (prev) {
      prev.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1))
    }

    item.style.setProperty('--scale', 1 + scale)

    if (next) {
      next.style.setProperty('--scale', 1 + scale * offset)
    }
  })
})

document.querySelector('.header-social-list').addEventListener('mouseleave', e => {
  resetScale()
})

function resetScale() {
  document.querySelectorAll('.header-social-icon').forEach(li => {
    li.style.setProperty('--scale', 1)
  })
}

