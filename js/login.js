const closeDialog = document.querySelector('.close-dialog')
const loginDialog = document.querySelector('.login-dialog')
const registerBtn = document.querySelectorAll('.register')
const signinBtn = document.querySelector('.signin button')
const signupBtn = document.querySelector('.signup button')
const formBox = document.querySelector('.formBox')

registerBtn[0].addEventListener('click', () => {
    loginDialog.classList.add('active')
})
registerBtn[1].addEventListener('click', () => {
    loginDialog.classList.add('active')
})

closeDialog.addEventListener('click', () => {
    loginDialog.classList.remove('active')
})

signinBtn.addEventListener('click', () => {
    loginDialog.classList.remove('change')
    formBox.classList.remove('active')
})
signupBtn.addEventListener('click', () => {
    loginDialog.classList.add('change')
    formBox.classList.add('active')

})