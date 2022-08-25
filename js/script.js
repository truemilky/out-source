//Tabs
const openButtons = document.querySelectorAll('.about__right--button-open');
const closeButtons = document.querySelectorAll('.about__right--button-close');

openButtons.forEach(el => el.addEventListener('click', (e) => {
    e.currentTarget.parentElement.previousElementSibling.children[1].classList.add('active');
    e.currentTarget.classList.add('disabled');
    e.currentTarget.previousElementSibling.classList.add('active');
}))

closeButtons.forEach(el => el.addEventListener('click', (e) => {
    e.currentTarget.parentElement.previousElementSibling.children[1].classList.remove('active');
    e.currentTarget.classList.remove('active');
    e.currentTarget.nextElementSibling.classList.remove('disabled');
}))

//Form
const form = document.forms[0];
const inputs = document.querySelectorAll('.input');

inputs.forEach(el => el.addEventListener('focus', (e) => {
    e.target.previousElementSibling.style.display = 'none';
}))

inputs.forEach(el => el.addEventListener('blur', (e) => {
    if (!e.target.value) {
        e.target.previousElementSibling.style.display = 'block';
    }
}))

