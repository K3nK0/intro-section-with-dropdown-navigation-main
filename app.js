const featuresArrow = document.getElementById('features-arrow')
const features = document.getElementById('features')
const companyArrow = document.getElementById('company-arrow')
const company = document.getElementById('company')
const menuDeroulantFeatures = document.querySelector('.menu-features')
const menuDeroulantCompany = document.querySelector('.menu-company')
const btnOpenMenu = document.querySelector('.icon-open-menu')
const menuNav = document.querySelector('nav')
const cover = document.querySelector('.cover')
const menuNavClose = document.querySelector('.icon-close-menu')


features.addEventListener('click', () => {
    featuresArrow.classList.toggle('rotateArrow')
    menuDeroulantFeatures.classList.toggle('active')
})

company.addEventListener('click', () => {
    companyArrow.classList.toggle('rotateArrow')
    menuDeroulantCompany.classList.toggle('active')
})

btnOpenMenu.addEventListener('click', () => {
    menuNav.classList.toggle('active')
    cover.classList.toggle('active-cover')
    btnOpenMenu.classList.toggle('desactive')
    menuNavClose.classList.toggle('active-icon-close')
})

menuNavClose.addEventListener('click', () => {
    menuNav.classList.toggle('active')
    cover.classList.toggle('active-cover')
    btnOpenMenu.classList.toggle('desactive')
    menuNavClose.classList.toggle('active-icon-close')
})